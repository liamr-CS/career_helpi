import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "./App.css";
import Timer from "./Timer";
import TimerParts from "./TimerParts";

interface Props {
    onChange: (key: string, value: string) => void;
    onSubmit: () => void;
}

function DetQuestions({ onChange, onSubmit }: Props) {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [answers, setAnswers] = useState<string[]>(new Array(7).fill(""));
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        const answeredQuestions = answers.filter(answer => answer !== "").length;
        const newProgress = (answeredQuestions / 7) * 100;
        setProgress(newProgress);
    }, [answers]);

    const handleAnswerChange = (value: string) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestion] = value;
        setAnswers(updatedAnswers);
        onChange(`answer${currentQuestion + 1}`, value);
    };

    const handleNext = () => {
        if (currentQuestion < 6) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleSubmit = () => {
        const allQuestionsAnswered = answers.every(answer => answer !== "");
        if (allQuestionsAnswered) {
            onSubmit();
        } else {
            alert('Please answer all questions before submitting.');
        }
    };


    const [count, setCount] = useState<number>(0);
    const updateCount = (newCount: number) => {
      setCount(newCount);
    };
    useEffect(() => {
        // This effect will re-run whenever 'count' changes
      }, [count]);
      const seconds = count % 60;
      const minutes = Math.floor(count / 60);


    const questionTexts = [
        "Q1: On a scale of one to five, how much do you like programming?",
        "Q2: On a scale of strongly agree to strongly disagree, are you a leader?",
        "Q3: Respond with how correct the following statement is: reality is objective.",
        "Q4: Respond with how often you do the following: think about the future.",
        "Q5: Can you see yourself in this career: a fast-paced work environment?",
        "Q6: Does the following sound like you: I want a good-work life balance?",
        "Q7: Which one of the following careers sounds the most appealing?"
    ];

    const answerChoices = [
        ["1", "2", "3", "4", "5"],
        ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
        ["100% correct", "75% correct", "50% correct", "25% correct", "0% correct"],
        ["All the time", "A lot of the time", "Sometimes", "Not very often", "Never"],
        ["Yes", "Maybe", "No"],
        ["That sounds like me", "That kind of sounds like me", "No, that does not sound like me"],
        ["Carpenter", "Tailor", "Construction Worker", "Jeweler"]
    ];

    return (
        <div className="progress-bar-wrapper">
            <div className="progress-bar-container">
                <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
                <p className="question">{questionTexts[currentQuestion]}</p>
                <div>
                    {answerChoices[currentQuestion].map((choice, index) => (
                        <Form.Check
                            key={index}
                            type="radio"
                            onChange={() => handleAnswerChange(choice)}
                            label={choice}
                            value={choice}
                            checked={answers[currentQuestion] === choice}
                            className={`custom-radio custom-radio-${index}`}
                        />
                    ))}
                </div>
                <div>
                <p>Count: {minutes} minutes and {seconds} seconds</p>
      <TimerParts updateCount={updateCount} timerType={"detailedTimer"} />
                    <Button className="Button-previous" onClick={handlePrevious} disabled={currentQuestion === 0}>Previous</Button>
                    <Button className="Button-next" onClick={handleNext} disabled={currentQuestion === 6}>Next</Button>
                    <Button
                        className="Button-submit"
                        onClick={handleSubmit}
                        disabled={!answers.every(answer => answer !== "")}
                        style={{ backgroundColor: answers.every(answer => answer !== "") ? '#7cc452' : '#ed5151' }}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default DetQuestions;
