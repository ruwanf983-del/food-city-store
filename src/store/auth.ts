import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: JSON.parse(localStorage.getItem("user") || "null"),
  }),

  getters: {
    isLoggedIn: (state) => !!state.user,
  },

  actions: {
    login(email: string, password: string) {
      // simple fake auth (for project)
      if (email && password) {
        this.user = { email };

        localStorage.setItem("user", JSON.stringify(this.user));
      }
    },

    logout() {
      this.user = null;
      localStorage.removeItem("user");
    },
  },
});