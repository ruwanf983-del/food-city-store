<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { useCartStore } from "../store/cart";

const route = useRoute();
const product = ref<any>(null);
const loading = ref(true);

const cart = useCartStore();

// ✅ Safe add to cart
function addItem() {
  console.log("ADDING:", product.value);
  cart.addToCart(product.value);
  console.log("CART NOW:", cart.items);
}

onMounted(async () => {
  try {
    const id = route.params.id;

    const res = await axios.get(
      `https://dummyjson.com/products/${id}`
    );

    product.value = res.data;
  } catch (error) {
    console.error("Failed to load product:", error);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="p-6 max-w-4xl mx-auto">

    <!-- LOADING -->
    <div v-if="loading" class="text-center text-gray-500">
      Loading product...
    </div>

    <!-- PRODUCT NOT FOUND -->
    <div v-else-if="!product" class="text-center text-red-500">
      Product not found
    </div>

    <!-- PRODUCT DETAILS -->
    <div v-else class="grid md:grid-cols-2 gap-6">

      <!-- IMAGE -->
      <img
        :src="product.thumbnail"
        alt="Product Image"
        class="w-full rounded"
      />

      <!-- DETAILS -->
      <div>
        <h1 class="text-3xl font-bold mb-2">
          {{ product.title }}
        </h1>

        <p class="text-gray-600 mb-2">
          {{ product.description }}
        </p>

        <p class="text-green-600 text-2xl font-bold mb-4">
          ${{ product.price }}
        </p>

        <p class="mb-2">
          ⭐ Rating: {{ product.rating }}
        </p>

        <p class="mb-4">
          🏷️ Category: {{ product.category }}
        </p>

        <!-- ADD TO CART -->
        <button
          @click="addItem"
          :disabled="!product"
          class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50"
        >
          Add to Cart 🛒
        </button>
      </div>

    </div>
  </div>
</template>