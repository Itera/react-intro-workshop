import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './MessageArea.css';

class MessageArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }

  handleOnSendMessage = () => {
    this.props.onSendMessage({ author: this.props.author, text: this.state.text });
    this.setState({ text: '' });
  };

  handleOnChange = (event) => this.setState({ text: event.target.value });

  render() {
    return (
      <div className="message-area">
        Send a message as <strong>{this.props.author}</strong>
        <textarea value={this.state.text} onChange={this.handleOnChange} />
        <Button onClick={this.handleOnSendMessage} name="Send" />
      </div>
    );
  }
}

MessageArea.propTypes = {
  author: PropTypes.string.isRequired,
  onSendMessage: PropTypes.func.isRequired,
};

export default MessageArea;
