import React from 'react';
import './MessagesField.css';

class MessagesField extends React.Component {
  state = {
    newMessageText: '',
  }

  onSetNewMessageText = (evt) => {
    evt.preventDefault();
    const target = evt.target;

    this.setState({
      newMessageText: target.value,
    });
  }

  addNewMessage = (evt) => {
    evt.preventDefault();
    const { onShowNewMessagesData, setBlockMessageId } = this.props;

    onShowNewMessagesData(setBlockMessageId, this.state.newMessageText);

    this.setState({
      newMessageText: '',
    });
  }


  render() {
    return (

      <div className="Messages__form-wrapper">

        <h3 className="visually-hidden">Write the message</h3>

        <form action="#s" method="POST">

          <textarea onChange={ this.onSetNewMessageText } value={ this.state.newMessageText } name="message" placeholder="Write a message..."></textarea>

          <button className="Messages__button Messages__button--submit" onClick={ this.addNewMessage } type="submit" aria-label="Send message">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="#828A99" d="M4.7 15.8c-.7 1.9-1.1 3.2-1.3 3.9-.6 2.4-1 2.9 1.1 1.8 2.1-1.1 12-6.7 14.3-7.9 2.9-1.6 2.9-1.5-.2-3.2-2.3-1.4-12.2-6.8-14-7.9s-1.7-.6-1.2 1.8c.2.8.6 2.1 1.3 3.9.5 1.3 1.6 2.3 3 2.5l5.8 1.1c.1 0 .1.1.1.1s0 .1-.1.1l-5.8 1.1c-1.3.4-2.5 1.3-3 2.7z"/>
            </svg>
          </button>

        </form>

      </div>

    );
  }
}

export default MessagesField;
