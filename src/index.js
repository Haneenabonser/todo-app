import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import AuthProvider from './context/auth';

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,

  document.getElementById('root')
);
