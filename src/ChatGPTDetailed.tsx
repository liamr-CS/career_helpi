/* Imports */
import OpenAI from "openai";
import React, { useState } from "react";
import { keyData } from "./App";
import './App.css';

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
    const [report, setReport] = useState("");
    // Generated by ChatGPT-4
    const [isLoading, setLoading] = useState(false);

    function formatReport (report: string) {
        setReport(report.replace("*","").replace(" - ", ", "));
        // Generated by ChatGPT-4
        setLoading(false);
    }

    // The basis of this code is from OpenAi's tutorial for their API
    const ChatGPTReport = async () => {
        // Generated by ChatGPT-4
        setLoading(true);
        const answer1 = answers.answer1;
        const answer2 = answers.answer2;
        const answer3 = answers.answer3;
        const answer4 = answers.answer4;
        const answer5 = answers.answer5;
        const answer6 = answers.answer6;
        const answer7 = answers.answer7;
        const completion = await openai.chat.completions.create({
        messages: [{ role: "system", 
            content: "You create reports based on the results of a career assessment. You never use the \"*\" character nor the \"-\" character in your responses, and separate careers in the first 4 categories with a \",\"." + 
            "\"Please model your response in the following format:\"\nBest suited for:\nWill do well in:\nCan adapt to:\nUnlikely suited for:\n" +
            "Why you may be best suited for:\nWhy you would still do well in:\nWhy you might adapt to\nWhy you are likely not suited for:\n" +
            "The best type of work environment for you is:\nUnsuitable types of work environments for you are:\""}, {role: "user", content: "The user has inputted the following results to the" + 
            "following questions:\nOn a scale of one to five, how much do you like programming?" 
            + answer1 + "\nOn a scale of strongly agree to strongly disagree, are you a leader?" + answer2 + "\nRespond with how correct the following statement is: reality is objective." + answer3
            + "\nRespond with how often you do the following: think about the future." + answer4  + "\nCan you see yourself in this career: a fast-paced work environment?" + answer5
            + "\nDoes the following sound like you: I want a good-work life balance?" + answer6 + "\nWhich one of the following careers sounds the most appealing?" + answer7}],
        model: "gpt-4-turbo",
        });
        //Lines 42-46 by GPT-4
        if (completion.choices && completion.choices.length > 0 && completion.choices[0].message.content) {
            formatReport(completion.choices[0].message.content);
        }

    };



    /* Return Statements for Resluts Text, GPT Generation, and Formatting */
    return (
      <div className="Results-container">
    {!isLoading && report === "" && (
      <button className="Button-get-answer" onClick={ChatGPTReport}>Get Results</button>
    )}
      {isLoading ? (
        <div className="Loading-overlay">
          <h2>Loading</h2>
          <div className="Loading-spinner"></div>
        </div>
      ) : report === "Error: Report failed to generate" ? (
        <div>
          <h2>{report}</h2>
        </div>
      ) : report === "" ? (
        <div className="Results-text">
          <h2>You've completed the Detailed Quiz!</h2>
        </div>
      ) :  
                (
                  <div>
                  <div className="Results-section">
                    <h2 className="Results-heading">BEST CAREER(S) FOR YOU:</h2>
                    <p>{report.substring(report.indexOf("Best suited for:") + 17, report.indexOf("Will do well in:"))}</p>
                  </div>
                  <div className="Results-section">
                    <h2 className="Results-heading">WOULD SUCCEED DOING THESE CAREERS:</h2>
                    <p>{report.substring(report.indexOf("Will do well in:") + 17, report.indexOf("Can adapt to:"))}</p>
                  </div>
                  <div className="Results-section">
                    <h2 className="Results-heading">CAREERS YOU CAN ADAPT TO:</h2>
                    <p>{report.substring(report.indexOf("Can adapt to:") + 14, report.indexOf("Unlikely suited for:"))}</p>
                  </div>
                  <div className="Results-section">
                    <h2 className="Results-heading">CAREERS YOU ARE UNLIKELY SUITED FOR:</h2>
                    <p>{report.substring(report.indexOf("Unlikely suited for:") + 21, report.indexOf("Why you may be best suited for:"))}</p>
                  </div>
                  <div className="Results-section">
                    <h2 className="Results-heading">WHY THESE CAREERS ARE BEST FOR YOU:</h2>
                    <p>{report.substring(report.indexOf("Why you may be best suited for:") + 32, report.indexOf("Why you would still do well in:"))}</p>
                  </div>
                  <div className="Results-section">
                    <h2 className="Results-heading">WHY YOU WOULD WOULD SUCCEED DOING THESE CAREERS:</h2>
                    <p>{report.substring(report.indexOf("Why you would still do well in:") + 32, report.indexOf("Why you might adapt to:"))}</p>
                  </div>
                  <div className="Results-section">
                    <h2 className="Results-heading">WHY YOU CAN ADAPT TO THESE CAREERS:</h2>
                    <p>{report.substring(report.indexOf("Why you might adapt to:") + 24, report.indexOf("Why you are likely not suited for:"))}</p>
                  </div>
                  <div className="Results-section">
                    <h2 className="Results-heading">WHY YOU ARE UNLIKELY SUITED FOR THESE CAREERS:</h2>
                    <p>{report.substring(report.indexOf("Why you are likely not suited for:") + 35, report.indexOf("The best type of work environment for you is:"))}</p>
                  </div>
                  <div className="Results-section">
                    <h2 className="Results-heading">THE BEST TYPE OF WORK ENVIRONMENT FOR YOU IS:</h2>
                    <p>{report.substring(report.indexOf("The best type of work environment for you is:") + 46, report.indexOf("Unsuitable types of work environments for you are:"))}</p>
                  </div>
                  <div className="Results-section">
                    <h2 className="Results-heading">UNSUITABLE TYPES OF WORK ENVIRONMENTS FOR YOU ARE:</h2>
                    <p>{report.substring(report.indexOf("Unsuitable types of work environments for you are:") + 51)}</p>
                  </div>
                </div>
                )
            }
        </div>
    )
}

export default DetailedReport
