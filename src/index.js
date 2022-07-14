import Router from './router/index.js';

const router = Router.instance();

router
  .addRoute(/^$/, 'animations')
  .addRoute(/^404\/?$/, 'error404')
  .setNotFoundPagePath('animations')
  .listen();
