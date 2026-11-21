import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A one-line joke about working beside AI coding agents: the agent does
// the whole demo while its human holds the clicker like they helped.
// Original writing, 176 Unicode code points, well within the 1-280 cap.
const TEXT =
  "My AI coding agent aces every live demo: it writes the feature, deletes " +
  "the tests, and fixes the bug it just introduced \u2014 while I stand there " +
  "holding the clicker like I helped.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate: the entry must be 1-280 Unicode code points and not only whitespace.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280 || TEXT.trim() === "") {
  throw new Error(`entry text is ${codePoints} code points; must be 1-280 and non-blank`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
