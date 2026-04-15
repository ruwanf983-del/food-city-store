<script setup lang="ts">
import { ref, computed } from "vue";
import { useCartStore } from "../store/cart";

const cart = useCartStore();

// FORM
const name = ref("");
const phone = ref("");
const address = ref("");

// ORDER STATE
const orderPlaced = ref(false);
const order = ref<any>(null);

// TOTAL
const totalPrice = computed(() =>
  cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
);

// PLACE ORDER
function placeOrder() {
  // validation
  if (!name.value || !phone.value || !address.value) {
    alert("Please fill all details!");
    return;
  }

  if (cart.items.length === 0) {
    alert("Cart is empty!");
    return;
  }

  // 🔥 IMPORTANT: SAVE SNAPSHOT BEFORE CLEARING
  order.value = {
    customer: {
      name: name.value,
      phone: phone.value,
      address: address.value,
    },
    items: JSON.parse(JSON.stringify(cart.items)),
    total: totalPrice.value,
  };

  // show order
  orderPlaced.value = true;

  // clear cart AFTER saving
  cart.clearCart();
}
</script>

<template>
  <div class="p-6 max-w-4xl mx-auto">

    <!-- BEFORE ORDER -->
    <div v-if="!orderPlaced">

      <h1 class="text-2xl font-bold mb-4">
        🧾 Checkout
      </h1>

      <div class="grid md:grid-cols-2 gap-6">

        <!-- FORM -->
        <div class="border p-4 rounded">

          <input v-model="name"
            placeholder="Name"
            class="border p-2 w-full mb-2" />

          <input v-model="phone"
            placeholder="Phone"
            class="border p-2 w-full mb-2" />

          <textarea v-model="address"
            placeholder="Address"
            class="border p-2 w-full mb-2"></textarea>

          <button
            @click="placeOrder"
            class="bg-green-500 text-white px-4 py-2 w-full"
          >
            Place Order
          </button>

        </div>

        <!-- ORDER PREVIEW -->
        <div class="border p-4">

          <h2 class="font-bold mb-3">
            Order Preview
          </h2>

          <div
            v-for="item in cart.items"
            :key="item.id"
            class="flex justify-between mb-2"
          >
            <span>
              {{ item.title }} (x{{ item.quantity }})
            </span>

            <span>
              ${{ item.price * item.quantity }}
            </span>
          </div>

          <hr class="my-3" />

          <h2 class="text-right font-bold">
            Total: ${{ totalPrice.toFixed(2) }}
          </h2>

        </div>

      </div>
    </div>

    <!-- AFTER ORDER -->
    <div v-else class="text-center">

      <h1 class="text-3xl font-bold text-green-600">
        🎉 Order Confirmed!
      </h1>

      <!-- CUSTOMER DETAILS -->
      <div class="border p-4 mt-4 max-w-md mx-auto text-left">

        <p><b>Name:</b> {{ order.customer.name }}</p>
        <p><b>Phone:</b> {{ order.customer.phone }}</p>
        <p><b>Address:</b> {{ order.customer.address }}</p>

        <hr class="my-3" />

        <!-- ORDERED LIST -->
        <div
          v-for="item in order.items"
          :key="item.id"
          class="flex justify-between mb-2"
        >
          <span>
            {{ item.title }} (x{{ item.quantity }})
          </span>

          <span>
            ${{ item.price * item.quantity }}
          </span>
        </div>

        <hr class="my-3" />

        <!-- TOTAL -->
        <h2 class="text-right font-bold text-lg">
          Total: ${{ order.total.toFixed(2) }}
        </h2>

      </div>

      <router-link
        to="/"
        class="mt-6 inline-block bg-green-500 text-white px-4 py-2 rounded"
      >
        Back to Home
      </router-link>

    </div>

  </div>
</template>