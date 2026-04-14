import { defineStore } from "pinia";
import type { Product } from "../types/Product";

interface CartItem extends Product {
  quantity: number;
}

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as CartItem[],
  }),

  actions: {
    addToCart(product: Product) {
      const existing = this.items.find((item) => item.id === product.id);

      if (existing) {
        existing.quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }

      this.saveCart();
    },

    increaseQty(id: number) {
      const item = this.items.find((i) => i.id === id);
      if (item) item.quantity++;
      this.saveCart();
    },

    decreaseQty(id: number) {
      const item = this.items.find((i) => i.id === id);
      if (item && item.quantity > 1) {
        item.quantity--;
      } else {
        this.removeFromCart(id);
      }
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