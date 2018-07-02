import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import './ChatBoard.css';

const ChatBoard = (props) => (
  <div className="chat-board">
    <strong>{props.title}</strong>
    <ul>
      {props.messages.map(message => (
        <li key={shortid.generate()}>
          <strong>{message.author}: </strong>{message.text}
        </li>
      ))}
    </ul>
  </div>
);

ChatBoard.propTypes = {
  title: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
};

export default ChatBoard;
