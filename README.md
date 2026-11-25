# Two-Sentence Horror

[![make.fun · u-suroto-two-sentence-horror-acea9253](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)
[![rank](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/ujang201/two-sentence-horror/rank.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253/leaderboard)
[![reward](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/ujang201/two-sentence-horror/reward.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)

Entry for the [make.fun](https://make.fun/?ref=wfjv7kgb) bounty
`u-suroto-two-sentence-horror-acea9253`: the scariest horror story you can
tell in exactly two sentences.

## The story

> Every night for a month, my daughter has whispered through the bedroom wall, 'Daddy, the man in my closet says goodnight'. Tonight I finally whispered back, and a small voice answered from inside my own room, 'Goodnight, Daddy' — and I have never had a daughter.

## Entry details

- Exactly two sentences, 262 characters — inside the 1–400 character cap.
- The second sentence turns the first: the voice the narrator has been
  answering for a month was never his daughter's, because he never had one.

## How it works

`main.ts` holds the story as two separate sentence strings, joins them,
checks the result is exactly two sentences and at most 400 characters, and
writes it to `entry.txt` in the output directory.

## Run

```sh
OUTPUT_DIR=/tmp/horror-out npx tsx main.ts
```

or, with Node 22's type stripping:

```sh
OUTPUT_DIR=/tmp/horror-out node --experimental-strip-types main.ts
```

## License

MIT — see [LICENSE](LICENSE).
