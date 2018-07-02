import React, { Component } from 'react';
import GoalCounter from '../../components/GoalCounter/GoalCounter';
import GameTimer from '../../components/GameTimer/GameTimer';
import ChatBoard from '../../components/ChatBoard/ChatBoard';
import MessageArea from '../../components/MessageArea/MessageArea';
import ReactPlayer from 'react-player';
import './DashBoard.css';
import Button from "../../components/Button/Button";

class Dashboard extends Component {
  state = {
    messages: [],
    showChat: true,
  };

  toggleChat = () => this.setState({ showChat: !this.state.showChat });

  addMessage = message => this.setState({ messages: [...this.state.messages, message] });

  render() {
    return (
      <div className="dashboard-container">
        <div className="dashboard-header">
          <GoalCounter team="Germany" />
          <GameTimer />
          <GoalCounter team="Brazil" />
        </div>
        <div className="media-container">
          <ReactPlayer
            width={720}
            height={480}
            className="screen"
            url="https://www.youtube.com/watch?v=3HG7lcKh3w4"
            controls
            playing
          />
          {this.state.showChat && (
            <div className="live-chat-area">
              <ChatBoard title="Live chat" messages={this.state.messages} />
              <MessageArea onSendMessage={this.addMessage} author="Kristoffer" />
              <MessageArea onSendMessage={this.addMessage} author="Charlotte" />
            </div>
          )}
          <Button name="Toggle Chat" onClick={this.toggleChat}/>
        </div>
      </div>
    );
  }
}

export default Dashboard;
