<template>
  <main
    class="w- min-h-screen bg-brand-white-2 px-20 pt-32 transition ease-in dark:bg-brand-dark-2"
  >
    <section class="mb-12 flex items-center justify-between">
      <search-input />
      <location-filter />
    </section>

    <section class="grid grid-cols-5 gap-16">
      <country-card
        v-for="country in countries"
        :key="country"
        :country="country.name.common"
        :population="country.population"
        :region="country.region"
        :capital="country.capital"
        :sigle="country.cca2"
      />
    </section>
  </main>
</template>

<script>
import SearchInput from "@/components/SearchInput.vue";
import LocationFilter from "@/components/LocationFilter.vue";
import CountryCard from "@/components/CountryCard.vue";

export default {
  name: "MainSection",
  components: {
    LocationFilter,
    SearchInput,
    CountryCard,
  },
  data() {
    return {
      countries: [],
    };
  },
  created() {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((countries) => {
        this.countries = countries;
      });
  },
};
</script>
