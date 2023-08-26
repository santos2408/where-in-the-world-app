import { defineStore } from "pinia";

import getCountries from "@/api/getCountries.js";

export const FETCH_JOBS = "FETCH_JOBS";
export const FILTERED_COUNTRIES_BY_SEARCH = "FILTERED_COUNTRIES_BY_SEARCH";

export const useCountriesStore = defineStore("countries", {
  state: () => {
    return {
      countries: [],
      countriesColors: [],
      countriesAndColorsReady: false,
      filter: "all", // all, africa, america, asia, europe, oceania
    };
  },
  // getters: {
  //   [FILTERED_COUNTRIES_BY_SEARCH](searchValue) {},
  // },
  actions: {
    async [FETCH_JOBS]() {
      const { countries, countriesColors } = await getCountries();
      this.countries = countries;
      this.countriesColors = countriesColors;
      this.countriesAndColorsReady = true;
    },
  },
});
