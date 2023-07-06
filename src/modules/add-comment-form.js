import { postNewComment } from './Involvementapi.js';

// Add floating labels
export const addFloatingLabels = () => {
  const inputs = document.querySelectorAll('.add-comment__form__input');

  inputs.forEach((input) => {
    input.addEventListener('focus', (e) => {
      const span = e.target.nextElementSibling;
      span.classList.add('float-label');
    });

    input.addEventListener('blur', (e) => {
      if (e.target.value.trim() === '') {
        const span = e.target.nextElementSibling;
        span.classList.remove('float-label');
      }
    });
  });
};

export const initializeFormEventHandlers = () => {
  // Add form submition event handler
  const addCommentForm = document.getElementById('add-comment__form');
  addCommentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    postNewComment({
      artworkId: '26588b76-efd3-7c7c-2540-8d17ebb8b5b0',
      username: 'Bill',
      comment: 'No, it\'s most likely a cow',
    });
  });
};
