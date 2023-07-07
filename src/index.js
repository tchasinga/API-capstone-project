import './style/styles.css';
import './style/modal.css';
import initializeModal from './modules/details-modal.js';
import url from './modules/ApiLink.js';
import { getAllLikes } from './modules/Involvementapi.js';
import SetLikes from './modules/LikeEvent.js';

const displayResult = document.querySelector('.getArtWork');
const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

await (async () => {
  try {
    displayResult.innerHTML = 'Page is loading...';
    const response = await Promise.race([fetch(url), timeout(50000)]);
    const LikesData = await getAllLikes();
    if (!response) {
      throw new Error('Timeout!');
    }

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();

    const data = result.data.map((artwork) => {
      const likesForThisArtwork = LikesData.find((like) => like.item_id === artwork.image_id);
      if (!likesForThisArtwork) {
        return { ...artwork, numberOfLikes: 0 };
      }
      return { ...artwork, numberOfLikes: likesForThisArtwork.likes };
    });
    const resultHTML = data
      .map((getData) => {
        if (getData.image_id === null) {
          return null;
        }
        return `
          <div class="card" data-artwork-id="${getData.id}">
            <img src="https://www.artic.edu/iiif/2/${getData.image_id}/full/843,/0/default.jpg" alt="IdImage">
            <div class="pageDesign">
              <h2>${getData.title}</h2>
              <p><span class="likesCount">${getData.numberOfLikes}</span></p>
              <i class='bx bx-heart' data-artwork-id="${getData.image_id}" style='color:#d01212'></i>
            </div>
            <button>Comment..</button>
          </div>
        `;
      })
      .join('');
    displayResult.innerHTML = resultHTML;
  } catch (error) {
    displayResult.innerHTML = 'Something went wrong';
  }
})();

initializeModal();
SetLikes();
