import React from 'react';
import ReactDOM from 'react-dom';
import './styleCss/index.css';
import App from './App';
import { FoodListDataProvider } from './FoodListDataContext';

ReactDOM.render(
  <FoodListDataProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FoodListDataProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
