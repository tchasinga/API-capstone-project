import fetchSingleArtworkDetails from './artworkAPI.js';
import generateArtWorkDetailsHTML from './html-generators.js';

const initializeModal = () => {
  const artWorkCards = document.querySelectorAll('.card');
  const overlay = document.getElementById('overlay');
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal__body');
  const modalCloseIcon = document.getElementById('modal__close-icon');

  // Handle opening of modal
  artWorkCards.forEach((card) => card.addEventListener('click', async () => {
    const { artworkId } = card.dataset;
    overlay.classList.add('open');
    modal.classList.add('open');
    const artworkData = await fetchSingleArtworkDetails(artworkId);
    modalBody.innerHTML = generateArtWorkDetailsHTML(artworkData);
    document.body.style.overflow = 'hidden';
  }));

  // Handle closing of modal
  const handleModalClose = () => {
    overlay.classList.remove('open');
    modal.classList.remove('open');
    modalBody.innerHTML = '';
    document.body.style.overflow = 'auto';
  };

  overlay.addEventListener('click', handleModalClose);
  modalCloseIcon.addEventListener('click', handleModalClose);
};

export default initializeModal;