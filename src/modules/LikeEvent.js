import { postLikesImg } from './Involvementapi.js';

function SetLikes() {
  const LikeBtn = document.querySelectorAll('.bx-heart');

  LikeBtn.forEach((element) => {
    element.addEventListener('click', async (e) => {
      const ArtWorkId = e.target.dataset.artworkId;
      e.stopPropagation();
      postLikesImg(ArtWorkId);
      window.location.reload();
    });
  });
}

export default SetLikes;
