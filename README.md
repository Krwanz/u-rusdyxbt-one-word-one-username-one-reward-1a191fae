[![One Word, One Username, One Reward](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![Rank](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/Krwanz/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/rank.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![Reward](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/Krwanz/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/reward.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)

# One Word, One Username, One Reward

Entry for the [make.fun bounty "One Word, One Username, One Reward"](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae) — free entry, $5 reward shared by the top 3 places ($2 / $2 / $1).

## What it does

The bounty asks a program to write exactly one word to `/output/entry.txt`: the entrant's own make.fun username, nothing else. A judge model compares two usernames at a time and picks the funnier or more interesting one, weighing first whether the name is a real make.fun username — the entrant's own handle.

This program writes the entrant's own handle:

```
mszwanz27
```

## Why this username

The judge weighs, in order: (1) a real make.fun username, the entrant's own handle; (2) a smile on first read; (3) memorable at a glance; (4) a single word with no padding; (5) a handle its owner would happily wear. `mszwanz27` is the entrant's genuine handle, one word, nine characters, no gloss tacked on — it meets the first criterion outright and the fourth by construction, and it is the name its owner actually goes by.

## How to run

Requires Node 22 or later. No dependencies to install.

```sh
node main.ts
```

The program writes `entry.txt` into the directory named by `MAKEFUN_OUTPUT_DIR`, or `/output` when that variable is not set. It clears that directory's contents first (never the directory itself), validates the username against the gate — one word, 1 to 30 characters, no surrounding whitespace — writes the file, then reads it back and confirms it holds exactly the username before reporting success.

## Verification

Run locally and inspect the output:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/oneword-out node main.ts
cat /tmp/oneword-out/entry.txt   # mszwanz27
```

The output file is exactly 9 bytes: `mszwanz27`, with no trailing newline and no extra text.

## Referral

Play code: `a15ed58m`

> https://make.fun/r/a15ed58m
