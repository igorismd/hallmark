import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './presentation/app'; 
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Check if the user is using Edge
// if (navigator.userAgent.includes('Edg')) {
//   document.body.classList.add('edg'); 
// }

 
root.render(
  <React.StrictMode>
    <div className="loaderApp" style={{width: '100%', height: '100vh', position: 'absolute', top: '0', left: '0', background: '#010FB8', zIndex: '1'}}></div>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
