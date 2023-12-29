import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { appStore } from './store/index';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
  </React.StrictMode>,
);
