import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

// console.log(matches);
let manUniteWins = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUniteWins++;
  } else if (match[2] === 'Man United' && match[5] === 'A') {
    manUniteWins++;
  }
}

console.log(`Man United won ${manUniteWins} games`);
