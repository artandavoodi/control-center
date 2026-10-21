/**
 * Neuroartan Public Icon Exporter
 * Canonical source-to-public asset propagation authority.
 */

import fs from "node:fs";
import path from "node:path";
import {iconTargets,iconRepositories} from "../../../propagation/icon-targets.js";

const ROOT =
  path.resolve(
    path.dirname(new URL(import.meta.url).pathname),
    "../../../.."
  );

const SOURCE_ROOT =
  path.join(ROOT, "registry/icons/source");

const PUBLIC_ROOT = iconTargets.control;

const WEBSITE_PUBLIC_ROOT = iconTargets.website;

function removeStaleExportSiblings(destination) {
  const parent =
    path.dirname(destination);

  const basename =
    path.basename(destination);

  const duplicatePattern =
    new RegExp(
      `^${basename.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&")} \\d+$`,
      "u"
    );

  if (!fs.existsSync(parent)) {
    return;
  }

  for (const entry of fs.readdirSync(parent, { withFileTypes: true })) {
    if (
      entry.isDirectory() &&
      duplicatePattern.test(entry.name)
    ) {
      fs.rmSync(
        path.join(parent, entry.name),
        {
          recursive: true,
          force: true
        }
      );
    }
  }
}

function propagateDirectory(
  source,
  destination,
  propagateFile
) {
  fs.mkdirSync(destination, { recursive: true });

  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    if (entry.name === ".DS_Store") {
      continue;
    }

    const sourcePath =
      path.join(source, entry.name);

    const destinationPath =
      path.join(destination, entry.name);

    if (entry.isDirectory()) {
      propagateDirectory(
        sourcePath,
        destinationPath,
        propagateFile
      );
      continue;
    }

    if (entry.isFile()) {
      propagateFile(
        sourcePath,
        destinationPath
      );
    }
  }
}

function pruneGeneratedMirror(
  source,
  destination
) {
  if (!fs.existsSync(destination)) {
    return;
  }

  for (const entry of fs.readdirSync(destination, { withFileTypes: true })) {
    const destinationPath =
      path.join(destination, entry.name);

    if (entry.name === ".DS_Store") {
      fs.rmSync(
        destinationPath,
        { force: true }
      );
      continue;
    }

    const sourcePath =
      path.join(source, entry.name);

    if (!fs.existsSync(sourcePath)) {
      fs.rmSync(
        destinationPath,
        {
          recursive: true,
          force: true
        }
      );
      continue;
    }

    const sourceStat =
      fs.statSync(sourcePath);

    if (entry.isDirectory() && sourceStat.isDirectory()) {
      pruneGeneratedMirror(
        sourcePath,
        destinationPath
      );
      continue;
    }

    if (entry.isFile() && sourceStat.isFile()) {
      continue;
    }

    fs.rmSync(
      destinationPath,
      {
        recursive: true,
        force: true
      }
    );
  }
}

// Hard links are not stable inside iCloud-backed folders. Generated mirrors
// remain deployment-only outputs and are verified against source by hash.
export function assertPreservesSvgArtwork(incoming, existing, destination) {
  const placeholder=svg=>!/<(?:path|rect|line|polygon|polyline|ellipse|use|image|text)\b/.test(svg)&&(!/<circle\b/.test(svg)||((svg.match(/<circle\b/g)||[]).length===1&&/<circle\b[^>]*\br="2"/.test(svg)));
  if (placeholder(incoming) && !placeholder(existing) && /<(?:path|rect|line|circle|polygon|polyline|ellipse|use|image|text)\b/.test(existing)) {
    throw new Error(`Icon artwork would be replaced by a placeholder: ${destination}. Promote the artwork to its canonical source before synchronizing.`);
  }
}

function copyDeploymentFile(source, destination) {
  if (source.endsWith('.svg') && fs.existsSync(destination)) {
    const incoming=fs.readFileSync(source,'utf8');
    const existing=fs.readFileSync(destination,'utf8');
    assertPreservesSvgArtwork(incoming,existing,destination);
  }
  fs.copyFileSync(
    source,
    destination
  );
}

class PublicIconExporter {
  exportPaths(paths) {
    const transfers=[];
    for (const relative of paths) {
      if (!/^[a-z0-9/_-]+\.svg$/i.test(relative) || relative.includes('..')) throw new Error('Invalid registered SVG path');
      const source = path.join(SOURCE_ROOT, relative);
      for (const [name,root] of Object.entries(iconTargets)) {
        if (!fs.existsSync(path.join(iconRepositories[name], '.git'))) throw new Error('Registered target repository is unavailable: '+name);
        const destination = path.join(root, relative);
        const incoming=fs.readFileSync(source,'utf8');
        if(fs.existsSync(destination))assertPreservesSvgArtwork(incoming,fs.readFileSync(destination,'utf8'),destination);
        transfers.push({source,destination});
      }
    }
    for(const {source,destination} of transfers){fs.mkdirSync(path.dirname(destination),{recursive:true});copyDeploymentFile(source,destination);}
    return { registered: paths.length };
  }

  export() {
    removeStaleExportSiblings(
      PUBLIC_ROOT
    );

    removeStaleExportSiblings(
      WEBSITE_PUBLIC_ROOT
    );

    pruneGeneratedMirror(
      SOURCE_ROOT,
      PUBLIC_ROOT
    );

    pruneGeneratedMirror(
      SOURCE_ROOT,
      WEBSITE_PUBLIC_ROOT
    );

    propagateDirectory(
      SOURCE_ROOT,
      PUBLIC_ROOT,
      copyDeploymentFile
    );

    propagateDirectory(
      SOURCE_ROOT,
      WEBSITE_PUBLIC_ROOT,
      copyDeploymentFile
    );

    pruneGeneratedMirror(
      SOURCE_ROOT,
      PUBLIC_ROOT
    );

    pruneGeneratedMirror(
      SOURCE_ROOT,
      WEBSITE_PUBLIC_ROOT
    );

    return {
      source: SOURCE_ROOT,
      public_assets: PUBLIC_ROOT,
      website_public_assets: WEBSITE_PUBLIC_ROOT
    };
  }
}

export const publicIconExporter =
  new PublicIconExporter();
