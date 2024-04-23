import React, { useState } from 'react';
import Timer from './Timer'; // Import the Timer class

const TimerParts: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [timer, setTimer] = useState<Timer>(new Timer());

    const toggleTimer = () => {
        timer.toggle((currentCount: number) => {
            setCount(currentCount);
        });
    };

    const resetTimer = () => {
        timer.reset();
        setCount(0);
    };

    return (
        <div>
            <div>{count}</div>
            <button onClick={toggleTimer}>Toggle Timer</button>
            <button onClick={resetTimer}>Reset Timer</button>
        </div>
    );
};

export default TimerParts