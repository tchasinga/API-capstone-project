import './style/styles.css';
import url from './modules/ApiLink.js';
import { getAllLikes } from './modules/Involvementapi.js';


const displayResult = document.querySelector('.getArtWork');
const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));



(async () => {
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
      const likesForThisArtwork = LikesData.find(like => like.item_id === artwork.image_id)
      if(!likesForThisArtwork){
          return {...artwork, numberOfLikes: 0}
      }
      return {...artwork, numberOfLikes: likesForThisArtwork.likes}
  })
    console.log(data)
    const resultHTML = data
      .map((getData) => {
        if (getData.image_id === null) {
          return null;
        }
        return `
          <div class="card">
            <img src="https://www.artic.edu/iiif/2/${getData.image_id}/full/843,/0/default.jpg" alt="IdImage">
            <div class="pageDesign">
              <h2>${getData.title}</h2>
              <p><span class="likesCount">${getData.numberOfLikes}</span></p>
              <i class='bx bx-heart' style='color:#d01212'></i>
            </div>
            <button>Comment..</button>
          </div>
        `;
      })
      .join('');
      console.log(result);
    displayResult.innerHTML = resultHTML;

  } catch (error) {
   console.log(error)
  }
})();
