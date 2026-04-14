<script setup lang="ts">
import { ref, computed } from "vue";
import { useCartStore } from "../store/cart";

const cart = useCartStore();

// Form fields
const name = ref("");
const address = ref("");
const phone = ref("");

// Order state
const orderPlaced = ref(false);
const orderItems = ref<any[]>([]);

// Cart total (before order)
const totalPrice = computed(() => {
  return cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
});

// Order total (after order)
const orderTotal = computed(() => {
  return orderItems.value.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
});

// Place order
const placeOrder = () => {
  if (!name.value || !address.value || !phone.value) {
    alert("Please fill all fields!");
    return;
  }

  // Save items BEFORE clearing cart
  orderItems.value = [...cart.items];

  // Show confirmation
  orderPlaced.value = true;

  // Clear cart
  cart.items = [];
  cart.saveCart();
};
</script>

<template>
  <div class="p-6 max-w-4xl mx-auto">

    <!-- BEFORE ORDER -->
    <div v-if="!orderPlaced">

      <h1 class="text-2xl font-bold mb-6">🧾 Checkout</h1>

      <div class="grid md:grid-cols-2 gap-6">

        <!-- FORM -->
        <div class="border p-4 rounded shadow bg-white">
          <h2 class="font-bold mb-4">Customer Details</h2>

          <input
            v-model="name"
            placeholder="Full Name"
            class="border p-2 w-full mb-3 rounded"
          />

          <input
            v-model="phone"
            placeholder="Phone Number"
            class="border p-2 w-full mb-3 rounded"
          />

          <textarea
            v-model="address"
            placeholder="Delivery Address"
            class="border p-2 w-full mb-3 rounded"
          ></textarea>

          <button
            @click="placeOrder"
            class="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600"
          >
            Place Order
          </button>
        </div>

        <!-- ORDER PREVIEW -->
        <div class="border p-4 rounded shadow bg-white">
          <h2 class="font-bold mb-4">Order Preview</h2>

          <div
            v-for="item in cart.items"
            :key="item.id"
            class="flex justify-between mb-2"
          >
            <span>{{ item.title }} (x{{ item.quantity }})</span>
            <span>${{ item.price * item.quantity }}</span>
          </div>

          <hr class="my-4" />

          <h2 class="text-xl font-bold text-right">
            Total: ${{ totalPrice.toFixed(2) }}
          </h2>
        </div>

      </div>

    </div>

    <!-- AFTER ORDER -->
    <div v-else class="text-center">

      <h1 class="text-3xl font-bold text-green-600 mb-4">
        🎉 Order Confirmed!
      </h1>

      <p class="mb-4 text-gray-600">
        Thank you, {{ name }}!
      </p>

      <div class="border p-4 rounded shadow bg-white max-w-md mx-auto text-left">
        <h2 class="font-bold mb-3">🧾 Order Details</h2>

        <p><strong>Name:</strong> {{ name }}</p>
        <p><strong>Phone:</strong> {{ phone }}</p>
        <p><strong>Address:</strong> {{ address }}</p>

        <hr class="my-3" />

        <div
          v-for="item in orderItems"
          :key="item.id"
          class="flex justify-between mb-2"
        >
          <span>{{ item.title }} (x{{ item.quantity }})</span>
          <span>${{ item.price * item.quantity }}</span>
        </div>

        <hr class="my-3" />

        <h2 class="text-xl font-bold text-right">
          Total: ${{ orderTotal.toFixed(2) }}
        </h2>
      </div>

      <router-link
        to="/"
        class="mt-6 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Back to Home
      </router-link>

    </div>

  </div>
</template>