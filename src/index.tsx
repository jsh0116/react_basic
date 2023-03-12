import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppXY from './AppXY';
import AppMentor from './AppMentor';
import AppForm from './AppForm';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppForm />
  </React.StrictMode>
);
