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

const loading = ref(true);

onMounted(async () => {
  products.value = await getProducts();
  loading.value = false;
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
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="border p-4 rounded-xl shadow bg-white 
         transform hover:scale-105 hover:shadow-xl 
         transition duration-300"
      >
        <!-- Product Image -->
        <router-link :to="`/product/${product.id}`">
        <img
          :src="product.thumbnail"
          class="w-full h-40 object-cover rounded cursor-pointer"
         />
        </router-link>
        
        <!-- Product Title -->
         <router-link
         :to="`/product/${product.id}`"
         class="block font-bold mt-2 hover:underline"
   >
        {{ product.title }}
        </router-link>
        
        <!-- Price -->
        <p class="text-green-600 font-bold">
          ${{ product.price }}
        </p>

        <!-- Add to Cart Button -->
        <button
          @click="cart.addToCart(product); alert('Added to cart!')"
          class="bg-green-500 text-white px-3 py-2 rounded mt-2 w-full hover:bg-green-600 transition font-semibold"
        >
          Add to Cart 🛒
        </button>

        <div v-if="loading" class="text-center text-gray-500">
  Loading products...
</div>
      </div>

    </div>
  </div>
</template>