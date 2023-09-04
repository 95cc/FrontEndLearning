// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react'
import ReactDom from 'react-dom'

import Hello from './demo/Hello'
import HelloFC from './demo/HelloFC'
import HelloClass from './demo/HelloClass'
import HelloHoc from './demo/HelloHoc'
import HelloHooks from './demo/HelloHooks'

ReactDom.render(
  <div>
    <Hello name="TypeScript" />
    <HelloFC name="TypeScript" />
    <HelloClass name="类组件"></HelloClass>
    <HelloHoc name="HelloHoc" loading={true} />
    <HelloHooks name="TypeScript" />
  </div>,
  document.querySelectorAll('.app')[0]
)
