import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import MyInfo from "./components/MyInfo"
//import App from './components/learning/LearningApp';
import App from './App'
ReactDOM.render(
    <BrowserRouter>
        <App />
     </BrowserRouter>,
document.getElementById('root')
);