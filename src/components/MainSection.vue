<template>
  <main
    class="min-h-screen w-full bg-brand-white-2 px-6 pt-32 transition ease-in dark:bg-brand-dark-2 md:px-20"
  >
    <section
      class="mb-12 flex flex-col items-center justify-between gap-5 md:flex-row md:gap-6 lg:gap-0"
    >
      <search-input />
      <location-filter />
    </section>

    <section
      v-if="countriesAndColorsReady"
      class="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
    >
      <country-card
        v-for="(country, index) in countries"
        :key="country.name.common"
        :country="country"
        :country-color="countriesColors[index]"
      />
    </section>

    <section
      v-else
      class="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
    >
      <content-loader v-for="n in 10" :key="n" viewBox="0 0 200 285" :speed="2">
        <rect x="0" y="3" rx="10" ry="10" width="195" height="140" />
        <rect x="5" y="160" rx="0" ry="0" width="180" height="15" />
        <rect x="5" y="185" rx="0" ry="0" width="154" height="15" />
        <rect x="5" y="210" rx="0" ry="0" width="180" height="15" />
      </content-loader>
    </section>
  </main>
</template>

<script>
import getCountries from "@/api/getCountries.js";

import { ContentLoader } from "vue-content-loader";
import CountryCard from "@/components/CountryCard.vue";
import LocationFilter from "@/components/LocationFilter.vue";
import SearchInput from "@/components/SearchInput.vue";

export default {
  name: "MainSection",
  components: {
    ContentLoader,
    CountryCard,
    LocationFilter,
    SearchInput,
  },
  data() {
    return {
      url: "https://restcountries.com/v3.1/all",
      countries: [],
      countriesColors: [],
      countriesAndColorsReady: false,
    };
  },
  async created() {
    const { countries, countriesColors } = await getCountries(this.url);
    this.countries = countries;
    this.countriesColors = countriesColors;
    this.countriesAndColorsReady = true;
  },
};
</script>
