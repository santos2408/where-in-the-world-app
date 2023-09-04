import { defineStore } from "pinia";

export const HANDLE_CURRENT_THEME = "HANDLE_CURRENT_THEME";
export const CHANGE_THEME = "CHANGE_THEME";
export const ADD_SEARCHED_COUNTRY = "ADD_SEARCHED_COUNTRY";
export const ADD_SEARCHED_REGION = "ADD_SEARCHED_REGION";
export const RESET_SEARCHED_COUNTRY = "RESET_SEARCHED_COUNTRY";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      searchedCountry: "",
      searchedRegion: "",
      darkMode: false,
    };
  },
  getters: {
    getSearchedCountry(state) {
      return state.searchedCountry;
    },
  },
  actions: {
    [HANDLE_CURRENT_THEME]() {
      const themeFromLocalStorage = localStorage.getItem("darkMode");
      const isDarkModeTheme = JSON.parse(themeFromLocalStorage);

      this.darkMode = isDarkModeTheme;

      if (isDarkModeTheme) {
        document.documentElement.classList.add("dark");
        return;
      }

      document.documentElement.classList.remove("dark");
    },
    [CHANGE_THEME]() {
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
    [RESET_SEARCHED_COUNTRY]() {
      this.searchedCountry = "";
    },
  },
});
