import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppXY from './AppXY';
import AppMentor from './AppMentor';
import AppForm from './AppForm';
import AppWrap from './AppWrap';
import AppTheme from './AppTheme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppTheme />
  </React.StrictMode>
);
