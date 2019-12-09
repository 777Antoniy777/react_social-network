import { createStore, combineReducers } from "redux";

// const reducers = combineReducers();

const initialState = {
  sidebarCategories: [
    {
      id: 1,
      name: 'My profile',
      link: '/',
      exact: true,
    },
    {
      id: 2,
      name: 'Friends',
      link: '/friends',
      exact: false,
    },
    {
      id: 3,
      name: 'Messages',
      link: '/dialogs',
      exact: false
    },
    {
      id: 4,
      name: 'Photos',
      link: '/photos',
      exact: false,
    },
  ],
  previewCategories: [
    {
      id: 1,
      name: 'Friends',
      link: '/friends',
      amount: 55,
    },
    {
      id: 2,
      name: 'Photos',
      link: '/photos',
      amount: 174,
    },
  ],
  profileData: [
    {
      id: 1,
      cat: 'Birthday:',
      text: 'January 7, 1996',
    },
    {
      id: 2,
      cat: 'Current city:',
      text: 'Omsk',
    },
    {
      id: 3,
      cat: 'Institution:',
      text: 'ОмГТУ',
    },
    {
      id: 4,
      cat: 'Languages:',
      text: 'Русский, English',
    },
    {
      id: 5,
      cat: 'Sister:',
      text: 'Dasha Maslova',
    },
  ],
  postsData: [
    {
      id: 1,
      name: 'Anton Kuzmitsky',
      avatar: 'avatars/avatar-1.png',
      time: '8 Mar at 20:19 pm',
      text: 'I\'m fine',
    },
    {
      id: 2,
      name: 'Anton Kuzmitsky',
      avatar: 'avatars/avatar-1.png',
      time: '9 Mar at 10:26 am',
      text: 'I\'m ok',
    },
  ],
  sendersData: [
    {
      id: 1,
      name: 'Mikhail Kovalyov',
      avatar: '../../avatars/avatar-2.jpg',
    },
    {
      id: 2,
      name: 'Lenochka Morozova',
      avatar: '../../avatars/avatar-3.jpg',
    },
    {
      id: 3,
      name: 'Dmitry Marusov',
      avatar: '../../avatars/avatar-4.png',
    },
  ],
  messagesData: [
    {
      senderId: 1,
      userData: [
        {
          id: 1,
          name: 'Mikhail Kovalyov',
          avatar: '../../avatars/avatar-2.jpg',
          messages: [
            {
              id: 1,
              message: 'Hi!',
            },
            {
              id: 2,
              message: 'How are you',
            },
          ],
        },
        {
          id: 2,
          name: 'Anton Kuzmitsky',
          avatar: '../../avatars/avatar-1.png',
          messages: [
            {
              id: 1,
              message: 'Hi!',
            },
            {
              id: 2,
              message: 'fine. you?',
            },
          ],
        },
        {
          id: 3,
          name: 'Mikhail Kovalyov',
          avatar: '../../avatars/avatar-2.jpg',
          messages: [
            {
              id: 1,
              message: 'me too',
            },
            {
              id: 2,
              message: 'go to walk',
            },
            {
              id: 3,
              message: 'and to the shop',
            },
          ],
        },
      ],
    },
    {
      senderId: 2,
      userData: [
        {
          id: 1,
          name: 'Lenochka Morozova',
          avatar: '../../avatars/avatar-3.jpg',
          messages: [
            {
              id: 1,
              message: 'Allo',
            },
            {
              id: 2,
              message: 'Don t ignore me!',
            },
          ],
        },
      ],
    },
    {
      senderId: 3,
      userData: [],
    },
  ],
};

const dispatches = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_POSTS_DATA':
      state.val = action.val;
      return state;
    default:
      return state;
  }
};

const store = createStore(dispatches);

store.subscribe(() => console.log(initialState.store.getState()))



// let initialState = {
//   val: 0,
// }

// const testState = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       state.val = action.val;
//       return state;
//     case 'DECREMENT':
//       state.val = state.val - 1;
//       return state;
//     default:
//       return state;
//   }
// }

// const store = createStore(testState);

// store.subscribe(() => console.log(store.getState().val))

// store.dispatch({
//   type: 'INCREMENT',
//   val: initialState.val + 1,
// })
// // 1
// store.dispatch({
//   type: 'INCREMENT',
//   val: initialState.val + 1,
// })
// // 2
// store.dispatch({
//   type: 'DECREMENT',
//   val: initialState.val - 1,
// })
// // 1

export default store;
