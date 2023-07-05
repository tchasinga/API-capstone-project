import './style/styles.css';
import './style/modal.css';
import initializeModal from './modules/details-modal.js';
import url from './modules/ApiLink.js';

const displayResult = document.querySelector('.getArtWork');
displayResult.innerHTML = 'Page is loading...';

const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

await (async () => {
  try {
    const response = await Promise.race([fetch(url), timeout(50000)]);
    if (!response) {
      throw new Error('Timeout!');
    }

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();

    displayResult.innerHTML = result.data
      .map((getData) => {
        if (getData.image_id === null) {
          return null;
        }
        return `
                <div class="card" data-artwork-id="${getData.id}">
                    <img src="https://www.artic.edu/iiif/2/${getData.image_id}/full/843,/0/default.jpg" alt="IdImage">
                    <div class="pageDesign">
                    <h2>${getData.title}</h2>
                    <i class='bx bx-heart' style='color:#d01212' ></i>
                   </div>
                    <button>Comment..</button>
                </div>
                `;
      })
      .join('');
  } catch (error) {
    displayResult.innerHTML = 'An error occurred while fetching data.';
  }
})();

initializeModal();
