import React from 'react';
import ReactDOM from 'react-dom/client'
// import {HelloApp} from './HelloApp'
import {FirstApp} from './FirstApp'
// import { CounterApp } from './CounterApp';
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloApp /> */}
        <FirstApp title='Hola Mundo'/>
        {/* <CounterApp value={23} /> */}
    </React.StrictMode>
)