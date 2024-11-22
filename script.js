

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchFunction();
        }
    });
});

function searchFunction() {
    const query = document.getElementById('searchInput').value;
    // Implement your search functionality here
    console.log(`Searching for: ${query}`);
}

// script.js
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.p').forEach(item => {
        item.addEventListener('click', event => {
            const productId = event.target.getAttribute('data-product-id');
            window.location.href = `product-details.html?productId=${productId}`;
        });
    });
});

function initializeCartCount() {
    const cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
    const cartBadges = document.querySelectorAll('.cart .badge');
    cartBadges.forEach(badge => {
        badge.textContent = cartCount;
    });
}

// Function to update the cart count in localStorage and update badges
function addToCart() {
    let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
    cartCount++;
    localStorage.setItem('cartCount', cartCount);
    updateCartBadge(cartCount);
}

// Function to update cart badge text content
function updateCartBadge(count) {
    const cartBadges = document.querySelectorAll('.cart .badge');
    cartBadges.forEach(badge => {
        badge.textContent = count;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const openProfileImg = document.getElementById('openProfileImg');
    const closeProfileBtn = document.getElementById('closeProfileBtn');
    const profileSlider = document.getElementById('profileSlider');

    // Open profile slider when profile image is clicked
    openProfileImg.addEventListener('click', function() {
        profileSlider.classList.add('active');
    });

    // Close profile slider when close button is clicked
    closeProfileBtn.addEventListener('click', function() {
        profileSlider.classList.remove('active');
    });
});



document.addEventListener('DOMContentLoaded', () => {
    fetch('navigation.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
            initializeCartCount(); // Initialize cart count after navigation is loaded
        });
});

          document.addEventListener('DOMContentLoaded', () => {
              document.querySelector('.sign').addEventListener('click', () => {
                  const signInModal = new bootstrap.Modal(document.getElementById('signInModal'));
                  signInModal.show();
              });
          });
