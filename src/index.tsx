import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './main.css';

function App() {
  return (
    <div className="bg-gray-900">
      <h1 className="text-slate-100">MatDupont.dev</h1>
      <h2 className="text-slate-400">Waddup, Mataverse?</h2>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
