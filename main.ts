// Two-sentence horror — entry writer.
//
// The story is held as two separate sentence strings so the "exactly two
// sentences" rule is structural, not something we hope a paragraph happens
// to satisfy. The writer joins them, checks the result against the
// competition caps, and writes it to entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FIRST_SENTENCE =
  "Every night for a month, my daughter has whispered through the bedroom wall, 'Daddy, the man in my closet says goodnight'.";
const SECOND_SENTENCE =
  "Tonight I finally whispered back, and a small voice answered from inside my own room, 'Goodnight, Daddy' — and I have never had a daughter.";

const MAX_CHARS = 400;

function countSentences(text: string): number {
  // A sentence ends on ., ! or ? followed by a space or the end of the text.
  const endings = text.match(/[.!?](?=\s|$)/g);
  return endings === null ? 0 : endings.length;
}

function buildStory(): string {
  const story = [FIRST_SENTENCE, SECOND_SENTENCE].join(" ");
  if (story.includes("\n") || story.includes("\r")) {
    throw new Error("story must be a single line");
  }
  if (countSentences(story) !== 2) {
    throw new Error(`story must be exactly two sentences, got ${countSentences(story)}`);
  }
  if (story.length < 1 || story.length > MAX_CHARS) {
    throw new Error(`story must be 1-${MAX_CHARS} characters, got ${story.length}`);
  }
  if (story.trim().length === 0) {
    throw new Error("story must not be only whitespace");
  }
  return story;
}

function main(): void {
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const story = buildStory();
  writeFileSync(join(outDir, "entry.txt"), story + "\n", "utf8");
  console.log(`wrote entry.txt (${story.length} characters, 2 sentences)`);
}

main();
