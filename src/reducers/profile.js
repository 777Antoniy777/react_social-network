const initialState = [
  {
    id: 1,
    cat: 'Birthday:',
    body: 'January 7, 1996',
  },
  {
    id: 2,
    cat: 'Current city:',
    body: 'Omsk',
  },
  {
    id: 3,
    cat: 'Institution:',
    body: 'ОмГТУ',
  },
  {
    id: 4,
    cat: 'Languages:',
    body: 'Русский, English',
  },
  {
    id: 5,
    cat: 'Sister:',
    body: 'Dasha Maslova',
  },
];

export default function createState(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
