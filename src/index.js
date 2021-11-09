import nav from './nav.js';
import home from './home.js';
import menu from './menu.js';
import about from './about.js';
import './style.css';
import './reset.css';

const eventManager = (() => {
  const onClickClear = (callback, root, node) => {
    node.addEventListener('click', function() {
      root.lastElementChild.remove();
      callback(root);
    })
  }

  const onDocumentLoad = (callback, arg) => {
    window.addEventListener('load', function() {
      callback(arg);
    })
  }
  
  return { onClickClear, onDocumentLoad };
})();

const run = (() => {
  const addEvent = eventManager;
  const root = document.getElementById('content');

  addEvent.onDocumentLoad(home, root);
  nav(root);

  const homeElement = document.getElementById('Home');
  const menuElement = document.getElementById('Menu');
  const aboutElement = document.getElementById('About');
  
  addEvent.onClickClear(home, root, homeElement);
  addEvent.onClickClear(menu, root, menuElement);
  addEvent.onClickClear(about, root, aboutElement);


})();