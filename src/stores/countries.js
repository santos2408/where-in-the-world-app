import { defineStore } from "pinia";

import { getCountries } from "@/api/getCountries.js";

import { useUserStore } from "@/stores/user";

export const FETCH_COUNTRIES = "FETCH_COUNTRIES";
export const FILTERED_COUNTRIES = "FILTERED_COUNTRIES";
export const INCLUDE_SEARCH_COUNTRY_NAME = "INCLUDE_SEARCH_COUNTRY_NAME";
export const INCLUDE_SEARCH_COUNTRY_REGION = "INCLUDE_SEARCH_COUNTRY_REGION";

export const useCountriesStore = defineStore("countries", {
  state: () => {
    return {
      countries: [],
      filter: "all", // all, africa, america, asia, europe, oceania
    };
  },
  getters: {
    [INCLUDE_SEARCH_COUNTRY_NAME]: () => (country) => {
      const userStore = useUserStore();

      if (userStore.searchedCountry.length === 0) {
        return true;
      }

      return country.name.common.toLowerCase().includes(userStore.searchedCountry.toLowerCase());
    },
    [INCLUDE_SEARCH_COUNTRY_REGION]: () => (country) => {
      const userStore = useUserStore();

      if (userStore.searchedRegion.length === 0 || userStore.searchedRegion === "All") {
        return true;
      }

      return country.region.toLowerCase().includes(userStore.searchedRegion.toLowerCase());
    },
    [FILTERED_COUNTRIES](state) {
      const userStore = useUserStore();

      const noFilteredCountryByName = userStore.searchedCountry.length === 0;
      const noFilteredCountryByRegion = userStore.searchedRegion.length === 0;

      if (noFilteredCountryByName && noFilteredCountryByRegion) {
        return state.countries;
      }

      return state.countries
        .filter((country) => this.INCLUDE_SEARCH_COUNTRY_NAME(country))
        .filter((country) => this.INCLUDE_SEARCH_COUNTRY_REGION(country));
    },
  },
  actions: {
    async [FETCH_COUNTRIES](param) {
      this.countries = await getCountries(param);
    },
  },
});
