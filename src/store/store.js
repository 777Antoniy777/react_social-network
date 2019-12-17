import { createStore } from "redux";

let initialState = {
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
};

function socialNetwork(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_NEW_POSTS_DATA':
      const newState = {};
      Object.assign(newState, state);
      // state.postsData.push(action.obj);

      const t = state.postsData;
      newState.postsData = [...t, action.obj];
      // newState.push(action.obj);
      // state.postsData.push(action.obj);
      // newState.postsData = state.postsData;
      console.log(newState);

      return newState;
    default:
      return state;
  }
}

const store = createStore(socialNetwork);

console.log(store.getState())

store.subscribe(() => {
  console.log('store was changed', store.getState())
  initialState = store.getState()
  return initialState;
})








// function socialNetwork(state = initialState, action) {
//   console.log(action)
//   switch (action.type) {
//     case 'TEST_ACTION':
//       state.postsData.push(action.obj);
//       return state;
//     default:
//       return state;
//   }
// }



// const store = createStore(socialNetwork);

// console.log(store.getState())

// store.subscribe(() => {
//   console.log('store was changed', store.getState())
// })

// store.dispatch({
//   type: 'TEST_ACTION',
//   obj: {val: 'first value'},
// });














export default store;
