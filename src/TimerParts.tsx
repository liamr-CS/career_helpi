import React, { useState } from 'react';
import Timer from './Timer'; // Import the Timer class

const TimerParts: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [testTimer, setTestTimer] = useState<Timer>(new Timer());

    const toggleTimer = () => {
        testTimer.toggle((currentCount: number) => {
            setCount(currentCount);
        });
    };

    const resetTimer = () => {
        testTimer.reset();
        setCount(0);
    };

    return (
        <div>
            <div>{count}</div>
            <button onClick={toggleTimer}>Start/Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    );
};
//requested help from GPT on lines: 6, 19-25
export default TimerParts;