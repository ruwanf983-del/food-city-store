<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
const product = ref<any>(null);

onMounted(async () => {
  const id = route.params.id;

  const res = await axios.get(`https://dummyjson.com/products/${id}`);
  product.value = res.data;
});
</script>

<template>
  <div class="p-6 max-w-4xl mx-auto" v-if="product">

    <div class="grid md:grid-cols-2 gap-6">

      <!-- IMAGE -->
      <img :src="product.thumbnail" alt="Product Image" />

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

        <p class="mb-2">
          🏷️ Category: {{ product.category }}
        </p>

        <button
          class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add to Cart 🛒
        </button>
      </div>

    </div>

  </div>
</template>