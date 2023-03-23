import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import AppContextProvider from "./context";
import './clientlibs/css/index.css';

createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
        <AppContextProvider>
            <App />
        </AppContextProvider>
    </React.StrictMode>
);
