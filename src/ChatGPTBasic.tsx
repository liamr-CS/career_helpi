import OpenAI from "openai";
import React, { useState } from "react";
import { keyData } from "./App";

//ChatGPT-4 generated BasicReportProps
interface BasicReportProps {
    answers: {
        answer1: string;
        answer2: string;
        answer3: string;
        answer4: string;
        answer5: string;
        answer6: string;
        answer7: string;
    };
}

function BasicReport({answers} : BasicReportProps) {  
    const openai = new OpenAI({apiKey: keyData, dangerouslyAllowBrowser: true}); 
    //Code by GPT-4
    const [response, setResponse] = useState("");
    // The basis of this code is from OpenAi's tutorial for their API
    const ChatGPTReport = async () => {
        const answer1 = answers.answer1;
        const answer2 = answers.answer2;
        const answer3 = answers.answer3;
        const answer4 = answers.answer4;
        const answer5 = answers.answer5;
        const answer6 = answers.answer6;
        const answer7 = answers.answer7;
        const completion = await openai.chat.completions.create({
        messages: [{ role: "system", 
            content: "You create reports based on the results of a career assessment. The user has inputted the following results to the" + 
            "following questions:\nDo you enjoy working with your hands?" 
            + answer1 + "\nAre you interested in technology?" + answer2 + "\nDo you like solving puzzles or problems?" + answer3
            + "\nDo you prefer working alone or in a team?" + answer4  + "\nDo you enjoy being creative?" + answer5
            + "\nAre you good at analyzing data or information?" + answer6 + "\nDo you have clear goals for your future career?" + answer7}],
        model: "gpt-4",
        });
        //Code by GPT-4
        if (completion.choices && completion.choices.length > 0 && completion.choices[0].message.content) {
            setResponse(completion.choices[0].message.content);
        } else {
            setResponse("Error! Failed to generate a sufficient response.");
        }

    };

    return (
        <div>
            <button onClick={ChatGPTReport}>Get Results</button>
            <p>{response}</p>
        </div>
    )
}

export default BasicReport