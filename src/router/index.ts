import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CartView from "../views/CartView.vue";
import CheckoutView from "../views/CheckoutView.vue";
import ProductView from "../views/ProductView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  { 
    path: "/product/:id",
     component: ProductView 
  },
  {
    path: "/cart",
    component: CartView,
  },
  { 
    path: "/checkout",
    component: CheckoutView 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;