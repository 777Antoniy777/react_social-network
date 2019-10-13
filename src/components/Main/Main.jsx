import React from 'react';
import './Main.css';
import Preview from '../Preview/Preview';
import Sidebar from '../Sidebar/Sidebar';
import About from '../About/About';
import PostField from '../PostField/PostField';
import Posts from '../Posts/Posts';

class Main extends React.Component {

  render() {
    return (

      <main className="Main">
        <div className="site-wrapper">

          <Sidebar />

          <div className="Main__wrapper">

            <Preview />

            <div className="Main__inner-wrapper">

              <About />

              <div className="Main__comment-wrapper">

                <PostField />
                <Posts />

              </div>

            </div>

          </div>

        </div>
      </main>

    );
  }
}

export default Main;
