import React from 'react';
import './GameTimer.css';
import Button from '../Button/Button';

class GameTimer extends React.Component {
  constructor() {
    super();
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  tick = () => this.setState(prevState => ({ seconds: prevState.seconds + 1 }));

  resetTimer = () => this.setState({ seconds: 0 });

  render() {
    return (
      <div className="game-timer">
        <strong>Timer</strong>
        {(this.state.seconds / 60).toFixed(0)}:{this.state.seconds % 60}
        <Button onClick={this.resetTimer} name="Reset" />
      </div>
    );
  }
}

export default GameTimer;
