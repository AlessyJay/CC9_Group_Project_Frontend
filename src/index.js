import React from 'react';
import ReactDOM from 'react-dom';
import './Style/style.css';
import './index.css';
import '../node_modules/react-quill/dist/quill.snow.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserContextPervider } from './context/userContext';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();
ReactDOM.render(
  <BrowserRouter history={history}>
    <React.StrictMode>
      <UserContextPervider>
        <App />
      </UserContextPervider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
