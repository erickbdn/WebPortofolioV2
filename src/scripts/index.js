/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import 'regenerator-runtime';
import App from './app';

const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('#mainContent'),
  });
  
  window.addEventListener('hashchange', () => {
    app.renderPage();
  });
  
  window.addEventListener('load', () => {
    app.renderPage();
  });