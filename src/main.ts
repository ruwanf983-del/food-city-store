import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { useCartStore } from "./store/cart";

const app = createApp(App);

const pinia = createPinia();

app.use(pinia);
app.use(router);

app.mount("#app");

// ✅ IMPORTANT: run AFTER mount context is ready
const cart = useCartStore(pinia);
cart.loadCart();