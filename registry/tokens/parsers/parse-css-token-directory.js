import fs from "fs";
import path from "path";

const sourceRoot =
  "control-center/registry/tokens/source/website";

const output =
  "control-center/registry/tokens/manifests/core-tokens.generated.json";

const files = fs
  .readdirSync(sourceRoot)
  .filter((file) => file.endsWith(".css"))
  .sort();

const tokens = {};

for (const file of files) {
  const fullPath = path.join(sourceRoot, file);
  const css = fs.readFileSync(fullPath, "utf8");

  const matches = [
    ...css.matchAll(/--([a-zA-Z0-9-_]+)\s*:\s*([^;]+);/g)
  ];

  for (const [, key, value] of matches) {
    tokens[key.trim()] = value.trim();
  }
}

fs.writeFileSync(
  output,
  JSON.stringify(tokens, null, 2)
);

console.log(`Generated ${Object.keys(tokens).length} tokens`);
