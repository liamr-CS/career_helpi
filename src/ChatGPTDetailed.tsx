import OpenAI from "openai";
import React, { useState } from "react";
import { keyData } from "./App";

//ChatGPT-4 generated BasicReportProps
interface DetailedReportProps {
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

function DetailedReport({answers} : DetailedReportProps) {  
    const openai = new OpenAI({apiKey: keyData, dangerouslyAllowBrowser: true}); 
    //Code by GPT-4
    const [reportSections, setReportSections] = useState(["", "", "", ""]);

    function formatReport (report: string) {
        const sections = report.split("\n");
        sections[0] = sections[0].replace("Best suited for:", "");
        sections[1] = sections[1].replace("Will do well in:", "");
        sections[2] = sections[2].replace("Can adapt to:", "");
        sections[3] = sections[3].replace("Unlikely suited for:", "");
        setReportSections([sections[0], sections[1], sections[2], sections[3]])
    }
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
            + "\nAre you good at analyzing data or information?" + answer6 + "\nDo you have clear goals for your future career?" + answer7 + 
            "Please model your response in the following format:\nBest suited for:\nWill do well in:\nCan adapt to:\nUnlikely suited for:\nPlease remember to include \"\n\" in your response so all four categories appear on separate line as well as multiple careers for each category."}],
        model: "gpt-4-turbo",
        });
        //Lines 42-46 by GPT-4
        if (completion.choices && completion.choices.length > 0 && completion.choices[0].message.content) {
            formatReport(completion.choices[0].message.content);
        } 

    };
    return (
        <div>
            <button onClick={ChatGPTReport}>Get Results</button>
            <div>
                <h2>Best suited for:</h2>
                <p>{reportSections[0]}</p>
                <h2>Will do well in:</h2>
                <p>{reportSections[1]}</p>
                <h2>Can adapt to:</h2>
                <p>{reportSections[2]}</p>
                <h2>Unlikely unsuited for</h2>
                <p>{reportSections[3]}</p>
            </div>
        </div>
    )
}

export default DetailedReport