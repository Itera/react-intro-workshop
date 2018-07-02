import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './GoalCounter.css';

class GoalCounter extends Component {
  state = {
    counter: 0,
  };

  increaseScore = () => this.setState({ counter: this.state.counter + 1 });

  decreaseScore = () => this.setState({ counter: this.state.counter - 1 });

  render() {
    return (
      <div className="goal-counter">
        <Button onClick={this.decreaseScore} name="-" />
        {this.props.team}: {this.state.counter}
        <Button onClick={this.increaseScore} name="+" />
      </div>
    )
  }
}

GoalCounter.propTypes = {
  team: PropTypes.string.isRequired,
};

export default GoalCounter;
