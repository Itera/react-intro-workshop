import React, { useState, useRef, useEffect } from 'react';
import './GameTimer.css';
import Button from '../Button/Button';

function GameTimer() {
  const [seconds, setSeconds] = useState(0);

  useInterval(() => {
    setSeconds(seconds => seconds + 1);
  }, 1000);

  const reset = () => setSeconds(0);

  const mm = (seconds / 60).toFixed(0);
  const ss = seconds % 60;

  return (
    <div className="game-timer">
      <strong>Timer</strong>
      {mm}:{ss}
      <Button onClick={reset} name="Reset" />
    </div>
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default GameTimer;
