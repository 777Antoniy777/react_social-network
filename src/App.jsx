import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

class App extends React.Component {
  state = {
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
    postsData: [
      {
        id: 1,
        name: 'Anton Kuzmitsky',
        avatar: 'avatars/avatar-1.png',
        time: '2 Mar at 10:26 am',
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
        userData: null,
      },
    ],
  }

  // TEST
  componentDidUpdate(prevProps, prevState) {

    if (this.state.postsData.length !== prevState.postsData.length) {
      this.onSetNewPost();
    }

  }

  onSetNewPost = () => {
    const newPost = {
      id: 3,
      name: 'Anton Kuzmitsky',
      avatar: 'avatars/avatar-1.png',
      time: '9 Mar at 10:26 am',
      text: 'I\'m ok',
    };

    this.state.postsData.push(newPost)
  }
  //

  render() {
    return (

      <BrowserRouter>

        <Header />
        <Main
          // properties
          sidebarCategories={ this.state.sidebarCategories }
          postsData={ this.state.postsData }
          sendersData={ this.state.sendersData }
          messagesData={ this.state.messagesData }

          // handlers
          onSetNewPost={ this.onSetNewPost }
        />

      </BrowserRouter>

    );
  }
}

export default App;
