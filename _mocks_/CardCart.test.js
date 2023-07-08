// Import the function to be tested
import displayNumberOfCard from '../src/modules/CardCart.js';

// Mock the required DOM elements
document.body.innerHTML = `
  <div class="CardNumber"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
`;

describe('displayNumberOfCard', () => {
  it('should update the card count correctly', () => {
    // Call the function
    displayNumberOfCard();

    // Get the updated card count
    const cardNumber = document.querySelector('.CardNumber').innerHTML;

    // Expect the card count to be "(3)"
    expect(cardNumber).toBe('( 3 )');
  });

  it('should handle empty card list', () => {
    // Remove all the card elements
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.parentNode.removeChild(card));

    // Call the function
    displayNumberOfCard();

    // Get the updated card count
    const cardNumber = document.querySelector('.CardNumber').innerHTML;

    // Expect the card count to be "(0)"
    expect(cardNumber).toBe('( 0 )');
  });

  it('should handle large number of cards', () => {
    // Add 100 card elements
    for (let i = 0; i < 100; i++) {
      const newCard = document.createElement('div');
      newCard.classList.add('card');
      document.body.appendChild(newCard);
    }

    // Call the function
    displayNumberOfCard();

    // Get the updated card count
    const cardNumber = document.querySelector('.CardNumber').innerHTML;

    // Expect the card count to be "(100)"
    expect(cardNumber).toBe('( 100 )');
  });
});
