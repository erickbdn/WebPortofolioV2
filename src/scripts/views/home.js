/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
import { createHomeTemplate } from './template-creator';

const Home = {
    async render() {
        return `
        <div class="content">
          <div id="home" class="home">
          
          </div>
        </div>`;
    },

    async afterRender() {
      const homeContainer = document.querySelector('#home');
      homeContainer.innerHTML += createHomeTemplate();
    },
};

export default Home;