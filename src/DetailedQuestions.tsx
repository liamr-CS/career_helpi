import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import "./App.css";

interface Props {
    onChange: (key: string, value: string) => void;
}

function DetQuestions({ onChange }: Props) {
    const [danswer1, setDAnswer1] = useState<string>("");
    const [danswer2, setDAnswer2] = useState<string>("");
    const [danswer3, setDAnswer3] = useState<string>("");
    const [danswer4, setDAnswer4] = useState<string>("");
    const [danswer5, setDAnswer5] = useState<string>("");
    const [danswer6, setDAnswer6] = useState<string>("");
    const [danswer7, setDAnswer7] = useState<string>("");
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        const answeredQuestions = [danswer1, danswer2, danswer3, danswer4, danswer5, danswer6, danswer7].filter(
            (answer) => answer !== ""
        ).length;
        const totalQuestions = 7;
        const newProgress = (answeredQuestions / totalQuestions) * 100;
        setProgress(newProgress);
    }, [danswer1, danswer2, danswer3, danswer4, danswer5, danswer6, danswer7]);

    const updateAnswer = (setter: React.Dispatch<string>, answer: string, value: string) => {
        setter(value);
        onChange(answer, value);
    };

    return (
        <div>
            <div className="progress-bar-wrapper">
                <div className="progress-bar-container">
                    <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
            <p>
                On a scale of one to five, how much do you like programming?
            </p>
            <div>
                <Form.Check
                        type="radio"
                        onChange={(e) => updateAnswer(setDAnswer1, "answer1", e.target.value)}
                        label="1"
                        value="1"
                        checked={danswer1 === "1"}
                    />
                <Form.Check
                        type="radio"
                        onChange={(e) => updateAnswer(setDAnswer1, "answer1", e.target.value)}
                        label="2"
                        value="2"
                        checked={danswer1 === "2"}
                    />
                <Form.Check
                        type="radio"
                        onChange={(e) => updateAnswer(setDAnswer1, "answer1", e.target.value)}
                        label="3"
                        value="3"
                        checked={danswer1 === "3"}
                    />
                <Form.Check
                        type="radio"
                        onChange={(e) => updateAnswer(setDAnswer1, "answer1", e.target.value)}
                        label="4"
                        value="4"
                        checked={danswer1 === "4"}
                    />
                <Form.Check
                        type="radio"
                        onChange={(e) => updateAnswer(setDAnswer1, "answer1", e.target.value)}
                        label="5"
                        value="5"
                        checked={danswer1 === "5"}
                    />
            </div>
            <p>
                On a scale of strongly agree to strongly disagree, are you a leader?
            </p>
            <div>
                <Form.Check
                        type="radio"
                        onChange={(e) => updateAnswer(setDAnswer2, "answer2", e.target.value)}
                        label="Strongly Agree"
                        value="Strongly Agree"
                        checked={danswer2 === "Strongly Agree"}
                    />
                <Form.Check
                        type="radio"
                        onChange={(e) => updateAnswer(setDAnswer2, "answer2", e.target.value)}
                        label="Agree"
                        value="Agree"
                        checked={danswer2 === "Agree"}
                    />
                <Form.Check
                        type="radio"
                        onChange={(e) => updateAnswer(setDAnswer2, "answer2", e.target.value)}
                        label="Neutral"
                        value="Neutral"
                        checked={danswer2 === "Neutral"}
                    />
                <Form.Check
                        type="radio"
                        onChange={(e) => updateAnswer(setDAnswer2, "answer2", e.target.value)}
                        label="Disagree"
                        value="Disagree"
                        checked={danswer2 === "Disagree"}
                    />
                <Form.Check
                        type="radio"
                        onChange={(e) => updateAnswer(setDAnswer2, "answer2", e.target.value)}
                        label="Strongly Disagree"
                        value="Strongly Disagree"
                        checked={danswer2 === "Strongly Disagree"}
                    />
            </div>
            <p>
                Respond with how correct the following statement is: reality is objective.
            </p>
            <div>
                <Form.Check
                        type="radio"
                        onChange={(e) => updateAnswer(setDAnswer3, "answer3", e.target.value)}
                        label="100% correct"
                        value="100% correct"
                        checked={danswer3 === "100% correct"}
                    />
                <Form.Check
                        type="radio"
                        onChange={(e) => updateAnswer(setDAnswer3, "answer3", e.target.value)}
                        label="75% correct"
                        value="75% correct"
                        checked={danswer3 === "75% correct"}
                    />
                <Form.Check
                        type="radio"
                        onChange={(e) => updateAnswer(setDAnswer3, "answer3", e.target.value)}
                        label="50% correct"
                        value="50% correct"
                        checked={danswer3 === "50% correct"}
                    />
                <Form.Check
                        type="radio"
                        onChange={(e) => updateAnswer(setDAnswer3, "answer3", e.target.value)}
                        label="25% correct"
                        value="25% correct"
                        checked={danswer3 === "25% correct"}
                    />
                <Form.Check
                        type="radio"
                        onChange={(e) => updateAnswer(setDAnswer3, "answer3", e.target.value)}
                        label="0% correct"
                        value="0% correct"
                        checked={danswer3 === "0% correct"}
                    />
            </div>
            <p>
                Respond with how often you do the following: think about the future.
            </p>
            <div>
                <Form.Check
                        type="radio"
                        onChange={(e) => updateAnswer(setDAnswer4, "answer4", e.target.value)}
                        label="All the time"
                        value="All the time"
                        checked={danswer4 === "All the time"}
                    />
                <Form.Check
                        type="radio"
                        onChange={(e) => updateAnswer(setDAnswer4, "answer4", e.target.value)}
                        label="A lot of the time"
                        value="A lot of the time"
                        checked={danswer4 === "A lot of the time"}
                    />
                <Form.Check
                        type="radio"
                        onChange={(e) => updateAnswer(setDAnswer4, "answer4", e.target.value)}
                        label="Sometimes"
                        value="Sometimes"
                        checked={danswer4 === "Sometimes"}
                    />
                <Form.Check
                        type="radio"
                        onChange={(e) => updateAnswer(setDAnswer4, "answer4", e.target.value)}
                        label="Not very often"
                        value="Not very often"
                        checked={danswer4 === "Not very often"}
                    />
                <Form.Check
                        type="radio"
                        onChange={(e) => updateAnswer(setDAnswer4, "answer4", e.target.value)}
                        label="Never"
                        value="Never"
                        checked={danswer4 === "Never"}
                    />
            </div>
            <p>
                Can you see yourself in this career: a fast-paced work environment?
            </p>
            <div>
                <Form.Check
                        type="radio"
                        onChange={(e) => updateAnswer(setDAnswer5, "answer5", e.target.value)}
                        label="Yes"
                        value="Yes"
                        checked={danswer5 === "Yes"}
                    />
                <Form.Check
                        type="radio"
                        onChange={(e) => updateAnswer(setDAnswer5, "answer5", e.target.value)}
                        label="Maybe"
                        value="Maybe"
                        checked={danswer5 === "Maybe"}
                    />
                <Form.Check
                        type="radio"
                        onChange={(e) => updateAnswer(setDAnswer5, "answer5", e.target.value)}
                        label="No"
                        value="No"
                        checked={danswer5 === "No"}
                    />
            </div>
            <p>
                Does the following sound like you: I want a good-work life balance?
            </p>
            <div>
                <Form.Check
                        type="radio"
                        onChange={(e) => updateAnswer(setDAnswer6, "answer6", e.target.value)}
                        label="That sounds like me"
                        value="That sounds like me"
                        checked={danswer6 === "That sounds like me"}
                    />
                <Form.Check
                        type="radio"
                        onChange={(e) => updateAnswer(setDAnswer6, "answer6", e.target.value)}
                        label="That kind of sounds like me"
                        value="That kind of sounds like me"
                        checked={danswer6 === "That kind of sounds like me"}
                    />
                <Form.Check
                        type="radio"
                        onChange={(e) => updateAnswer(setDAnswer6, "answer6", e.target.value)}
                        label="No, that does not sound like me"
                        value="No, that does not sound like me"
                        checked={danswer6 === "No, that does not sound like me"}
                    />
            </div>
            <p>
                Which one of the following careers sounds the most appealing?
            </p>
            <div>
                <Form.Check
                        type="radio"
                        onChange={(e) => updateAnswer(setDAnswer7, "answer7", e.target.value)}
                        label="Carpenter"
                        value="Carpenter"
                        checked={danswer7 === "Carpenter"}
                    />
                <Form.Check
                        type="radio"
                        onChange={(e) => updateAnswer(setDAnswer7, "answer7", e.target.value)}
                        label="Tailor"
                        value="Tailor"
                        checked={danswer7 === "Tailor"}
                    />
                <Form.Check
                        type="radio"
                        onChange={(e) => updateAnswer(setDAnswer7, "answer7", e.target.value)}
                        label="Construction Worker"
                        value="Construction Worker"
                        checked={danswer7 === "Construction Worker"}
                    />
                <Form.Check
                        type="radio"
                        onChange={(e) => updateAnswer(setDAnswer7, "answer7", e.target.value)}
                        label="Jeweler"
                        value="Jeweler"
                        checked={danswer7 === "Jeweler"}
                    />
            </div>
        </div>
        </div>
        </div>
    );
}

export default DetQuestions