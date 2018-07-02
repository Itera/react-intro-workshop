import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import './ChatBoard.css';

const ChatBoard = ({title, messages}) => (
  <div className="chat-board">
    <strong>{title}</strong>
    <hr />
    <ul>
      {messages.map(message => (
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
