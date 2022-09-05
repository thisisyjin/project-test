import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from '../node_modules/react-router-dom/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </BrowserRouter>,
);
