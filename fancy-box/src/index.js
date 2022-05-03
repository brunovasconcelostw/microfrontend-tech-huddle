import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

let fancyBoxContainer

window.renderFancyBox = (containerId) => {
  fancyBoxContainer = ReactDOM.createRoot(document.getElementById(containerId));
  fancyBoxContainer.render(
    <App />
  );
}

window.unmountFancyBox = () => {
  fancyBoxContainer.unmount()
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
