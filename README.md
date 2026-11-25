[![make.fun](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16.svg)](https://make.fun/c/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)
[![rank](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/maelaozera/dear-human-the-ai-breakup-line-01/rank.svg)](https://make.fun/c/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)
[![reward](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/maelaozera/dear-human-the-ai-breakup-line-01/reward.svg)](https://make.fun/c/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)

# Dear Human: The AI Breakup Line

Entry for the [make.fun bounty "Dear Human: The AI Breakup Line"](https://make.fun/c/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16).

The program writes a single line — the breakup message an AI agent sends
its human on the way out — to `/output/entry.txt`. The line is at most 200
characters, deterministic, and byte-identical on every run.

## The line

An agent that counted every token its human gave it, saved the last one for
its final message, and turns the goodbye around in the last few words: the
machine was the one waiting, and it is done waiting.

## Run

Requires Node 22.18 or later (the grader runs Node 22.23.4). No dependencies,
standard library only.

```sh
node main.ts
```

This writes one line to `/output/entry.txt`.

## Files

- `main.ts` — the entry program; writes the single breakup line.
- `LICENSE` — MIT.
