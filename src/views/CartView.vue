<script setup lang="ts">
import { computed } from "vue";
import { useCartStore } from "../store/cart";

const cart = useCartStore();

const totalPrice = computed(() => {
  return cart.items.reduce(
    (sum, item) => sum  +  item.price * item.quantity,
    0
  );
});
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">🛒 Your Cart</h1>

    <!-- Empty Cart -->
    <div v-if="cart.items.length === 0" class="text-center mt-20">
  <h2 class="text-2xl font-bold text-gray-600">🛒 Your cart is empty</h2>
  <p class="text-gray-400 mt-2">Start adding delicious items!</p>

  <router-link
    to="/"
    class="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
  >
    Go Shopping
  </router-link>
  <router-link
  to="/checkout"
  class="mt-3 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
>
  <br><br>Proceed to Checkout <br />
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

      <!-- Quantity Controls -->
      <div class="flex items-center gap-2 mt-2">
        <button
          @click="cart.decreaseQty(item.id)"
          class="bg-gray-300 px-2 rounded"
        >
            −
        </button>

        <span class="font-bold">{{ item.quantity }}</span>

        <button
          @click="cart.increaseQty(item.id)"
          class="bg-gray-300 px-2 rounded"
        >
          +
        </button>
      </div>
    </div>
  </div>

  <!-- Remove -->
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