<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import type { Product } from "../types/Product";
import { getProducts } from "../services/api";
import { useCartStore } from "../store/cart";

const products = ref<Product[]>([]);
const search = ref("");

const cart = useCartStore();

onMounted(async () => {
  products.value = await getProducts();
});

const filteredProducts = computed(() => {
  return products.value.filter((p) =>
    p.title.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<template>
  <div class="p-6">
    <!-- Title -->
    <h1 class="text-2xl font-bold mb-4">🍔 Food City Products</h1>

    <!-- Search Box -->
    <input
      v-model="search"
      type="text"
      placeholder="Search food items..."
      class="border p-2 w-full mb-6 rounded"
    />

    <!-- Products Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="border p-4 rounded shadow bg-white"
      >
        <!-- Product Image -->
        <img
          :src="product.thumbnail"
          class="w-full h-40 object-cover rounded"
        />

        <!-- Product Title -->
        <h2 class="font-bold mt-2">
          {{ product.title }}
        </h2>

        <!-- Price -->
        <p class="text-green-600 font-bold">
          ${{ product.price }}
        </p>

        <!-- Add to Cart Button -->
        <button
          @click="cart.addToCart(product)"
          class="bg-green-500 text-white px-3 py-1 rounded mt-2 w-full hover:bg-green-600 transition"
        >
          Add to Cart 🛒
        </button>
      </div>

    </div>
  </div>
</template>