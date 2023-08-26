import { defineStore } from "pinia";

import getCountries from "@/api/getCountries.js";

export const FETCH_COUNTRIES = "FETCH_COUNTRIES";
export const FILTERED_COUNTRIES = "FILTERED_COUNTRIES";
export const FILTER_COUNTRIES_BY_SEARCH = "FILTER_COUNTRIES_BY_SEARCH";

export const useCountriesStore = defineStore("countries", {
  state: () => {
    return {
      countries: [],
      filteredCountries: [],
      // countriesAndColorsReady: false,
      filter: "all", // all, africa, america, asia, europe, oceania
    };
  },
  getters: {
    [FILTER_COUNTRIES_BY_SEARCH]: (state) => (searchedCountry) => {
      const filteredCountries = state.countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchedCountry),
      );
      state.filteredCountries = filteredCountries;
    },
    [FILTERED_COUNTRIES](state) {
      if (state.filteredCountries.length !== 0) {
        return this.filteredCountries;
      }

      return state.countries;
    },
  },
  actions: {
    async [FETCH_COUNTRIES]() {
      const countries = await getCountries();
      this.countries = countries;
    },
  },
});
