# Naming Conventions

This document defines the naming conventions for pages and components used in the application to ensure consistency and maintainability.

## General Rules
1. Use **camelCase** for variables, functions, and object properties.
2. Use **PascalCase** for component names and class names.
3. Use **kebab-case** for file and folder names.

---

## Pages Naming Conventions
1. Page files should be named using **PascalCase** and end with `Page` to indicate their purpose.
   - Example: `HomePage.js`, `LoginPage.js`
2. Page folder names should use **kebab-case** and match the page name without `Page`.
   - Example: `home/`, `login/`
3. All pages should be stored in the `src/pages` directory.

---

## Components Naming Conventions
1. Component files should use **PascalCase** and match the component name.
   - Example: `Button.js`, `UserProfileCard.js`
2. Component folder names should use **kebab-case** and match the component name.
   - Example: `button/`, `user-profile-card/`
3. Group reusable components in the `src/components` directory.
4. Components should be named clearly to indicate their purpose or functionality.

---

## CSS/SCSS Classes
1. Use the **BEM (Block Element Modifier)** methodology for naming classes.
   - Block: Represents a standalone entity (e.g., `button`).
   - Element: Represents a part of the block (e.g., `button__icon`).
   - Modifier: Represents a variant of the block or element (e.g., `button--primary`).

   **Example**:
   ```html
   <button class="button button--primary">
     <span class="button__icon"></span>
     Click Me
   </button>

---
   
## Tests Naming Conventions
1.Test files should use the same name as the component or page they test, followed by .test.js.
  -Example: HomePage.test.js, Button.test.js
2.Store page tests in the src/tests/pages directory.
3.Store component tests in the src/tests/components directory.

---

## Constants and Enums
1.Use UPPER_SNAKE_CASE for constants and enums.
  -Example: DEFAULT_TIMEOUT, USER_ROLES
  
---

## Selectors
1.Use camelCase for selectors.
2.Store selectors in the src/selectors directory and organize them by feature or page.
  -Example: cartSelectors.js, loginSelectors.js
