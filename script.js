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

// Example of adding a review
addReview('John Doe', 'Facebook', 'Excellent support and design!', 5, 'customer3.jpg');
















const usedNumbers = new Set(); // Keep track of used mobile numbers

function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const gender = document.getElementById("gender").value;

    // Validate inputs
    if (!name || !phone || !gender) {
        alert("Please fill out all fields.");
        return;
    }

    // Check if the number is already used
    if (usedNumbers.has(phone)) {
        const warning = document.getElementById("warning");
        warning.textContent = "This mobile number has already been used!";
        warning.style.display = "block";
        return;
    }

    // Add phone number to the used set
    usedNumbers.add(phone);

    // Generate coupon code
    const couponCode = `ZORBA-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;

    // Display coupon code
    const couponDisplay = document.getElementById("coupon-code");
    couponDisplay.textContent = `Your coupon code is: ${couponCode}`;
    couponDisplay.style.display = "block";

    // Disable the submit button
    const submitButton = document.querySelector("button");
    submitButton.disabled = true;

    // Hide warning message (if any)
    const warning = document.getElementById("warning");
    warning.style.display = "none";

    // Send form data to the server (using fetch for AJAX)
    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('gender', gender);
    formData.append('couponCode', couponCode); // Include the generated coupon code

    fetch('submit.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        console.log(result); // Log response from the server if needed
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
