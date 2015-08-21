import { LeagueEntryPrizeStructures } from '../constants/StaticData';

export const initialSports = [
  {
    id: 1,
    name: 'NFL',
    selected: true
  },
  {
    id: 2,
    name: 'MLB',
    selected: false
  },
  {
    id: 3,
    name: 'NBA',
    selected: false
  }
];

export const initialUser = {
  id: 0,
  userName: ''
};


const initialNflLeagueEntry = {
    size: 3,
    sportId: 1,
    price: 5,
    name: '',
    prizeStructure: LeagueEntryPrizeStructures.get('WINNER_TAKES_ALL')
};

const initialMlbLeagueEntry = {
    size: 4,
    sportId: 2,
    price: 200,
    name: 'Test MLB Entry!',
    prizeStructure: LeagueEntryPrizeStructures.get('WINNER_TAKES_ALL')
};

const initialNbaLeagueEntry = {
    size: 5,
    sportId: 3,
    price: 15,
    name: 'I am an NBA League!',
    prizeStructure: LeagueEntryPrizeStructures.get('WINNER_TAKES_ALL')
};

export const initialLeagueEntries = [ initialNflLeagueEntry, initialMlbLeagueEntry, initialNbaLeagueEntry ];

const initialNbaEntries = [
  {
    id: 8,
    sportId: 3,
    quantity: 0,
    price: 15,
    maxEntries: 50
  },
  {
    id: 7,
    sportId: 3,
    quantity: 0,
    price: 40,
    maxEntries: 50
  }
];

const initialMlbEntries = [
  {
    id: 5,
    sportId: 2,
    quantity: 0,
    price: 0,
    maxEntries: 50
  },
  {
    id: 6,
    sportId: 2,
    quantity: 0,
    price: 1,
    maxEntries: 50
  },
  {
    id: 7,
    sportId: 2,
    quantity: 0,
    price: 200,
    maxEntries: 50
  }
];

const initialNflEntries = [
  {
    id: 1,
    sportId: 1,
    quantity: 3,
    price: 0,
    maxEntries: 50
  },
  {
    id: 2,
    sportId: 1,
    quantity: 6,
    price: 1,
    maxEntries: 50
  },
  {
    id: 3,
    sportId: 1,
    quantity: 0,
    price: 5,
    maxEntries: 50
  },
  {
    id: 4,
    sportId: 1,
    quantity: 3,
    price: 10,
    maxEntries: 50
  }
];

export const initialEntries = [...initialNflEntries, ...initialMlbEntries, ...initialNbaEntries];

const initialNflDraftGroups = [
  {
    id: 1,
    sportId: 1,
    name: 'Early-NFL',
    selected: true
  },
  {
    id: 2,
    sportId: 1,
    name: 'Midday-NFL',
    selected: false
  },
  {
    id: 3,
    sportId: 1,
    name: 'Late-NFL',
    selected: false
  }
];

const initialMlbDraftGroups = [
  {
    id: 4,
    sportId: 2,
    name: 'Early-MLB',
    selected: true
  },
  {
    id: 5,
    sportId: 2,
    name: 'Late-MLB',
    selected: false
  }
];

const initialNbaDraftGroups = [
  {
    id: 6,
    sportId: 3,
    name: 'Midday-NBA',
    selected: true
  },
  {
    id: 7,
    sportId: 3,
    name: 'Late-NBA',
    selected: false
  }
];

export const initialDraftGroups = [ ...initialNflDraftGroups, ...initialMlbDraftGroups, ...initialNbaDraftGroups ];
