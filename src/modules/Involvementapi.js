const involvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const involvementAPIid = 'G76rmGDabNdU1RkNCX4H';

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
      if (response.status === 404 || response.status === 400) {
        /*
         * This happens if there are no comments saved in the InvolvementAPI for the
         * artwork with the given ID. This is expected, and we should return an empty
         * array to show that there are no comments.
         */
        throw Error('There are no comments');
      }
      throw new Error('An error occurred');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error.message === 'There are no comments') {
      return [];
    }
    throw new Error(`Error fetching data ${error}`);
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
