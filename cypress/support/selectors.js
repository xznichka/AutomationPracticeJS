// Resources Configuration for SauceDemo Testing
export const loginPage = {
  usernameInput: '#user-name', // Username input field
  passwordInput: '#password', // Password input field
  loginButton: '#login-button', // Login button
  errorMessage: '[data-test="error"]', // Error message container
};
export const inventoryPage = {
  productTitle: '.inventory_item_name', // Product title
  productPrice: '.inventory_item_price', // Product price
  addToCartButton: '.btn_inventory', // Add to cart button
  removeFromCartButton: '.btn_secondary', // Remove from cart button
  shoppingCart: '#shopping_cart_container', // Shopping cart icon
  productImage: '.inventory_item_img img', // Product image
  productDescription: '.inventory_item_desc', // Product description
};
export const cartPage = {
  cartItem: '.cart_item', // Cart item container
  itemName: '.inventory_item_name', // Item name in cart
  itemPrice: '.inventory_item_price', // Item price in cart
  removeButton: '.cart_button', // Remove button for an item
  checkoutButton: '#checkout', // Checkout button
  continueShoppingButton: '#continue-shopping', // Continue shopping button
};
export const checkoutStepOnePage = {
  firstNameInput: '#first-name', // First name input field
  lastNameInput: '#last-name', // Last name input field
  postalCodeInput: '#postal-code', // Postal code input field
  continueButton: '#continue', // Continue button
  cancelButton: '#cancel', // Cancel button
  errorMessage: '[data-test="error"]', // Error message container
};
export const checkoutStepTwoPage = {
  summaryInfo: '.summary_info', // Order summary container
  itemTotal: '.summary_subtotal_label', // Item total price
  taxAmount: '.summary_tax_label', // Tax amount
  totalAmount: '.summary_total_label', // Total price
  finishButton: '#finish', // Finish button
  cancelButton: '#cancel', // Cancel button
};
export const checkoutCompletePage = {
  thankYouMessage: '.complete-header', // Thank you message
  orderDispatchedMessage: '.complete-text', // Order dispatched message
  backHomeButton: '#back-to-products', // Back home button
};
export const commonSelectors = {
  headerLogo: '.app_logo', // Sauce Labs logo in the header
  burgerMenuButton: '#react-burger-menu-btn', // Burger menu button
  logoutLink: '#logout_sidebar_link', // Logout link in the burger menu
  closeMenuButton: '#react-burger-cross-btn', // Close menu button
  footer: '.footer', // Footer section
};
