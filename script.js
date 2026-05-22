const toggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.nav-content');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

document.querySelectorAll('.nav-links').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('active'));
});


  // Quantity Selector
  const quantityValue = document.querySelector('.quantity-value');
  const minusBtn = document.querySelector('.minus-btn');
  const plusBtn = document.querySelector('.plus-btn');

  let quantity = 2;

  minusBtn.addEventListener('click', function () {
    if (quantity > 1) {
      quantity--;
      quantityValue.textContent = quantity;
      animateQuantityChange();
    }
  });

  plusBtn.addEventListener('click', function () {
    quantity++;
    quantityValue.textContent = quantity;
    animateQuantityChange();
  });

  function animateQuantityChange() {
    quantityValue.style.transform = 'scale(1.2)';
    setTimeout(() => {
      quantityValue.style.transform = 'scale(1)';
    }, 200);
  }

  // Add to Cart Functionality
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const buyNowBtn = document.querySelector('.buy-now-btn');
  const cartCount = document.querySelector('.cart-count');
  let cartItems = 0;

  // Helper function for adding to cart
  function addToCart(amount) {
    cartItems += amount;
    cartCount.textContent = cartItems;
  }

  // Buy Now Button
  buyNowBtn.addEventListener('click', function () {
    addToCart(quantity);

    // Visual feedback
    const originalHTML = this.innerHTML;
    this.innerHTML = '<i class="fas fa-check"></i> Added to Cart';
    this.style.backgroundColor = '#4CAF50';

    setTimeout(() => {
      this.innerHTML = originalHTML;
      this.style.backgroundColor = '';
    }, 2000);
  });

  // Add to Cart Buttons
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
      addToCart(1);

      // Visual feedback
      const originalHTML = this.innerHTML;
      this.innerHTML = '<i class="fas fa-check"></i> Added';
      this.style.backgroundColor = '#4CAF50';

      setTimeout(() => {
        this.innerHTML = originalHTML;
        this.style.backgroundColor = '';
      }, 2000);
    });
  });

  // Newsletter Form
  const newsletterForm = document.querySelector('.newsletter-form');

  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const emailInput = this.querySelector('.newsletter-input');

    if (emailInput.value && emailInput.value.includes('@')) {
      // Simple validation
      emailInput.value = '';
      emailInput.placeholder = 'Thank you for subscribing!';

      // Reset placeholder after 3 seconds
      setTimeout(() => {
        emailInput.placeholder = 'Enter your email address';
      }, 3000);
    }
  });

  // Category Image Hover Effects
  const categoryImages = document.querySelectorAll('.category-image-container');

  categoryImages.forEach(container => {
    container.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.1) translateX(-5px)';
    });

    container.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1) translateX(0)';
    });
  });