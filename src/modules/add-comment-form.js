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
  addCommentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { artworkId } = addCommentForm.dataset;
    const data = new FormData(addCommentForm);
    const username = data.get('username');
    const comment = data.get('comment');

    try {
      const { success } = await postNewComment({
        artworkId,
        username,
        comment,
      });
      if (success) {
        // TODO: Tell user that the comment was saved successfully
        addCommentForm.reset();
        window.location.reload();
      }
    } catch (e) {
      // TODO: Tell user that the comment was NOT saved successfully, try again later
    }
  });
};
