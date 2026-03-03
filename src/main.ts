import greet from './components/App.js';

const app = document.getElementById('app');
if (app) {
  app.textContent = greet('TypeScript');
}
