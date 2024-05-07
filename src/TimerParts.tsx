import React, { useState, useEffect } from 'react';
import Timer from './Timer'; // Import the Timer class

interface TimerPartsProps {
  timerType: string; // Type of timer to display
  updateCount: (count: number) => void; // Callback function to update count in main file
}

const TimerParts: React.FC<TimerPartsProps> = ({ timerType, updateCount }) => {
  const [basicTimer] = useState<Timer>(new Timer());
  const [detailedTimer] = useState<Timer>(new Timer());

  useEffect(() => {
    const interval = setInterval(() => {
      if (timerType === 'basicTimer') {
        const count = basicTimer.getCount();
        updateCount(count);
      } else if (timerType === 'detailedTimer') {
        const count = detailedTimer.getCount();
        updateCount(count);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [basicTimer, detailedTimer, timerType, updateCount]);

  const toggleTimer = (timer: Timer) => {
    timer.toggle((currentCount: number) => {
      updateCount(currentCount);
    });
  };

  const resetTimer = (timer: Timer) => {
    timer.reset();
    updateCount(0);
  };

  return (
    <div>
      <button onClick={() => toggleTimer(timerType === 'basicTimer' ? basicTimer : detailedTimer)}>
        Toggle {timerType === 'basicTimer' ? 'Basic' : 'Detailed'} Timer
      </button>
      <button onClick={() => resetTimer(timerType === 'basicTimer' ? basicTimer : detailedTimer)}>
        Reset {timerType === 'basicTimer' ? 'Basic' : 'Detailed'} Timer
      </button>
    </div>
  );
};

export default TimerParts;