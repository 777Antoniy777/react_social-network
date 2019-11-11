import React from 'react';
import './Preview.css';
import img from '../../img/avatar-1.png';
import PreviewNavItem from './PreviewNavItem';

const Preview = (props) => {
  const { previewCategories } = props;

  return (

    <section className="Preview">

        <div className="Preview__wrapper">

          <img className="Preview__image" src={ img } width="168" height="168" alt="My avatar"/>
          <h1>Anton Kuzmitsky</h1>

        </div>

        <nav className="Preview__nav">
          <ul className="Preview__list">

            { previewCategories &&
              previewCategories.map((elem) =>

                <PreviewNavItem
                  // properties
                  key={ elem.id }
                  cat={ elem.name }
                  link={ elem.link }
                  amount={ elem.amount }
                />

              )
            }

          </ul>
        </nav>

    </section>

  );
}

export default Preview;
