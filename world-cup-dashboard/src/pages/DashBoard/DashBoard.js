import React, { useState } from 'react';
import GoalCounter from '../../components/GoalCounter/GoalCounter';
import GameTimer from '../../components/GameTimer/GameTimer';
import ChatBoard from '../../components/ChatBoard/ChatBoard';
import MessageArea from '../../components/MessageArea/MessageArea';
import ReactPlayer from 'react-player';
import './DashBoard.css';
import Button from '../../components/Button/Button';

function Dashboard() {
  const [showChat, setShowChat] = useState(true);
  const [messages, setMessages] = useState([]);

  const toggleChat = () => {
    setShowChat(showChat => !showChat);
  };

  const addMessage = message => {
    setMessages(messages => messages.concat([message]));
  };

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
          url="https://www.youtube.com/watch?v=F5jG58cl2xI"
          controls
          playing
        />
        {showChat && (
          <div className="live-chat-area">
            <ChatBoard title="Live chat" messages={messages} />
            <MessageArea onSendMessage={addMessage} author="Kristoffer" />
            <MessageArea onSendMessage={addMessage} author="Charlotte" />
          </div>
        )}
        <Button name="Toggle Chat" onClick={toggleChat} />
      </div>
    </div>
  );
}

export default Dashboard;
