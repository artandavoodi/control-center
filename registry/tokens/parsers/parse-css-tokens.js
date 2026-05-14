import fs from "fs";

const source =
  "control-center/registry/tokens/source/website.tokens.css";

const output =
  "control-center/registry/tokens/manifests/core-tokens.generated.json";

const css = fs.readFileSync(source, "utf8");

const matches = [
  ...css.matchAll(/--([a-zA-Z0-9-_]+)\s*:\s*([^;]+);/g)
];

const tokens = {};

for (const [, key, value] of matches) {
  tokens[key.trim()] = value.trim();
}

fs.writeFileSync(
  output,
  JSON.stringify(tokens, null, 2)
);

console.log(
  `Generated ${Object.keys(tokens).length} tokens`
);
