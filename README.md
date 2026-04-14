# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).


# 🍔 Food City E-Commerce SPA

## Project Overview

This project is a 'Single Page Application (SPA)' built using 'Vue 3, TypeScript, and Tailwind CSS'.
It simulates an online food store where users can browse products, search items, and manage a shopping cart.

---

## Live Demo

🔗 https://steady-panda-4e51a6.netlify.app/

---

## Tech Stack

* Vue 3 (Composition API)
* TypeScript
* Tailwind CSS
* Pinia (State Management)
* Vue Router
* Axios
* Vite
* DummyJSON API

---

## Features

* Product listing from API
* Search functionality
* Responsive design
* Shopping cart system
* Add to cart
* Remove from cart
* Cart item counter
* Persistent cart (localStorage)
* SPA Routing (Vue Router)

---

## Project Structure

```
src/
 ├── components/
 │     └── NavBar.vue
 ├── views/
 │     ├── HomeView.vue
 │     ├── CartView.vue
 │     └── ProductView.vue
 ├── router/
 │     └── index.ts
 ├── store/
 │     └── cart.ts
 ├── services/
 │     └── api.ts
 └── types/
       └── Product.ts
```

---

## Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/food-city-store.git
cd food-city-store
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run development server

```bash
npm run dev
```

### 4️⃣ Build for production

```bash
npm run build
```

---

## API Used

Data is fetched from:
    https://dummyjson.com/products

---

## State Management

Pinia is used to manage the shopping cart globally across components.

---

## Deployment

This project is deployed using 'Netlify'.

---

## Challenges Faced

* Tailwind CSS setup issues
* Pinia initialization errors
* Vue Router deployment (404 issue on refresh)

---

## Solutions

* Fixed Tailwind configuration
* Corrected Pinia lifecycle usage
* Added `_redirects` file for Netlify SPA routing

---

## Conclusion

This project demonstrates a modern frontend architecture using Vue 3 and TypeScript.
It successfully implements core e-commerce functionality with a clean and responsive UI.

---

