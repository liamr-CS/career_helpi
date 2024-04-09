import React, { useState } from "react";
import { Form } from "react-bootstrap";

function Questions () {
    const [answer1, setAnswer1] = useState<string>("Yes");
    function updateAnswer1(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer1(event.target.value);
    }
    return(
        <div>
            <p>Do you enjoy working with your hands?</p>
            <div>
                <Form.Check
                    type="radio"
                    onChange={updateAnswer1}
                    label="Yes"
                    value="yes"
                    checked={answer1 === "Yes"}
                />
                <Form.Check
                    type="radio"
                    onChange={updateAnswer1}
                    label="No"
                    value="no"
                    checked={answer1 === "no"}
                />
            </div>
            <p>Are you interested in technology?</p>
            <p>Do you like solving puzzles or problems?</p>
            <p>Do you prefer working alone or in a team?</p>
            <p>Do you enjoy being creative?</p>
            <p>Are you good at analyzing data or information?</p>
            <p>Do you have clear goals for your future career?</p>
        </div>
    );
}

export default Questions