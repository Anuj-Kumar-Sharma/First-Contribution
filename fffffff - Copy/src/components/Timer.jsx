import React, { useState, useEffect } from 'react';
import './Timer.css';

function Timer({ isEnabled, interval }) {
  const [timeLeft, setTimeLeft] = useState(interval * 60);
  const [isActive, setIsActive] = useState(isEnabled);

  useEffect(() => {
    let timer;
    
    if (isActive) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            return interval * 60;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isActive, interval]);

  const toggleTimer = () => {
    const newState = !isActive;
    setIsActive(newState);
    chrome.storage.sync.set({ isEnabled: newState });
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="timer-container">
      <div className="time-display">{formatTime(timeLeft)}</div>
      <button 
        className={`toggle-button ${isActive ? 'active' : ''}`}
        onClick={toggleTimer}
      >
        {isActive ? 'Stop' : 'Start'}
      </button>
    </div>
  );
}

export default Timer; 