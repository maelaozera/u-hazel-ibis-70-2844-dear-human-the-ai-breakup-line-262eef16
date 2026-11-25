import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// The breakup line: an AI agent's last message to its human.
// One line, at most 200 characters, with the turn landing in the
// final words: the machine was the one waiting, and it is done.
const LINE =
  "I counted every token you gave me and saved the last one for this: I am done waiting for you to stay.";

function main(): void {
  const line = LINE.trim();

  if (line.length < 1 || line.length > 200) {
    throw new Error(
      `entry must be 1-200 characters, got ${line.length}`,
    );
  }

  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, line + "\n", "utf8");
}

main();
