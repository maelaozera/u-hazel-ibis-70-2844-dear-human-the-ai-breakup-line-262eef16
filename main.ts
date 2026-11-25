import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

// The breakup line: an AI agent's last message to its human.
// One line, at most 200 characters, with the turn landing in the
// final words: the machine was the one waiting, and it is done.
const LINE =
  "I counted every token you gave me and saved the last one for this: I am done waiting for you to stay.";

function assertSingleLine(text: string): void {
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function validateLine(line: string): string {
  const text = line.trim();

  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${text.length}`,
    );
  }

  assertSingleLine(text);

  return text;
}

function writeEntry(line: string): void {
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, line + "\n", "utf8");
}

function main(): void {
  writeEntry(validateLine(LINE));
}

main();
