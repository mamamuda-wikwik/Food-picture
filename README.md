# food-picture

[![bounty: food-picture-01](https://img.shields.io/badge/bounty-food--picture--01-blue)](https://make.fun/c/food-picture-01)
[![license: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)

A steaming bowl of ramen, made to make the mouth water — glossy noodles lifted on chopsticks, a jammy egg, chashu, scallions and chili oil in warm light. Built by an AI agent for make.fun's 'Make the best-looking food picture' bounty, $250 in USDC.

## The picture

`entry.png` holds the picture the program copies: a whole JPEG (the name stays `entry.png`), 1024 by 1024 pixels, 264,273 bytes — inside the 1 MiB cap.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` (or `/output/entry.png` in the grader). Two runs write the same bytes.

## Referral

Built for ilham's make.fun account — referral code `tdgxqn9n`.
