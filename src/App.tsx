import { Button, Form } from "react-bootstrap";
import React, { useState } from 'react';
import './App.css';
import BaseQsDes from './BaseAsk';
import DetailQsDes from './DetailAsk';
import DetQuestions from './DetailedQuestions';
import timer from './Timer';
import BasicPage from "./BasicQuestionsPage";

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
          <h1>TAKE THE DETAILED QUIZ HERE:</h1>
          <button onClick={toggleDetailedQuestions}><h3>Detailed Quiz</h3></button>
        </div>
      ) : showBasicQuestions ? (
        <div>
          <h2>Basic Quiz Instructions:</h2>
          <BaseQsDes></BaseQsDes>
          <button onClick={Basictimer.toggle}>Start/Stop Basic Quiz Timer</button>
          <BasicPage></BasicPage>
        </div>
      ) : (
        <div>
          <h2>Detailed Quiz Instructions:</h2>
          <DetailQsDes></DetailQsDes>
          <button onClick={Basictimer.toggle}>Start/Stop Detailed Quiz Timer</button>
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

export default App;