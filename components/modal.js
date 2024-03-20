document.addEventListener('DOMContentLoaded', () => {
  const modalTemplate = document.createElement('template');
  modalTemplate.innerHTML = `
    <div class="modal">
      <div class="modal-content">
        <div><p class="modal-title"></p><button class="closeModal">close</button></div>
        <img class="modal-image" src="" alt="Modal Image">
      </div>
    </div>
  `;

  function createModal(card) {
    const cardTitle = card.querySelector('.card-title').textContent;
    const modalImageSrc = card.getAttribute('data-modal-image');
    const clone = document.importNode(modalTemplate.content, true);
    const modal = clone.querySelector('.modal');

    modal.querySelector('.modal-title').textContent = cardTitle;
    modal.querySelector('.modal-image').src = modalImageSrc;
    modal.style.display = 'flex';
    modal.querySelector('.closeModal').addEventListener('click', () => closeModal(modal));

    document.body.appendChild(modal);
  }

  function closeModal(modal) {
    modal.style.display = 'none';
    modal.remove();
  }

  document.querySelectorAll('.openModal').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.card');
      createModal(card);
    });
  });

  globalThis.addEventListener('click', event => {
    if (event.target.classList.contains('modal')) {
      closeModal(event.target);
    }
  });

  globalThis.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      document.querySelectorAll('.modal').forEach(closeModal);
    }
  });
});
