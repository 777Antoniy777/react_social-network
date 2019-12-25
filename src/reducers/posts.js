const initialState = [
  {
    id: 1,
    name: 'Anton Kuzmitsky',
    avatar: 'avatars/avatar-1.png',
    time: '8 Mar at 20:19 pm',
    body: 'I\'m fine',
  },
  {
    id: 2,
    name: 'Anton Kuzmitsky',
    avatar: 'avatars/avatar-1.png',
    time: '9 Mar at 10:26 am',
    body: 'I\'m ok',
  },
];

export default function createState(state = initialState, action) {
  switch (action.type) {
    case 'ADD_NEW_POST':

      return [
        ...state,
        action.obj,
      ];
    default:
      return state;
  }
}
