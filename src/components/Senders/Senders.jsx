import React from 'react';
import './Senders.css';
import SendersItem from './SendersItem';

const Senders = (props) => {
  const { sendersData } = props;

  return (

    <section className="Senders">
      <h2 className="visually-hidden">Senders</h2>

      <ul className="Senders__list">

        { sendersData &&
          sendersData.map((elem) =>

            <SendersItem
              // properties
              key={ elem.id }
              id={ elem.id }
              src={ elem.avatar }
              user={ elem.name}

              // handlers
              onGetUserId={ props.onGetUserId }
            />

          )
        }

      </ul>

    </section>

  );
}

export default Senders;
