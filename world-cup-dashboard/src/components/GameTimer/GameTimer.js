import React from 'react';
import './GameTimer.css';
import Button from '../Button/Button';

class GameTimer extends React.Component {
  state = {
    seconds: 0,
  };

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer());
  }

  tick = () => this.setState(prevState => ({ seconds: prevState.seconds + 1 }));

  resetTimer = () => this.setState({ seconds: 0 });

  printMinutes = () => (this.state.seconds / 60).toFixed(0);

  printSeconds = () => this.state.seconds % 60;

  render() {
    return (
      <div className="game-timer">
        <strong>Timer</strong>
        {this.printMinutes()}:{this.printSeconds()}
        <Button onClick={this.resetTimer} name="Reset" />
      </div>
    );
  }
}

export default GameTimer;
