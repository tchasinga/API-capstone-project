const involvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const involvementAPIid = 'G76rmGDabNdU1RkNCX4H';

function getAllLikes() {
  return fetch(`${involvementAPI}apps/${involvementAPIid}/likes/`)
    .then((response) => response.json())
    .then((data) => data);
}

const getArtworkComments = async (imageId) => {
  const url = `${involvementAPI}apps/${involvementAPIid}/comments?item_id=${imageId}`;
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      if (response.status === 404 || response.status === 400) {
        /*
         * This happens if there are no comments saved in the InvolvementAPI for the
         * artwork with the given ID. This is expected, and we should return an empty
         * array to show that there are no comments.
         */
        return [];
      }

      throw new Error(
        `Error getting artwork comments (status code: ${response.status})`,
      );
    })
    .catch((error) => {
      throw new Error(`Network error fetching comments ${error}`);
    });
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

const postNewComment = async ({ artworkId, username, comment }) => {
  const url = `${involvementAPI}apps/${involvementAPIid}/comments`;
  const requestBody = {
    item_id: artworkId,
    username,
    comment,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });
    if (!response.ok) {
      throw new Error(
        `Error posting comment: Status code ${response.status} returned`,
      );
    }
    const data = await response.text();
    return { success: data === 'Created' };
  } catch (error) {
    throw new Error(`Unknown Error fetching data ${error}`);
  }
};

export {
  getAllLikes,
  getArtworkComments,
  postLikesImg,
  postNewComment,
};
