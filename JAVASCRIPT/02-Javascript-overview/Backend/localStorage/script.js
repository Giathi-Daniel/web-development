// check if the 'myCredits' value exists in localStorage
document.addEventListener('DOMContentLoaded', () => {
  let myCredits = localStorage.getItem('myCredits');
  
  // If myCredits is not found, default it to 0
  if (!myCredits) {
    myCredits = 0;
  }

  // Display the credits in the page
  document.getElementById('creditsDisplay').textContent = myCredits;

  // Save 100 credits to localStorage when the save button is clicked
  document.getElementById('saveButton').addEventListener('click', () => {
    localStorage.setItem('myCredits', 100);
    document.getElementById('creditsDisplay').textContent = 100;
    console.log('Credits saved to localStorage');
  });

  // Clear the credits from localStorage when the clear button is clicked
  document.getElementById('clearButton').addEventListener('click', () => {
    localStorage.removeItem('myCredits');
    document.getElementById('creditsDisplay').textContent = 0;
    console.log('Credits cleared from localStorage');
  });
});
