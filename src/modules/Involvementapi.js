const involvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const involvementAPIid = 'Q1L23qalAk2Wt8OSXMKp';

function getAllLikes() {
  return fetch(`${involvementAPI}apps/${involvementAPIid}/likes/`)
    .then((response) => response.json())
    .then((data) => data);
}

const getArtworkComments = async (imageId) => {
  const url = `${involvementAPI}apps/${involvementAPIid}/comments?item_id=${imageId}`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        return [];
      }
      throw new Error('An error occurred');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Unknown Error fetching data');
  }
};

function postLikesImg(imageId) {
  return fetch(`${involvementAPI}apps/${involvementAPIid}/likes/`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: imageId,
    }),
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) => data);
}

export { getAllLikes, getArtworkComments, postLikesImg };
