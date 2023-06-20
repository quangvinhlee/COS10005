document.addEventListener("DOMContentLoaded", function() {
  const menuLink = document.getElementById("menu-link1");
  const menuLink1 = document.getElementById("menu-link");
  const menuPopup = document.getElementById("menu-popup");
  const menuCloseButton = document.getElementById("menu-close-button");
  const body = document.querySelector("body");
  
  // Function to show the menu popup
  function showMenuPopup() {
    menuPopup.style.display = "block";
    body.style.overflow = "hidden";
  }

  // Function to hide the menu popup
  function hideMenuPopup() {
    menuPopup.style.display = "none";
    body.style.overflow = "auto";
  }

  // Event handler for menu button click
  function handleMenuButtonClick(event) {
    event.preventDefault();
    showMenuPopup();
  }

  // Event handler for menu close button click
  function handleMenuCloseButtonClick(event) {
    event.preventDefault();
    hideMenuPopup();
  }

  // Add event listeners to menu elements
  menuLink.addEventListener("click", handleMenuButtonClick);
  menuLink1.addEventListener("click", handleMenuButtonClick);
  menuCloseButton.addEventListener("click", handleMenuCloseButtonClick);
  
  // Check if menu popup should be shown
  if (shouldShowMenuPopup()) {
    showMenuPopup();
  }
});

document.addEventListener("DOMContentLoaded", function() { 
  var slideIndex = 0;
  var slider = document.querySelector(".slider");
  var slides = slider.getElementsByTagName("img");

  if (slides.length === 0) {
    console.error("No images found in slider");
  }

  slides[slideIndex].classList.add("active");
  slides[slideIndex].nextElementSibling.classList.add("active");

  // Automatically move the slider every 2500ms
  setInterval(function() {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
      slides[i].nextElementSibling.classList.remove("active");
    }
    slides[slideIndex].classList.add("active");
    slides[slideIndex].nextElementSibling.classList.add("active");
    console.log("Slider moved to image " + (slideIndex + 1));
  }, 2500);
});

document.addEventListener("DOMContentLoaded", function() { 
  const loginButton = document.getElementById('login-button');
  const loginPopup = document.getElementById('login-popup');
  const loginForm = document.getElementById('login-form');
  const loginCloseButton = document.getElementById('close-button');

  // Event listener for login button click
  loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    loginPopup.style.display = 'block';
    body.style.overflow= "hidden";
  });

  // Event listener for login close button click
  loginCloseButton.addEventListener('click', (event) => {
    loginPopup.style.display = 'none';
    body.style.overflow= "auto";
  });

  // Event listener for login form submission
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    loginPopup.style.display = 'none';
  });
});

