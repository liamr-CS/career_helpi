import { Button, Form } from "react-bootstrap";
import React, { useState } from 'react';
import './App.css';
import BaseQsDes from './BaseAsk';
import DetailQsDes from './DetailAsk';
import DetQuestions from './DetailedQuestions';
import Timer from "./Timer";
import TimerParts from "./TimerParts";
import BasicPage from "./BasicQuestionsPage";
const basictimer = new Timer();
const testTimer = new Timer();



//the testTimer is a demo for how the function/class works, remove once all proper timers are implemented and finalized




const Basictimer = new timer();

export let keyData = "";
export const saveKeyData = "MYKEY";

const prevKey = localStorage.getItem(saveKeyData);
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [key, setKey] = useState<string>(keyData);
  const [showBasicQuestions, setShowBasicQuestions] = useState(false);
  const [showDetailedQuestions, setShowDetailedQuestions] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSubmit = () => {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload();
  };

  const changeKey = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKey(event.target.value);
  };

  const toggleBasicQuestions = () => {
    setShowBasicQuestions(!showBasicQuestions);
  };

  const toggleDetailedQuestions = () => {
    setShowDetailedQuestions(!showDetailedQuestions);
  };

  const navigateToHomepage = () => {
    setShowBasicQuestions(false);
    setShowDetailedQuestions(false);
  };
  const [testTimer, setTestTimer] = useState<Timer>(new Timer());

  const toggleTimer = () => {
      testTimer.toggle((count: number) => {
      });
  };

  const resetTimer = () => {
      testTimer.reset();
  };
  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="header">
        <label className="switch switch-left">
          <input type="checkbox" onChange={toggleDarkMode} checked={darkMode} />
          <span className="slider"></span>
        </label>
        <div className={`dark-mode-toggle ${darkMode ? 'dark-mode-text' : 'light-mode-text'}`} onClick={toggleDarkMode}></div>
        <div className="App-logo"></div>
        <div className="quizzi-text" onClick={navigateToHomepage}>Quizzi</div>
      </div>
      {!showBasicQuestions && !showDetailedQuestions ? (      
        <div>




          
          <div>
            <h2>Basic Quiz Instructions:</h2>
            <BaseQsDes></BaseQsDes>
          </div>
          <h1>TAKE THE BASIC QUIZ HERE:</h1>
          <button onClick={toggleBasicQuestions}><h3>Basic Quiz</h3></button>
          <div>
            <h2>Detailed Quiz Instructions:</h2>
            <DetailQsDes></DetailQsDes>
          </div>   


          <button onClick={(e) => e.currentTarget.innerText = `Click to show current time: ${testTimer.getCount()}`}>Click to show current time: {testTimer.getCount()}</button>
          <button onClick={() => testTimer.toggle((count: number) => console.log(count))}>Start/Stop</button>
          <button onClick={() => testTimer.reset()}>Reset</button>


          <h1>TAKE THE DETAILED QUIZ HERE:</h1>
          <button onClick={toggleDetailedQuestions}><h3>Detailed Quiz</h3></button>
        </div>
      ) : showBasicQuestions ? (
        <div>
          
          <h2>Basic Quiz Instructions:</h2>
          <BaseQsDes></BaseQsDes>
          <button onClick={() => basictimer.toggle}>Start/Stop Basic Quiz Timer</button>
          <BasicPage></BasicPage>
        </div>
      ) : (
        <div>
          <h2>Detailed Quiz Instructions:</h2>
          <DetailQsDes></DetailQsDes>
          <button onClick={() => basictimer.toggle}>Start/Stop Detailed Quiz Timer</button>
          <DetQuestions></DetQuestions>
        </div>
      )}
      <div>
        <Form>
          <Form.Label>API Key:</Form.Label>
          <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
          <br></br>
          <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
        </Form>
      </div>
    </div>
  );
}
//requested help from GPT on lines: 87, 
export default App;