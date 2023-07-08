import countComments from "../src/modules/comments-counter.js";

// Mock implementations
document.querySelectorAll = jest.fn();
document.getElementById = jest.fn(() => {
  const element = document.createElement('span');
  element.innerText = '0'; // Set the innerText value to '0'
  return element;
});

// Tests for countComments function
describe('countComments', () => {
    it('test_no_comments', () => {
    document.body.innerHTML = '<div></div>';
    countComments();
    const commentCountSpan = document.getElementById('comment-count');
    expect(commentCountSpan.innerText).toBe('0');
  });
});
