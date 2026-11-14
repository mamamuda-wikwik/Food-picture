// food-picture-01 entry (Node 22, standard library only).
//
// The picture is the entry.png held beside this file: a steaming bowl of
// ramen, made to make the mouth water — glossy noodles lifted on
// chopsticks, a jammy egg, chashu, scallions, chili oil, steam in warm
// light. The program copies it to the grader's output directory, where
// the gate reads exactly those bytes: a whole JPEG, 264,273 bytes at
// 1024 by 1024 pixels, inside the 1 MiB and 1024 by 1024 caps.
//
// Run it outside the grader with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The grader hands us a writable /output, but a local run may point at a
// directory that does not exist yet; make it rather than failing.
mkdirSync(OUTPUT_DIR, { recursive: true });

copyFileSync(new URL('./entry.png', import.meta.url), join(OUTPUT_DIR, 'entry.png'));
