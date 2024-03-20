import { updateLinkHref, highlightActiveLink } from './path.js';

document.addEventListener("DOMContentLoaded", () => {
  const menu = createMenu();
  document.body.insertBefore(menu, document.body.firstChild);
  if (sessionStorage.getItem('mode') === 'dark') {
    document.body.classList.add('dark');
    document.getElementById('modeButton').textContent = '🌙';
  }
  globalThis.onload = () => {
    document.getElementById('menu').addEventListener('click', () => {
      document.querySelector('#menuToggle input').checked = false;
    });
  }
  updateModeButtonText();
});

const createMenu = () => {
  const originalHrefs = [];
  const newContent = document.createElement('nav');
  newContent.innerHTML = `
    <div id="menuToggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul id="menu">
        <li><a href="/">Home</a></li>
        <li><a href="../pages/1/index.html" class="code">CSS</a></li>
        <li><a href="../pages/2/index.html" class="code">WebGL</a></li>
        <li><a href="../pages/3/index.html" class="drawing">GenAI</a></li>
        <li><a href="../pages/4/index.html" class="drawing">iPad</a></li>
        <li><a href="../pages/5/index.html">etc</a></li>
      </ul>
    </div>
  `;

  newContent.querySelectorAll('a').forEach((link, index) => {
    originalHrefs[index] = link.getAttribute('href');
    updateLinkHref(link, originalHrefs[index], globalThis.location);
  });
  highlightActiveLink(newContent.querySelectorAll('a'), globalThis.location.pathname);

  document.addEventListener("DOMContentLoaded", () => {
    newContent.querySelectorAll('.main-card li').forEach((item, index) => {
      if (index !== 0) {
        item.style.setProperty('--index', `"${index}"`);
      }
    });
  });

  globalThis.addEventListener('popstate', () => {
    highlightActiveLink(newContent.querySelectorAll('a'), globalThis.location.pathname);
  });

  globalThis.mode = () => {
    const body = document.body;
    body.classList.toggle('dark');
    sessionStorage.setItem('mode', body.classList.contains('dark') ? 'dark' : 'light');
    updateModeButtonText();
  };

  globalThis.updateModeButtonText = () => {
    const modeText = sessionStorage.getItem('mode') === 'dark' ? '🌼' : '🌙';
    document.getElementById('modeButton').textContent = modeText;
  };

  return newContent;
};
