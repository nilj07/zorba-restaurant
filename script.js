let currentIndex = 0;

function moveSlide(direction) {
  const cards = document.querySelector('.cards');
  const totalCards = document.querySelectorAll('.card1').length;
  const visibleCards = 3; // Number of visible cards
  const cardWidth = 45 + 2; // Card width (45vh) + margin (2vh)

  // Calculate the maximum index we can slide to
  const maxIndex = totalCards - visibleCards;

  if (direction === 'right') {
    currentIndex = Math.min(currentIndex + 1, maxIndex); // Prevent sliding past last visible set
  } else if (direction === 'left') {
    currentIndex = Math.max(currentIndex - 1, 0); // Prevent sliding past the first set
  }

  // Calculate offset in `vh` for translation
  const offset = -(currentIndex * cardWidth);
  cards.style.transform = `translateX(${offset}vh)`; // Apply sliding effect
}






function toggleMenu(menuId) {
  const menu = document.getElementById(menuId);
  const category = menu.previousElementSibling;

  if (menu.classList.contains('expanded')) {
      menu.classList.remove('expanded'); // Collapse the submenu
      category.classList.add('collapsed');
  } else {
      menu.classList.add('expanded'); // Expand the submenu
      category.classList.remove('collapsed');
  }
}
function scrollToMenu() {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}





const reviewsContainer = document.querySelector('.reviews-container');

function addReview(name, company, reviewText, rating, profileImage) {
    const reviewCard = document.createElement('div');
    reviewCard.classList.add('review-card');
    reviewCard.innerHTML = `
        <div class="profile">
            <img src="${profileImage}" alt="${name}">
            <div class="details">
                <h4>${name}</h4>
                <p>${company}</p>
            </div>
        </div>
        <p class="review-text">${reviewText}</p>
        <div class="rating">
            <span>${'⭐'.repeat(rating)}</span>
        </div>
    `;
    reviewsContainer.appendChild(reviewCard);
}


