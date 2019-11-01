import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

class App extends React.Component {
  state = {
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
  }

  render() {
    return (

      <BrowserRouter>

        <Header />
        <Main postsData={ this.state.postsData } />

      </BrowserRouter>

    );
  }
}

export default App;
