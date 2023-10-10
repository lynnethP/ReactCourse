import React from 'react';
import ReactDOM from 'react-dom/client'
// import {HelloApp} from './HelloApp'
import {FirstApp} from './FirstApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloApp /> */}
        <FirstApp title='Hola, mundo!' subTitle={12345} />
    </React.StrictMode>
)