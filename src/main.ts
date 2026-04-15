import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import "./assets/main.css";

import { useCartStore } from "./store/cart";

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);
app.use(router);

// 🔥 IMPORTANT: load cart on app start
const cart = useCartStore(pinia);
cart.saveCart();

app.mount("#app");