import React from 'react';
import ReactDOM from 'react-dom/client';
import { Clock } from './components/Clock';
// import Page from './components/ContextSample';
// import Counter from './components/CounterSample';
// import CounterWithReducer from './components/CounterWithReducer';
// import {Parent} from './components/CounterWithMemo';
import ParentA from './components/SampleUseContext';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Container from './components/ContainerSample';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ParentA />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
