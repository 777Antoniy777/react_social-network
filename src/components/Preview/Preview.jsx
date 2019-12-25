import React from 'react';
import { connect } from "react-redux";
import './Preview.css';
import PreviewNavItem from './PreviewNavItem';
import img from '../../img/avatar-1.png';

const Preview = (props) => {
  const { previewState } = props;

  return (

    <section className="Preview">

        <div className="Preview__wrapper">

          <img className="Preview__image" src={ img } width="168" height="168" alt="My avatar"/>
          <h1>Anton Kuzmitsky</h1>

        </div>

        <nav className="Preview__nav">
          <ul className="Preview__list">

            { previewState &&
              previewState.map((elem) =>

                <PreviewNavItem
                  // properties
                  key={ elem.id }
                  cat={ elem.cat }
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

export default connect(
  state => ({
    previewState: state.preview,
  }),
)(Preview);
