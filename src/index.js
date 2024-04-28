import React from 'react';
import ReactDOM from 'react-dom/client';
import { Main } from './components/Main/Main'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/dist/morph/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main></Main>
  </React.StrictMode>
);
