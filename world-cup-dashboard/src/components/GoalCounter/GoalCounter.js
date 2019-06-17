import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './GoalCounter.css';

function GoalCounter({ team }) {
  const [counter, setCounter] = useState(0);

  const increaseScore = () => setCounter(counter => counter + 1);

  const decreaseScore = () => setCounter(counter => Math.max(0, counter - 1));

  return (
    <div className="goal-counter">
      <Button onClick={decreaseScore} name="-" />
      {team}: {counter}
      <Button onClick={increaseScore} name="+" />
    </div>
  );
}

GoalCounter.propTypes = {
  team: PropTypes.string.isRequired
};

export default GoalCounter;
