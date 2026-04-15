# Food City Store (Vue 3 E-Commerce SPA)

A modern **single-page e-commerce application** built using:

- Vue 3 (Composition API)
- TypeScript
- Pinia (State Management)
- Vue Router
- Tailwind CSS
- DummyJSON API



## Features

### Product Features
- Product listing from API
- Product details page
- Add to cart functionality
- Quantity increase/decrease
- Remove items from cart

### Cart System
- Add / Remove products
- Persist cart using LocalStorage
- Total price calculation
- Clear cart feature
- Proceed to checkout flow

### Checkout System
- Customer details form (Name, Phone, Address)
- Order preview before confirmation
- Order confirmation page
- Ordered items summary
- Total price display

### Dark Mode
- Toggle dark/light mode
- Tailwind CSS dark mode support
- UI theme switching

### Authentication (UI Ready)
- Login page UI
- Logout button (UI structure)

---

## Tech Stack

- Vue 3
- TypeScript
- Pinia
- Vue Router
- Tailwind CSS
- Axios
- DummyJSON API

---

## Project Setup

### 1. Install dependencies
npm install

### 2. Run development server
npm run dev

### 3. Build for production
npm run build

# Project Structure

src/
 ├── assets/
 ├── components/
 ├── views/
 │    ├── HomeView.vue
 │    ├── ProductView.vue
 │    ├── CartView.vue
 │    ├── CheckoutView.vue
 │    ├── Login.vue
 ├── store/
 │    └── cart.ts
 ├── router/
 │    └── index.ts
 ├── types/
 ├── main.ts

# How Checkout Works
     1. Add products to cart
     2. Go to Cart page
     3. Click Proceed to Checkout
     4. Fill customer details
     5. Click Place Order
     6. View order summary with:
     7. Customer details
     8. Ordered items
     9. Total price

# API Used
https://dummyjson.com/products

# Future Improvements
    - Firebase Authentication
    - Real payment integration
    - Order history page
    - Admin dashboard
    - Backend API (Node.js + MongoDB)