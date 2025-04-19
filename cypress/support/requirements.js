export const requirements = {
  // Timeouts
  timeout: 5000, // Default timeout for Cypress commands in milliseconds
  pageLoadTimeout: 10000, // Timeout for page load

  // User roles for tests
  users: {
    standardUser: {
      username: 'standard_user',
      password: 'secret_sauce',
    },
    lockedOutUser: {
      username: 'locked_out_user',
      password: 'secret_sauce',
    },
    problemUser: {
      username: 'problem_user',
      password: 'secret_sauce',
    },
    performanceGlitchUser: {
      username: 'performance_glitch_user',
      password: 'secret_sauce',
    },
  },

  // Product information
  productCount: 6, // Expected number of products on the inventory page

  // Checkout
  checkout: {
    taxRate: 0.08, // Example tax rate for calculating total
  },

  // URLs (optional if not using a separate `urls.js`)
  urls: {
    baseUrl: 'https://www.saucedemo.com',
    loginPage: '/',
    inventoryPage: '/inventory.html',
    cartPage: '/cart.html',
    checkoutStepOne: '/checkout-step-one.html',
    checkoutStepTwo: '/checkout-step-two.html',
    checkoutComplete: '/checkout-complete.html',
  },

  // Error messages
  errorMessages: {
    login: {
      usernameRequired: 'Epic sadface: Username is required',
      passwordRequired: 'Epic sadface: Password is required',
      lockedOut: 'Epic sadface: Sorry, this user has been locked out.',
    },
    checkout: {
      firstNameRequired: 'Error: First Name is required',
      lastNameRequired: 'Error: Last Name is required',
      postalCodeRequired: 'Error: Postal Code is required',
    },
  },

  // Common text
  commonText: {
    thankYouMessage: 'THANK YOU FOR YOUR ORDER',
    orderDispatchedMessage:
      'Your order has been dispatched, and will arrive just as fast as the pony can get there!',
  },
};
