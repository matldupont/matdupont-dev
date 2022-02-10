import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './main.css';
import { HomePage } from './pages/home';

function App() {
  return <HomePage />;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
