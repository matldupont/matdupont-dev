import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import './main.css';
import { HomePage } from './pages/home';
import { registerServiceWorker } from './utils/serviceWorker';

function App() {
  return <HomePage />;
}

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

registerServiceWorker();
