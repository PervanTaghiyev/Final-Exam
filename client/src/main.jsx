import React from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as ReactDOM from 'react-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <App/>
    </BrowserRouter>
)
