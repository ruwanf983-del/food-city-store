<script setup lang="ts">
import { useCartStore } from "../store/cart";
import { useAuthStore } from "../store/auth";
import { useThemeStore } from "../store/theme";
import { useRouter } from "vue-router";

const cart = useCartStore();
const auth = useAuthStore();
const theme = useThemeStore();
const router = useRouter();

function logout() {
  auth.logout();
  router.push("/login");
}
</script>

<template>
  <nav
    class="bg-green-600 dark:bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md"
  >
    <!-- Logo -->
    <h1 class="font-bold text-xl tracking-wide">
      🍔 Food City Store
    </h1>

    <!-- Navigation -->
    <div class="flex items-center gap-4">

      <!-- Home -->
      <router-link to="/" class="hover:underline">
        Home
      </router-link>

      <!-- Cart -->
      <router-link
        to="/cart"
        class="bg-white text-green-600 dark:bg-gray-700 dark:text-white px-3 py-1 rounded font-bold hover:bg-gray-100 transition"
      >
        🛒 {{ cart.items.length }}
      </router-link>

      <!-- Dark Mode Toggle -->
      <button
        @click="theme.toggleTheme()"
        class="px-3 py-1 rounded bg-black/20 hover:bg-black/30 transition"
      >
        🌙
      </button>

      <!-- Auth Section -->
      <router-link
        v-if="!auth.isLoggedIn"
        to="/login"
        class="hover:underline"
      >
        Login
      </router-link>

      <button
        v-else
        @click="logout"
        class="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>

    </div>
  </nav>
</template>