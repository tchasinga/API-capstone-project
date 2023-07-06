const generateArtWorkDetailsHTML = (artworkData, comments) => {
  const artworkImgUrl = `https://www.artic.edu/iiif/2/${artworkData.image_id}/full/843,/0/default.jpg`;
  let materialsUsed = 'N/A';
  if (artworkData.material_titles.length) {
    materialsUsed = artworkData.material_titles
      .map((material) => `<span>${material.split(' ')[0]}</span>`)
      .join('\n');
  }

  let exhibitionHistory = 'N/A';
  if (artworkData.exhibition_history?.length) {
    exhibitionHistory = artworkData.exhibition_history
      .split('\n')
      .slice(0, 4)
      .map((item) => `<p>${item}</p>`)
      .join('\n');
  }

  let commentsHTML = '<p>There are no comments for this artwork.</p>';

  if (comments.length) {
    const commentsArr = [];
    comments.forEach((commentData) => {
      const { username, creation_date: creationDate, comment } = commentData;
      const html = `
        <div class="modal__artwork__comment"/>
          <div class="modal__artwork__comment__header">
            <div class="modal__artwork__comment__avatar"><span>${username[0]}</span></div>
            <span class="modal__artwork__comment__username">${username}</span>
            <div class="modal__artwork__comment__date">on <span>${creationDate}</span></div>
          </div>
          <p class="modal__artwork__comment__body">${comment}</p>
        </div>
      `;
      commentsArr.push(html);
    });

    commentsHTML = commentsArr.join('\n');
  }

  const addCommentForm = `
    <form class="add-comment__form" id="add-comment__form">
        <label class="add-comment__form__label" for="username">
          <input
            class="add-comment__form__input"
            type="text"
            id="username"
            name="username"
            required
          />
          <span>Your name</span>
        </label>
        <label class="add-comment__form__label" for="comment">
          <input
            class="add-comment__form__input"
            type="text"
            id="comment"
            name="comment"
            required
          />
          <span>Your insights</span>
        </label>
        <div class="add-comment__form__errors" id="add-comment__form__errors">
            <span>Username is required.</span>
            <span>Please provide a comment.</span>
        </div>
        <button class="add-comment__form__btn" type="submit">Comment</button>
      </form>
  `;

  return `
  <div class="modal__header">
    <h2>${artworkData.title}</h2>
    <p>By ${artworkData.artist_title}</p>
  </div>
  <img class="modal__artwork" src="${artworkImgUrl}" alt="${artworkData.title}" >
  <div class="modal__artwork__stats">
    <div class="modal__artwork__stat">
      <span class="modal__artwork__stat__title">Place of Origin:</span>
      <span>${artworkData.place_of_origin}</span>
    </div>
    <div class="modal__artwork__stat">
      <span class="modal__artwork__stat__title">Year:</span>
      <span>${artworkData.date_end}</span>
    </div>
    <div class="modal__artwork__stat">
      <span class="modal__artwork__stat__title">Materials:</span>
      <div>${materialsUsed}</div>
    </div>
  </div>
  <div class="modal__exhibition-history">
    <span>Exhibition History:</span>
    <div class="modal__exhibition-history__item">${exhibitionHistory}</div>
  </div>
  <div class="modal__artwork__comments">
    <h3 class="modal__artwork__comments__header">Comments (${comments.length})</h3>
    ${commentsHTML}
    <div class="add-comment-sec">
      <h3>Add a comment</h3>
      ${addCommentForm}
    </div>
  </div>
`;
};

export default generateArtWorkDetailsHTML;
