import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import './assets/fonts/Fonts.imports';
import { App } from './app';



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);