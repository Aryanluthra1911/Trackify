import { createRoot } from 'react-dom/client'
import "./index.css";
import App from './App.jsx'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
