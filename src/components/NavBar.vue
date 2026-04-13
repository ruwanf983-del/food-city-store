<script setup lang="ts">
import { useCartStore } from "../store/cart";

const cart = useCartStore();
</script>

<template>
  <nav class="bg-green-600 text-white px-6 py-4 flex justify-between items-center shadow-md">

    <!-- Logo -->
    <h1 class="font-bold text-xl tracking-wide">
      🍔 Food City Store
    </h1>

    <!-- Navigation -->
    <div class="flex items-center gap-4">

      <router-link
        to="/"
        class="hover:underline"
      >
        Home
      </router-link>

      <router-link
        to="/cart"
        class="bg-white text-green-600 px-3 py-1 rounded font-bold hover:bg-gray-100 transition"
      >
        🛒 {{ cart.items.length }}
      </router-link>

    </div>

  </nav>
</template>