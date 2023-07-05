import './style/styles.css';
import url from './modules/ApiLink.js';

const displayResult = document.querySelector('.getArtWork');
const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const updateLikesCount = (index, likesCountElements) => {
  let likesCount = parseInt(likesCountElements[index].textContent, 10);
  likesCount += 1;
  likesCountElements[index].textContent = likesCount;
};

(async () => {
  try {
    displayResult.innerHTML = 'Page is loading...';
    const response = await Promise.race([fetch(url), timeout(50000)]);
    if (!response) {
      throw new Error('Timeout!');
    }

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();

    const resultHTML = result.data
      .map((getData) => {
        if (getData.image_id === null) {
          return null;
        }
        return `
          <div class="card">
            <img src="https://www.artic.edu/iiif/2/${getData.image_id}/full/843,/0/default.jpg" alt="IdImage">
            <div class="pageDesign">
              <h2>${getData.title}</h2>
              <p><span class="likesCount">0</span></p>
              <i class='bx bx-heart' style='color:#d01212'></i>
            </div>
            <button>Comment..</button>
          </div>
        `;
      })
      .join('');

    displayResult.innerHTML = resultHTML;

    const likeButtons = document.querySelectorAll('.bx-heart');
    const likesCountElements = document.getElementsByClassName('likesCount');

    likeButtons.forEach((likeButton, index) => {
      likeButton.addEventListener('click', () => {
        updateLikesCount(index, likesCountElements);
      });
    });
  } catch (error) {
    displayResult.innerHTML = 'An error occurred while fetching data.';
  }
})();
