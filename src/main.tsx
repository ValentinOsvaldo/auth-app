import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthApp } from './AuthApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthApp />
  </React.StrictMode>
);
