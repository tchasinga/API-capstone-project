const countComments = () => {
  const commentCountSpan = document.getElementById('comment-count');
  const allComments = document.querySelectorAll('.modal__artwork__comment');
  const numberOfComments = allComments ? allComments.length : 0;

  if (commentCountSpan) {
    commentCountSpan.innerText = numberOfComments;
  }
};

export default countComments;
