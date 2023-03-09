import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppXY from './AppXY';
import AppMentor from './AppMentor';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppMentor />
  </React.StrictMode>
);
