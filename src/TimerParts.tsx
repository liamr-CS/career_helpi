import React, { useState, useEffect } from 'react';
import Timer from './Timer'; // Import the Timer class

interface TimerPartsProps {
  updateCount: (count: number) => void; // Callback function to update count in main file
}

const TimerParts: React.FC<TimerPartsProps> = ({ updateCount }) => {
  const [basicTimer] = useState<Timer>(new Timer());
  const [detailedTimer] = useState<Timer>(new Timer());
  //used GPT for declarations

  useEffect(() => {
    const basicInterval = setInterval(() => {
      const count = basicTimer.getCount();
      updateCount(count);
    }, 1000);

    const detailedInterval = setInterval(() => {
      const count = detailedTimer.getCount();
      updateCount(count);
    }, 1000);

    return () => {
      clearInterval(basicInterval);
      clearInterval(detailedInterval);
    };
  }, [basicTimer, detailedTimer, updateCount]);

  const toggleBasicTimer = () => {
    basicTimer.toggle((currentCount: number) => {
      updateCount(currentCount);
    });
  };

  const toggleDetailedTimer = () => {
    detailedTimer.toggle((currentCount: number) => {
      // Used GPT here
      updateCount(currentCount);
    });
  };

  const resetTimer = (timer: Timer) => {
    timer.reset();
    updateCount(0); //used GPT here
  };

  return (
    <div>
      {/* Your timer component UI */}
      <button onClick={toggleBasicTimer}>Toggle Basic Timer</button>
      <button onClick={toggleDetailedTimer}>Toggle Detailed Timer</button>
      <button onClick={() => resetTimer(basicTimer)}>Reset Basic Timer</button>
      <button onClick={() => resetTimer(detailedTimer)}>Reset Detailed Timer</button>
    </div>
  );
};

export default TimerParts;