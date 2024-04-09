import logo from './logo.svg';
import './App.css';
import BaseQsDes from './BaseAsk';
import DetailQsDes from './DetailAsk';
import { App } from './QuizButtons';

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
export let keyData = "";
export const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

export default App;
