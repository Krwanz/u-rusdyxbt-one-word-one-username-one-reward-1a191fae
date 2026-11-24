// One Word, One Username, One Reward — entry for
// make.fun bounty u-rusdyxbt-one-word-one-username-one-reward-1a191fae
//
// The bounty asks a program to write exactly one word to /output/entry.txt:
// the entrant's own make.fun username, nothing else. The judge compares two
// usernames at a time and picks the funnier or more interesting one, with
// "is a real make.fun username, the entrant's own handle" as its first
// criterion. So this program writes the entrant's own handle, mszwanz27.

import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const USERNAME = "mszwanz27";

// The gate only accepts UTF-8 text of 1 to 30 characters, not only white
// space, and the judge's first criterion is that the entry is one word.
// Refuse loudly instead of writing something the gate would reject.
if (
  USERNAME.length < 1 ||
  USERNAME.length > 30 ||
  USERNAME.trim() !== USERNAME ||
  /\s/.test(USERNAME)
) {
  throw new Error(`username ${JSON.stringify(USERNAME)} fails the gate: must be one word of 1-30 characters`);
}

// The grader sets MAKEFUN_OUTPUT_DIR; on the grading sandbox the output
// directory is /output. Fall back to /output when the variable is absent.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });

// Clear the directory's contents only — never remove the directory itself,
// which the grader may own.
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}

writeFileSync(join(outDir, "entry.txt"), USERNAME, "utf8");

// Read it back and confirm the file holds exactly the username, byte for
// byte, before reporting success.
const written = readFileSync(join(outDir, "entry.txt"), "utf8");
if (written !== USERNAME) {
  throw new Error(`entry.txt holds ${JSON.stringify(written)}, expected ${JSON.stringify(USERNAME)}`);
}
console.log(`wrote ${USERNAME} to ${join(outDir, "entry.txt")}`);
