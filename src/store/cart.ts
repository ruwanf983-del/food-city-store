import { defineStore } from "pinia";
import type { Product } from "../types/Product";

interface CartItem extends Product {
  quantity: number;
}

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: JSON.parse(localStorage.getItem("cart") || "[]"),
  }),

  actions: {
    addToCart(product) {
      const existing = this.items.find(i => i.id === product.id);

      if (existing) {
        existing.quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }

      this.saveCart();
    },

    // 🟢 INCREASE QUANTITY
    increaseQty(id: number) {
      const item = this.items.find((i) => i.id === id);
      if (item) item.quantity++;

      this.saveCart();
    },

    // 🟢 DECREASE QUANTITY
    decreaseQty(id: number) {
      const item = this.items.find((i) => i.id === id);

      if (item && item.quantity > 1) {
        item.quantity--;
      } else {
        this.removeFromCart(id);
      }

      this.saveCart();
    },

    // 🟢 REMOVE ITEM
    removeFromCart(id: number) {
      this.items = this.items.filter(
        (item) => item.id !== id
      );

      this.saveCart();
    },

    // 🟢 CLEAR CART
    clearCart() {
      this.items = [];
      this.saveCart();
    },

    // 🟢 SAVE TO LOCALSTORAGE
    saveCart() {
      localStorage.setItem(
        "cart",
        JSON.stringify(this.items)
      );
    },

    // 🟢 LOAD FROM LOCALSTORAGE (IMPORTANT)
    loadCart() {
      const data = localStorage.getItem("cart");

      if (data) {
        this.items = JSON.parse(data);
      }
    },
  },
});