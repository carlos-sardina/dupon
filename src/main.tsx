import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { appStore } from './store/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
);
