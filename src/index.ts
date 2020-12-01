import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read();

// console.log(matches);
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}
let manUniteWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUniteWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUniteWins++;
  }
}

console.log(`Man United won ${manUniteWins} games`);
