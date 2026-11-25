import { writeFileSync, mkdirSync } from 'node:fs';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const text =
  '★☆☆☆☆ Gravity. Thirteen billion years on the job and it still drops my phone the instant I relax. Holds down everything except what I actually need.';

mkdirSync(out, { recursive: true });
writeFileSync(out + '/entry.txt', text);
