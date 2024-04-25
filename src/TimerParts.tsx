import React, { useState, useEffect } from 'react';
import Timer from './Timer'; // Import the Timer class

interface TimerPartsProps {
  updateCount: (count: number) => void; // Callback function to update count in main file
}

const TimerParts: React.FC<TimerPartsProps> = ({ updateCount }) => {
  const [basicTimer, setBasicTimer] = useState<Timer>(new Timer());
  const [detailedTimer, setDetailedTimer] = useState<Timer>(new Timer());

  useEffect(() => {
    const basicInterval = setInterval(() => {
      const count = basicTimer.getCount();
      updateCount(count); // Update count in main file
    }, 1000);

    const detailedInterval = setInterval(() => {
      const count = detailedTimer.getCount();
      // Update count in main file
      updateCount(count);
    }, 1000);

    return () => {
      clearInterval(basicInterval);
      clearInterval(detailedInterval);
    };
  }, [basicTimer, detailedTimer, updateCount]);

  const toggleBasicTimer = () => {
    basicTimer.toggle((currentCount: number) => {
      // Callback function to update count in main file
      updateCount(currentCount);
    });
  };

  const toggleDetailedTimer = () => {
    detailedTimer.toggle((currentCount: number) => {
      // Callback function to update count in main file
      updateCount(currentCount);
    });
  };

  const resetTimer = (timer: Timer) => {
    timer.reset();
    updateCount(0); // Reset count in main file
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