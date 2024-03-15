document.addEventListener('DOMContentLoaded', () => {
  const modalTemplate = document.createElement('template');
  modalTemplate.innerHTML = `
    <div class="modal">
      <div class="modal-content">
        <div><p class="modal-title"></p><button class="closeModal">close</button></div>
        <img class="modal-image" src="" alt="Modal Image">
      </div>
    </div>
  `
  document.querySelectorAll('.openModal').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.card');
      const cardTitle = card.querySelector('.card-title').textContent;
      const modalImageSrc = card.getAttribute('data-modal-image');
      const clone = document.importNode(modalTemplate.content, true);
      const modal = clone.querySelector('.modal');
      modal.querySelector('.modal-title').textContent = cardTitle;
      modal.querySelector('.modal-image').src = modalImageSrc;

      document.body.appendChild(modal);
      modal.style.display = 'flex';

      modal.querySelector('.closeModal').addEventListener('click', () => {
        modal.style.display = 'none';
        modal.remove();
      });
    });
  });

  const closeModalButtons = document.querySelectorAll('.closeModal');

  function toggleModal(button, isOpen) {
    const card = button.closest('.card');
    const modal = card.querySelector('.modal');
    modal.style.display = isOpen ? 'flex' : 'none';

    if (isOpen) {
      const cardTitle = card.querySelector('.card-title').textContent;
      const title = modal.querySelector('.modal-title');
      title.textContent = cardTitle;
    }
  }

  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => toggleModal(button, false));
  });

  window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = 'none';
      event.target.remove(); // 모달 제거
    }
  });
  
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
        modal.remove(); // 모달 제거
      });
    }
  });
});
