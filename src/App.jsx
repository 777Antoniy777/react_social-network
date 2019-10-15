import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

class App extends React.Component {

  render() {
    return (

      <BrowserRouter>

        <Header />
        <Main />

      </BrowserRouter>

    );
  }
}

export default App;
