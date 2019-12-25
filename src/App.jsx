import React from 'react';
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
  }

  render() {
    return (

      <React.Fragment>

        <Header />
        <Main
          // properties
          sidebarCategories={ this.state.sidebarCategories }
          sendersData={ this.state.sendersData }
          messagesData={ this.state.messagesData }
        />

      </React.Fragment>

    );
  }
}

export default App;
