import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./App.css";

interface Props {
  onChange: (key: string, value: string) => void;
}

function Questions({ onChange }: Props) {
  const [banswer1, setBAnswer1] = useState<string>("");
  const [banswer2, setBAnswer2] = useState<string>("");
  const [banswer3, setBAnswer3] = useState<string>("");
  const [banswer4, setBAnswer4] = useState<string>("");
  const [banswer5, setBAnswer5] = useState<string>("");
  const [banswer6, setBAnswer6] = useState<string>("");
  const [banswer7, setBAnswer7] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);

  const updateProgress = () => {
    const totalQuestions = 7;
    const answeredQuestions = [banswer1, banswer2, banswer3, banswer4, banswer5, banswer6, banswer7].filter(answer => answer !== "").length;
    const newProgress = (answeredQuestions / totalQuestions) * 100;
    setProgress(newProgress);
  };
  
  const updateAnswer = (setter: React.Dispatch<string>, answer: string, value: string) => {
    setter(value);
    onChange(answer, value);
    updateProgress();
  };

  return (
    <div className="progress-bar-wrapper">
      <div className="progress-bar-container">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
            <p>Do you enjoy working with your hands?</p>
            <div>
                <Form.Check
                    type="radio"
                    onChange={(e) => updateAnswer(setBAnswer1, "answer1", e.target.value)}
                    label="Yes"
                    value="Yes"
                    checked={banswer1 === "Yes"}
                />
                <Form.Check
                    type="radio"
                    onChange={(e) => updateAnswer(setBAnswer1, "answer1", e.target.value)}
                    label="No"
                    value="No"
                    checked={banswer1 === "No"}
                />
            </div>
            <p>Are you interested in technology?</p>
            <div>
                <Form.Check
                    type="radio"
                    onChange={(e) => updateAnswer(setBAnswer2, "answer2", e.target.value)}
                    label="Yes"
                    value="Yes"
                    checked={banswer2 === "Yes"}
                />
                <Form.Check
                    type="radio"
                    onChange={(e) => updateAnswer(setBAnswer2, "answer2", e.target.value)}
                    label="No"
                    value="No"
                    checked={banswer2 === "No"}
                />
            </div>
            <p>Do you like solving puzzles or problems?</p>
            <div>
            <Form.Check
                    type="radio"
                    onChange={(e) => updateAnswer(setBAnswer3, "answer3", e.target.value)}
                    label="Yes"
                    value="Yes"
                    checked={banswer3 === "Yes"}
                />
                <Form.Check
                    type="radio"
                    onChange={(e) => updateAnswer(setBAnswer3, "answer3", e.target.value)}
                    label="Sometimes"
                    value="Sometimes"
                    checked={banswer3 === "Sometimes"}
                />
                <Form.Check
                    type="radio"
                    onChange={(e) => updateAnswer(setBAnswer3, "answer3", e.target.value)}
                    label="No"
                    value="No"
                    checked={banswer3 === "No"}
                />
            </div>
            <p>Do you prefer working alone or in a team?</p>
            <div>
                <Form.Check
                    type="radio"
                    onChange={(e) => updateAnswer(setBAnswer4, "answer4", e.target.value)}
                    label="Alone"
                    value="Alone"
                    checked={banswer4 === "Alone"}
                />
                 <Form.Check
                    type="radio"
                    onChange={(e) => updateAnswer(setBAnswer4, "answer4", e.target.value)}
                    label="With Others"
                    value="With Others"
                    checked={banswer4 === "With Others"}
                />
            </div>
            <p>Do you enjoy being creative?</p>
            <div>
                <Form.Check
                    type="radio"
                    onChange={(e) => updateAnswer(setBAnswer5, "answer5", e.target.value)}
                    label="Yes"
                    value="Yes"
                    checked={banswer5 === "Yes"}
                />
                <Form.Check
                    type="radio"
                    onChange={(e) => updateAnswer(setBAnswer5, "answer5", e.target.value)}
                    label="No"
                    value="No"
                    checked={banswer5 === "No"}
                />
            </div>
            <p>Are you good at analyzing data or information?</p>
            <div>
                <Form.Check
                    type="radio"
                    onChange={(e) => updateAnswer(setBAnswer6, "answer6", e.target.value)}
                    label="Yes"
                    value="Yes"
                    checked={banswer6 === "Yes"}
                />
                <Form.Check
                    type="radio"
                    onChange={(e) => updateAnswer(setBAnswer6, "answer6", e.target.value)}
                    label="No"
                    value="No"
                    checked={banswer6 === "No"}
                />
            </div>
            <p>Do you have clear goals for your future career?</p>
            <div>
                <Form.Check
                    type="radio"
                    onChange={(e) => updateAnswer(setBAnswer7, "answer7", e.target.value)}
                    label="Yes"
                    value="Yes"
                    checked={banswer7 === "Yes"}
                />
                <Form.Check
                    type="radio"
                    onChange={(e) => updateAnswer(setBAnswer7, "answer7", e.target.value)}
                    label="No"
                    value="No"
                    checked={banswer7 === "No"}
                />
            </div>
        </div>
        </div>
    );
}

export default Questions
