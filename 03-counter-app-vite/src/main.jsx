import React from 'react';
import ReactDOM from 'react-dom/client'
// import {HelloApp} from './HelloApp'
// import {FirstApp} from './FirstApp'
import { CounterApp } from './CounterApp';
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloApp /> */}
        {/* <FirstApp title='Hola, mundo!' subTitle={12345} /> */}
        <CounterApp value={2023} />
    </React.StrictMode>
)