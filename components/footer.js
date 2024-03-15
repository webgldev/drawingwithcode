const createExtendedFooter = () => {
  const footer = document.createElement('footer');
  footer.innerHTML = /*html*/`
    Copyright 2024. <a href="https://github.com/wfedev" target="_blank">WFEDEV</a>
    <button id="modeButton" onclick="mode()"></button>
  `;
  document.body.appendChild(footer);
};

createExtendedFooter();
