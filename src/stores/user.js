import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      darkMode: false,
    };
  },
  getters: {},
  actions: {
    getCurrentTheme() {
      const themeFromLocalStorage = localStorage.getItem("darkMode");
      const currentTheme = JSON.parse(themeFromLocalStorage);
      this.darkMode = currentTheme;

      if (currentTheme) {
        document.documentElement.classList.add("dark");
        return;
      }

      document.documentElement.classList.remove("dark");
    },
    changeTheme() {
      this.darkMode = !this.darkMode;
      localStorage.setItem("darkMode", JSON.stringify(this.darkMode));
      document.documentElement.classList.toggle("dark");
    },
  },
});
