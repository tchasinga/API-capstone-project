const generateArtWorkDetailsHTML = (artworkData) => {
  const artworkImgUrl = `https://www.artic.edu/iiif/2/${artworkData.image_id}/full/843,/0/default.jpg`;
  let materialsUsed = 'N/A';
  if (artworkData.material_titles.length) {
    materialsUsed = artworkData.material_titles
      .map((material) => `<span>${material.split(' ')[0]}</span>`)
      .join('\n');
  }

  let exhibitionHistory = 'N/A';
  if (artworkData.exhibition_history.length) {
    exhibitionHistory = artworkData.exhibition_history
      .split('\n')
      .slice(0, 4)
      .map((item) => `<p>${item}</p>`)
      .join('\n');
  }

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
  
`;
};

export default generateArtWorkDetailsHTML;
