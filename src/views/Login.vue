<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const username = ref("");
const password = ref("");
const message = ref("");
const isError = ref(false);

function login() {
  // simple validation
  if (!username.value || !password.value) {
    message.value = "Please fill all fields";
    isError.value = true;
    return;
  }

  // fake login check
  if (username.value === "admin" && password.value === "1234") {
    message.value = "Login Successful 🎉";
    isError.value = false;

    // optional redirect after 1 sec
    setTimeout(() => {
      router.push("/");
    }, 1000);

  } else {
    message.value = "Invalid username or password ❌";
    isError.value = true;
  }
}
</script>

<template>
  <div class="p-6 max-w-md mx-auto">

    <h1 class="text-2xl font-bold mb-4">
      🔐 Login
    </h1>

    <input
      v-model="username"
      placeholder="Username"
      class="border p-2 w-full mb-3 rounded"
    />

    <input
      v-model="password"
      type="password"
      placeholder="Password"
      class="border p-2 w-full mb-3 rounded"
    />

    <button
      @click="login"
      class="bg-green-500 text-white w-full py-2 rounded"
    >
      Login
    </button>

    <!-- MESSAGE -->
    <p
      v-if="message"
      class="mt-4 text-center font-bold"
      :class="isError ? 'text-red-500' : 'text-green-500'"
    >
      {{ message }}
    </p>

  </div>
</template>