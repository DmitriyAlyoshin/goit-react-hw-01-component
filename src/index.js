import React from 'react'; //main library
import ReactDOM from 'react-dom/client'; //main library
import { App } from 'components/App'; // root component
import './index.css'; // styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
