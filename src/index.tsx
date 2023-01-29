import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppProfile from './AppProfile';
import AppCounter from './AppCounter';
import AppProducts from './AppProducts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppProducts />
  </React.StrictMode>
);