// registration-validation.js
document.addEventListener('DOMContentLoaded', function() {
  var registrationForm = document.getElementById('registration-form');
  
  // Event listener for registration form submission
  registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the form input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var email = document.getElementById('email').value;
    var icecream = document.getElementById('icecream').value;
    var pattern = /^[a-zA-Z ]+$/;
    
    // Perform validation
    var errors = [];

    if (username.trim() === '') {
      errors.push('Please enter a username.');
    } else if (!username.match(pattern)) {
      errors.push('Username contains invalid characters.');
    }

    if (password.trim() === '') {
      errors.push('Please enter a password.');
    } else if (password.length < 9) {
      errors.push('Password must be at least 9 characters long.');
    }

    if (confirmPassword.trim() === '') {
      errors.push('Please confirm your password.');
    } else if (confirmPassword !== password) {
      errors.push('Passwords do not match.');
    }

    if (!gender) {
      errors.push('Please select your gender.');
    }

    if (email.trim() === '') {
      errors.push('Please enter an email.');
    }

    if (icecream === '') {
      errors.push('Please select your favorite ice cream.');
    }

    // Display errors or submit the form
    if (errors.length > 0) {
      var errorString = errors.join('\n');
      alert(errorString);
    } else {
      registrationForm.submit();
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var sameAsDeliveryAddress = document.getElementById('same-as-delivery');
  var billingAddress = document.getElementById('billing-address');
  var deliveryAddress = document.getElementById('delivery-address');
  var paymentMethod = document.getElementById('payment-method');
  var creditCard = document.getElementById('credit-card');
  var contactNumber = document.getElementById('contact-number');
  var email = document.getElementById('email');
  var deliveryOption = document.getElementById('delivery-option');
  var deliveryAddressLabel = document.getElementById('delivery-address-label');
  var billingAddressLabel = document.getElementById('billing-address-label');
  var sameAsDeliveryAddressLabel = document.getElementById('same-as-delivery-label');
  var postcode = document.getElementById('postcode-address');
  var postcodeLabel = document.getElementById('postcode-address-label');
  var paymentOption = document.getElementById('payment-option');
  var paymentMethodLabel = document.getElementById('payment-method-label');
  var creditCardLabel = document.getElementById('credit-card-label');
  
  // Event listener for sameAsDeliveryAddress checkbox change
  sameAsDeliveryAddress.addEventListener('change', function() {
    if (sameAsDeliveryAddress.checked) {
      if (deliveryAddress.value === '') {
        alert('Please enter your delivery address first');
        sameAsDeliveryAddress.checked = false;
      } else {
        billingAddress.value = deliveryAddress.value;
      }
    } else {
      billingAddress.value = '';
    }
  });

  // Event listener for paymentMethod dropdown change
  paymentMethod.addEventListener('change', function() {
    var selectedCard = paymentMethod.value;
    var maxLength = 16; // Default maximum length for Visa and MasterCard
    var placeholder = 'Enter 16 digits';

    if (selectedCard === 'American Express') {
      maxLength = 15;
      placeholder = 'Enter 15 digits';
    }

    creditCard.maxLength = maxLength;
    creditCard.placeholder = placeholder;
  });

  // Event listener for deliveryOption dropdown change
  deliveryOption.addEventListener('change', function() {
    if (deliveryOption.value === 'pickup') {
      deliveryAddress.style.display = 'none';
      billingAddress.style.display = 'none';
      deliveryAddressLabel.style.display = 'none';
      billingAddressLabel.style.display = 'none';
      sameAsDeliveryAddressLabel.style.display = 'none';
      sameAsDeliveryAddress.style.display = 'none';
      postcode.style.display = 'none';
      postcodeLabel.style.display = 'none';
    } else {
      deliveryAddress.style.display = 'block';
      billingAddress.style.display = 'block';
      deliveryAddressLabel.style.display = 'block';
      billingAddressLabel.style.display = 'block';
      sameAsDeliveryAddressLabel.style.display = 'block';
      sameAsDeliveryAddress.style.display = 'block';
      postcode.style.display = 'block';
      postcodeLabel.style.display = 'block';
    }
  });

  // Event listener for paymentOption dropdown change
  paymentOption.addEventListener('change', function() {
    if(paymentOption.value === 'pickup'){
      paymentMethod.style.display = 'none';
      creditCard.style.display = 'none';
      paymentMethodLabel.style.display = 'none';
      creditCardLabel.style.display = 'none';
    } else {
      paymentMethod.style.display = 'block';
      creditCard.style.display = 'block';
      paymentMethodLabel.style.display = 'block';
      creditCardLabel.style.display = 'block';
    }
  })

  var orderForm = document.getElementById('order-form');
  orderForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var pattern1 = /^\d{4}$/;
    var selectedCard = paymentMethod.value;
    var contactNumberPattern = /^\d{10}$/;
    var postcode = document.getElementById('postcode-address').value;

    var errors = [];

    if (deliveryOption.value === 'pickup') {
      deliveryAddress.style.display = 'none';
      billingAddress.style.display = 'none';
    } else {
      if (deliveryAddress.value.trim() === '') {
        errors.push('Please enter your delivery address.');
      }
      if (billingAddress.value.trim() === '') {
        errors.push('Please enter your billing address.');
      }
      if (!postcode.match(pattern1)) {
        errors.push('Postcode must be a 4-digit number.');
      }
    }

    if (contactNumber.value.trim() === '') {
      errors.push('Please enter your contact number.');
    } else if (!contactNumber.value.match(contactNumberPattern)) {
      errors.push('Contact number should be a 10-digit number.');
    }
    
    if (email.value.trim() === '') {
      errors.push('Please enter your email.');
    }

    if (paymentOption.value === 'pickup'){
      paymentMethod.style.display = 'none';
      creditCard.style.display = 'none';
      paymentMethodLabel.style.display = 'none';
      creditCardLabel.style.display = 'none';
    } else {
      if (selectedCard === '') {
        errors.push('Please select a card');
      } else {
        if (!creditCard.validity.valid) {
          errors.push('Please enter a valid credit card number');
        } else if (creditCard.value.length < creditCard.maxLength) {
          errors.push('Credit card number should be ' + creditCard.maxLength + ' digits');
        }
      }
    }

    if (errors.length > 0) {
      var errorString = errors.join('\n');
      alert(errorString);
    } else {
      orderForm.submit();
    }
  });
});
