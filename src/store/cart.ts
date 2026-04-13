import { defineStore } from "pinia";
import type { Product } from "../types/Product";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as Product[],
  }),

  actions: {
    addToCart(product: Product) {
      this.items.push(product);
      this.saveCart();
    },

    removeFromCart(id: number) {
      this.items = this.items.filter((item) => item.id !== id);
      this.saveCart();
    },

    saveCart() {
      localStorage.setItem("cart", JSON.stringify(this.items));
    },

    loadCart() {
      const data = localStorage.getItem("cart");
      if (data) {
        this.items = JSON.parse(data);
      }
    },
  },
});