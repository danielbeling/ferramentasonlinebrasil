import React from 'react';
import { createRoot } from 'react-dom/client'; // Importe createRoot do ReactDOM
import { Provider } from 'react-redux';
import store from './pages/gerador/Gradient/store';
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root')); // Crie uma raiz com createRoot
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
