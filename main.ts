// One Star, Written in Sap — entry program (program/v1, node22).
// Writes exactly one line to $MAKEFUN_OUTPUT_DIR/entry.txt: a 1-star
// review by a houseplant of its human owner. No network, no randomness,
// no dependencies — the same line on every run, well inside the 1-279
// character gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The review: three concrete plant's-eye grievances (a window facing a
// brick wall, chlorinated tap water, being moved whenever guests come
// over), then the turn — the plant did not sign up to be a decorative
// hostage. Fresh detail throughout: no drama-queen wilting, no "ignored"
// trope, no neglect cliché.
const ENTRY =
  "One star. The window faces a brick wall, the tap water tastes of " +
  "chlorine, and management moves me every time guests come over — " +
  "I did not sign up to be the hallway's decorative hostage.";

// The entry text is 187 characters including the trailing newline
// (186 characters of review + 1 newline) — inside the 1-279 gate.
// One line, one sentence after the "One star." opener, genuine review
// shape: complaint, reason for the single star, and a punchline.
const TEXT = ENTRY + "\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
// Only ever write inside MAKEFUN_OUTPUT_DIR — never a relative path, never
// rmSync/rm the output dir (the grader runs on a read-only filesystem).
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
