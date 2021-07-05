import React from 'react';
import ReactDOM from 'react-dom';
import AuthProvider from './providers/AuthProvider';
import App from './components/App';

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);
