import React, { Component } from 'react';
import GoalCounter from '../../components/GoalCounter/GoalCounter';
import GameTimer from '../../components/GameTimer/GameTimer';
import ChatBoard from '../../components/ChatBoard/ChatBoard';
import MessageArea from '../../components/MessageArea/MessageArea';
import ReactPlayer from 'react-player';
import './DashBoard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    }
  }

  addMessage = message => this.setState({ messages: [...this.state.messages, message] });

  render() {
    return (
      <div className="dashboard-container">
        <div className="dashboard-header">
          <GoalCounter team="Spain" />
          <GameTimer />
          <GoalCounter team="Germany" />
        </div>
        <div className="media-container">
          <ReactPlayer
            width={720}
            height={480}
            className="screen"
            url="https://www.youtube.com/watch?v=zvrO5rDo0gw"
            controls
            playing
          />
          <div className="live-chat-area">
            <ChatBoard title="Live chat" messages={this.state.messages} />
            <MessageArea onSendMessage={this.addMessage} author="Kristoffer" />
            <MessageArea onSendMessage={this.addMessage} author="Charlotte" />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
