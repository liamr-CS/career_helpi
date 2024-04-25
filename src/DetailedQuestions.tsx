import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface Props {
    onChange: (key: string, value: string) => void;
}

function DetQuestions ({onChange} : Props) {
    const [danswer1, setDAnswer1] = useState<string>("");
    function updateDAnswer1(event: React.ChangeEvent<HTMLInputElement>) {
        setDAnswer1(event.target.value);
        onChange("answer1", event.target.value)
    }
    const [danswer2, setDAnswer2] = useState<string>("");
    function updateDAnswer2(event: React.ChangeEvent<HTMLInputElement>) {
        setDAnswer2(event.target.value);
        onChange("answer2", event.target.value)
    }
    const [danswer3, setDAnswer3] = useState<string>("");
    function updateDAnswer3(event: React.ChangeEvent<HTMLInputElement>) {
        setDAnswer3(event.target.value);
        onChange("answer3", event.target.value)
    }
    const [danswer4, setDAnswer4] = useState<string>("");
    function updateDAnswer4(event: React.ChangeEvent<HTMLInputElement>) {
        setDAnswer4(event.target.value);
        onChange("answer4", event.target.value)
    }
    const [danswer5, setDAnswer5] = useState<string>("");
    function updateDAnswer5(event: React.ChangeEvent<HTMLInputElement>) {
        setDAnswer5(event.target.value);
        onChange("answer5", event.target.value)
    }
    const [danswer6, setDAnswer6] = useState<string>("");
    function updateDAnswer6(event: React.ChangeEvent<HTMLInputElement>) {
        setDAnswer6(event.target.value);
        onChange("answer6", event.target.value)
    }
    const [danswer7, setDAnswer7] = useState<string>("");
    function updateDAnswer7(event: React.ChangeEvent<HTMLInputElement>) {
        setDAnswer7(event.target.value);
        onChange("answer7", event.target.value)
    }

    return (
        <div>
            <p>
                On a scale of one to five, how much do you like programming?
            </p>
            <div>
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer1}
                        label="1"
                        value="1"
                        checked={danswer1 === "1"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer1}
                        label="2"
                        value="2"
                        checked={danswer1 === "2"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer1}
                        label="3"
                        value="3"
                        checked={danswer1 === "3"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer1}
                        label="4"
                        value="4"
                        checked={danswer1 === "4"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer1}
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
                        onChange={updateDAnswer2}
                        label="Strongly Agree"
                        value="Strongly Agree"
                        checked={danswer2 === "Strongly Agree"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer2}
                        label="Agree"
                        value="Agree"
                        checked={danswer2 === "Agree"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer2}
                        label="Neutral"
                        value="Neutral"
                        checked={danswer2 === "Neutral"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer2}
                        label="Disagree"
                        value="Disagree"
                        checked={danswer2 === "Disagree"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer2}
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
                        onChange={updateDAnswer3}
                        label="100% correct"
                        value="100% correct"
                        checked={danswer3 === "100% correct"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer3}
                        label="75% correct"
                        value="75% correct"
                        checked={danswer3 === "75% correct"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer3}
                        label="50% correct"
                        value="50% correct"
                        checked={danswer3 === "50% correct"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer3}
                        label="25% correct"
                        value="25% correct"
                        checked={danswer3 === "25% correct"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer3}
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
                        onChange={updateDAnswer4}
                        label="All the time"
                        value="All the time"
                        checked={danswer4 === "All the time"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer4}
                        label="A lot of the time"
                        value="A lot of the time"
                        checked={danswer4 === "A lot of the time"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer4}
                        label="Sometimes"
                        value="Sometimes"
                        checked={danswer4 === "Sometimes"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer4}
                        label="Not very often"
                        value="Not very often"
                        checked={danswer4 === "Not very often"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer4}
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
                        onChange={updateDAnswer5}
                        label="Yes"
                        value="Yes"
                        checked={danswer5 === "Yes"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer5}
                        label="Maybe"
                        value="Maybe"
                        checked={danswer5 === "Maybe"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer5}
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
                        onChange={updateDAnswer6}
                        label="That sounds like me"
                        value="That sounds like me"
                        checked={danswer6 === "That sounds like me"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer6}
                        label="That kind of sounds like me"
                        value="That kind of sounds like me"
                        checked={danswer6 === "That kind of sounds like me"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer6}
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
                        onChange={updateDAnswer7}
                        label="Carpenter"
                        value="Carpenter"
                        checked={danswer7 === "Carpenter"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer7}
                        label="Tailor"
                        value="Tailor"
                        checked={danswer7 === "Tailor"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer7}
                        label="Construction Worker"
                        value="Construction Worker"
                        checked={danswer7 === "Construction Worker"}
                    />
                <Form.Check
                        type="radio"
                        onChange={updateDAnswer7}
                        label="Jeweler"
                        value="Jeweler"
                        checked={danswer7 === "Jeweler"}
                    />
            </div>
        </div>
    );
}

export default DetQuestions