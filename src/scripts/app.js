/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable eol-last */
import DrawerInitiator from './utils/drawer-initiator';
import UrlParser from './routes/url-parser';
import routes from './routes/routes';

class App {
    constructor({ button, drawer, content }) {
      this._button = button;
      this._drawer = drawer;
      this._content = content;
  
      this._initialAppShell();
    }
  
    _initialAppShell() {
      DrawerInitiator.init({
        button: this._button,
        drawer: this._drawer,
        content: this._content,
      });
    }
  
    async renderPage() {
      const url = UrlParser.parseActiveUrlWithCombiner();
      const page = routes[url];
      this._content.innerHTML = await page.render();
      await page.afterRender();
    }
  }
  
  export default App;