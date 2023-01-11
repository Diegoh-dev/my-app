import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './pages/home';
import GlobalStyles from './styles/globalStyle'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Home/>
    <GlobalStyles/>
  </React.StrictMode>
);

