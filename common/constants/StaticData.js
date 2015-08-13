import { VisibilityFilters } from './Filters';
const { SHOW_NFL, SHOW_MLB, SHOW_NBA } = VisibilityFilters;

export const LeagueEntrySizes = [
  3,
  4,
  5,
  6,
  7,
  8
];

export const LeagueEntryPrizeStructures = new Map([
  [ 'WINNER_TAKES_ALL', 'Winner takes all' ],
  [ 'TOP_2_WIN', 'Top 2 win' ]
]);

export const SportFilterMap = {
  1: SHOW_NFL,
  2: SHOW_MLB,
  3: SHOW_NBA
};
