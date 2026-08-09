document.addEventListener('DOMContentLoaded', () => {
  const countElement = document.getElementById('results-count');
  
  // Find all product elements on the current page
  // (Replace '.product-card' with whatever class you use for your items)
  const productItems = document.querySelectorAll('.clothes-item'); 
  const count = productItems.length;

  if (countElement) {
    const label = count === 1 ? 'RESULT' : 'RESULTS';
    countElement.textContent = `${count} ${label}`;
  }
});