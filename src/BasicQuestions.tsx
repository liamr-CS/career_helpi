import React, { useState } from "react";
import { Form } from "react-bootstrap";

/**Lines 4-10 by ChatGPT-4 **/

interface Props {
    onChange: (key: string, value: string) => void;
}

function Questions({onChange} : Props) {  
    const [banswer1, setBAnswer1] = useState<string>("");
    function updateBAnswer1(event: React.ChangeEvent<HTMLInputElement>) {
        setBAnswer1(event.target.value);
        onChange("answer1", event.target.value)
    }
    const [banswer2, setBAnswer2] = useState<string>("");
    function updateBAnswer2(event: React.ChangeEvent<HTMLInputElement>) {
        setBAnswer2(event.target.value);
        onChange("answer2", event.target.value)
    }
    const [banswer3, setBAnswer3] = useState<string>("");
    function updateBAnswer3(event: React.ChangeEvent<HTMLInputElement>) {
        setBAnswer3(event.target.value);
        onChange("answer3", event.target.value)
    }
    const [banswer4, setBAnswer4] = useState<string>("");
    function updateBAnswer4(event: React.ChangeEvent<HTMLInputElement>) {
        setBAnswer4(event.target.value);
        onChange("answer4", event.target.value)
    }
    const [banswer5, setBAnswer5] = useState<string>("");
    function updateBAnswer5(event: React.ChangeEvent<HTMLInputElement>) {
        setBAnswer5(event.target.value);
        onChange("answer5", event.target.value)
    }
    const [banswer6, setBAnswer6] = useState<string>("");
    function updateBAnswer6(event: React.ChangeEvent<HTMLInputElement>) {
        setBAnswer6(event.target.value);
        onChange("answer6", event.target.value)
    }
    const [banswer7, setBAnswer7] = useState<string>("");
    function updateBAnswer7(event: React.ChangeEvent<HTMLInputElement>) {
        setBAnswer7(event.target.value);
        onChange("answer7", event.target.value)
    }

    return(
        <div>
            <p>Do you enjoy working with your hands?</p>
            <div>
                <Form.Check
                    type="radio"
                    onChange={updateBAnswer1}
                    label="Yes"
                    value="Yes"
                    checked={banswer1 === "Yes"}
                />
                <Form.Check
                    type="radio"
                    onChange={updateBAnswer1}
                    label="No"
                    value="No"
                    checked={banswer1 === "No"}
                />
            </div>
            <p>Are you interested in technology?</p>
            <div>
                <Form.Check
                    type="radio"
                    onChange={updateBAnswer2}
                    label="Yes"
                    value="Yes"
                    checked={banswer2 === "Yes"}
                />
                <Form.Check
                    type="radio"
                    onChange={updateBAnswer2}
                    label="No"
                    value="No"
                    checked={banswer2 === "No"}
                />
            </div>
            <p>Do you like solving puzzles or problems?</p>
            <div>
            <Form.Check
                    type="radio"
                    onChange={updateBAnswer3}
                    label="Yes"
                    value="Yes"
                    checked={banswer3 === "Yes"}
                />
                <Form.Check
                    type="radio"
                    onChange={updateBAnswer3}
                    label="Sometimes"
                    value="Sometimes"
                    checked={banswer3 === "Sometimes"}
                />
                <Form.Check
                    type="radio"
                    onChange={updateBAnswer3}
                    label="No"
                    value="No"
                    checked={banswer3 === "No"}
                />
            </div>
            <p>Do you prefer working alone or in a team?</p>
            <div>
                <Form.Check
                    type="radio"
                    onChange={updateBAnswer4}
                    label="Alone"
                    value="Alone"
                    checked={banswer4 === "Alone"}
                />
                 <Form.Check
                    type="radio"
                    onChange={updateBAnswer4}
                    label="With Others"
                    value="With Others"
                    checked={banswer4 === "With Others"}
                />
            </div>
            <p>Do you enjoy being creative?</p>
            <div>
                <Form.Check
                    type="radio"
                    onChange={updateBAnswer5}
                    label="Yes"
                    value="Yes"
                    checked={banswer5 === "Yes"}
                />
                <Form.Check
                    type="radio"
                    onChange={updateBAnswer5}
                    label="No"
                    value="No"
                    checked={banswer5 === "No"}
                />
            </div>
            <p>Are you good at analyzing data or information?</p>
            <div>
                <Form.Check
                    type="radio"
                    onChange={updateBAnswer6}
                    label="Yes"
                    value="Yes"
                    checked={banswer6 === "Yes"}
                />
                <Form.Check
                    type="radio"
                    onChange={updateBAnswer6}
                    label="No"
                    value="No"
                    checked={banswer6 === "No"}
                />
            </div>
            <p>Do you have clear goals for your future career?</p>
            <div>
                <Form.Check
                    type="radio"
                    onChange={updateBAnswer7}
                    label="Yes"
                    value="Yes"
                    checked={banswer7 === "Yes"}
                />
                <Form.Check
                    type="radio"
                    onChange={updateBAnswer7}
                    label="No"
                    value="No"
                    checked={banswer7 === "No"}
                />
            </div>
        </div>
    );
}

export default Questions
