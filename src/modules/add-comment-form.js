const addFloatingLabels = () => {
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

export default addFloatingLabels;
