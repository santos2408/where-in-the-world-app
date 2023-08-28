import { defineStore } from "pinia";

export const ADD_SEARCHED_COUNTRY = "ADD_SEARCHED_COUNTRY";
export const ADD_SEARCHED_REGION = "ADD_SEARCHED_REGION";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      searchedCountry: "",
      searchedRegion: "",
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
    [ADD_SEARCHED_COUNTRY](searchedCountry) {
      this.searchedCountry = searchedCountry;
    },
    [ADD_SEARCHED_REGION](searchedRegion) {
      this.searchedRegion = searchedRegion;
    },
  },
});
