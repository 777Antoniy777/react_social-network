const initialState = [
  {
    id: 1,
    cat: 'Friends',
    link: '/friends',
    amount: 55,
  },
  {
    id: 2,
    cat: 'Photos',
    link: '/photos',
    amount: 174,
  },
];

export default function createState(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
