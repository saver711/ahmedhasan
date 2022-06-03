import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  //for github pages
  <HashRouter
  // basename="/ahmedhasan"
  >
    <App />
  </HashRouter>
)