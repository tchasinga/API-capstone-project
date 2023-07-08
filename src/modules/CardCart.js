const displayNumberOfCard = () => {
  const getNumberOfCard = document.querySelector('.CardNumber');
  const card = document.querySelectorAll('.card');
  getNumberOfCard.innerHTML = `( ${card.length} )`;
};

export default displayNumberOfCard;
