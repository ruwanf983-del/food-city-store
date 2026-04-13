<script setup lang="ts">
import { computed } from "vue";
import { useCartStore } from "../store/cart";

const cart = useCartStore();

const totalPrice = computed(() => {
  return cart.items.reduce((sum, item) => sum + item.price, 0);
});
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">🛒 Your Cart</h1>

    <!-- Empty Cart -->
    <div v-if="cart.items.length === 0" class="text-center text-gray-500 mt-10">
  <p class="text-xl">🛒 Your cart is empty</p>
  <router-link to="/" class="text-green-600 underline">
    Go shopping →
  </router-link>
</div>

    <!-- Cart Items -->
    <div v-else class="space-y-4">
      
      <div
        v-for="item in cart.items"
        :key="item.id"
        class="flex items-center justify-between border p-4 rounded"
      >
        <div class="flex items-center gap-4">
          <img
            :src="item.thumbnail"
            class="w-16 h-16 object-cover rounded"
          />

          <div>
            <h2 class="font-bold">{{ item.title }}</h2>
            <p class="text-green-600 font-bold">
              ${{ item.price }}
            </p>
          </div>
        </div>

        <!-- Remove Button -->
        <button
          @click="cart.removeFromCart(item.id)"
          class="bg-red-500 text-white px-3 py-1 rounded"
        >
          Remove
        </button>
      </div>

      <div class="mt-6 text-right border-t pt-4">
  <h2 class="text-xl font-bold">
    Total: ${{ totalPrice.toFixed(2) }}
  </h2>

  <button
    @click="cart.items = []; cart.saveCart()"
    class="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
  >
    Clear Cart
  </button>
</div>

    </div>
  </div>
</template>