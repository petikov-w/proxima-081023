import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';

import {themeProxima} from './styles/themeProxima';

import './index.css';
import './assets/fonts/Fonts.imports';
import { App } from './app';



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
        <ThemeProvider theme={themeProxima}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);