import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
      <App className='page'/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
