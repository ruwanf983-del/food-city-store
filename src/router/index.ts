import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CartView from "../views/CartView.vue";
import CheckoutView from "../views/CheckoutView.vue";
import ProductView from "../views/ProductView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/product/:id",
    name: "Product",
    component: ProductView,
  },
  {
    path: "/cart",
    name: "Cart",
    component: CartView,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: CheckoutView,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },

  // 🔥 IMPORTANT: fallback route
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;