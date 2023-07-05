const involvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const involvementAPIid = 'Q1L23qalAk2Wt8OSXMKp';

function getAllLikes(){
    return fetch(`${involvementAPI}apps/${involvementAPIid}/likes/`)
    .then((response) => response.json())
    .then((data) => data ).catch((error) => console.log(error))
}

function postLikesImg(image_id){
    return fetch(`${involvementAPI}apps/${involvementAPIid}/likes/`, {
        method: 'POST',
        body: JSON.stringify({
          item_id: image_id,
        }),
        headers: {
          'content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => response.json())
      .then((data) => data ).catch((error) => console.log(error))
}

export  {getAllLikes , postLikesImg};