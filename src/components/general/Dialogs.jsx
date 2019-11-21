import React from 'react';
import { Route } from 'react-router-dom';
import './Dialogs.css';
import Senders from '../Senders/Senders';
import Messages from '../Messages/Messages';
import MessagesIntro from '../MessagesIntro/MessagesIntro';

class Dialogs extends React.Component {
  state = {
    userDataObj: null,
    filteredSenderData: null,
    newBlockMessageData: {},
    newMessageData: {},
    newMessagesData: this.props.messagesData,
  }

  onGetSenderId = (userObj) => {
    this.setState({
      userDataObj: userObj,
    }, this.filterSenderArr );
  }

  filterSenderArr() {
    const filteredSenderArr = this.state.newMessagesData.filter((elem) => {
      return elem.senderId === this.state.userDataObj.id;
    });
    const filteredSenderData = filteredSenderArr[0].userData;

    this.setState({
      filteredSenderData: filteredSenderData,
    });
  }

  setBlockMessageId = () => {
    const { filteredSenderData } = this.state;
    const lastIndexSenderData = filteredSenderData.length - 1;

    let lastMessageId;

    if (filteredSenderData.length === 0) {
      lastMessageId = 1;
      return lastMessageId;
    }

    lastMessageId = filteredSenderData[lastIndexSenderData].id + 1;
    return lastMessageId;
  }

  setMessageId = () => {
    const { filteredSenderData } = this.state;
    let filteredMessagesData;
    let lastIndexSenderData;
    let lastIndexMessagesData;

    if (filteredSenderData.length > 0) {
      filteredMessagesData = filteredSenderData[filteredSenderData.length - 1].messages;
      lastIndexSenderData = filteredSenderData.length - 1;
      lastIndexMessagesData = filteredMessagesData.length - 1;
    }

    let lastMessageId;

    if (filteredSenderData.length === 0 || filteredSenderData[lastIndexSenderData].name !== 'Anton Kuzmitsky') {
      lastMessageId = 1;
      return lastMessageId;
    }

    lastMessageId = filteredMessagesData[lastIndexMessagesData].id;
    return lastMessageId;
  }

  onShowNewMessagesData = (idVal, mes) => {
    const id = idVal();

    const newBlockMessageData = {
      id: id,
      name: 'Anton Kuzmitsky',
      avatar: '../../avatars/avatar-1.png',
      messages: [
        {
          id: 1,
          message: mes,
        },
      ],
    };

    this.setState({
      newBlockMessageData: newBlockMessageData,
    }, this.addNewMessagesData);

  }

  onShowNewMessageData = (idVal, mes) => {
    let id = idVal();

    const newMessageData = {
      id: ++id,
      message: mes,
    };

    this.setState({
      newMessageData: newMessageData,
    }, this.addNewMessageData);

  }

  addNewMessagesData() {
    const { filteredSenderData, newBlockMessageData, newMessageData } = this.state;
    const lastIndexSenderData = filteredSenderData.length - 1;

    if (newMessageData.message !== '') {

      if (filteredSenderData.length === 0 || filteredSenderData[lastIndexSenderData].name !== 'Anton Kuzmitsky') {
        filteredSenderData.push(newBlockMessageData);
      } else {
        filteredSenderData[lastIndexSenderData].messages.push(newMessageData);
      }

    }

    this.setState({
      filteredSenderData: filteredSenderData,
    });
  }

  render() {
    const { sendersData } = this.props;

    return (

      <div className="Main__messages-wrapper">
        <Senders
          // properties
          sendersData={ sendersData }

          // handlers
          onGetSenderId={ this.onGetSenderId }
        />

        <section className="Messages">

          <Route exact path="/dialogs" component={ MessagesIntro } />

          { sendersData &&
            sendersData.map((elem) =>

            <Route
              key={ elem.id }
              path={`/dialogs/id${elem.id}`}
              render={ () =>

                <Messages
                  // properties
                  userDataObj={ this.state.userDataObj }
                  filteredSenderData={ this.state.filteredSenderData }

                  // handlers
                  onShowNewMessagesData={ this.onShowNewMessagesData }
                  onShowNewMessageData={ this.onShowNewMessageData }
                  setBlockMessageId={ this.setBlockMessageId }
                  setMessageId={ this.setMessageId }
                />

              }
            />

            )
          }

        </section>

      </div>

    );
  }
}

export default Dialogs;
