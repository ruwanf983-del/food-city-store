import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    dark: localStorage.getItem("dark") === "true",
  }),

  actions: {
    toggleTheme() {
      this.dark = !this.dark;
      localStorage.setItem("dark", String(this.dark));

      if (this.dark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
});