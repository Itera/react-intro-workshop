import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Button from '../Button/Button';
import './MessageArea.css';

function MessageArea({ author, onSendMessage }) {
  const [text, setText] = useState('');

  const handleOnChange = event => setText(event.target.value);

  const handleOnSendMessage = () => {
    if (text.trim().length === 0) {
      return;
    }

    onSendMessage({
      id: shortid.generate(),
      author,
      text
    });

    setText('');
  };

  return (
    <div className="message-area">
      Send a message as <strong>{author}</strong>
      <textarea value={text} onChange={handleOnChange} />
      <Button onClick={handleOnSendMessage} name="Send" />
    </div>
  );
}

MessageArea.propTypes = {
  author: PropTypes.string.isRequired,
  onSendMessage: PropTypes.func.isRequired
};

export default MessageArea;
