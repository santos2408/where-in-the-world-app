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
        :key="country.name.common"
        :country="country"
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
      url: "https://restcountries.com/v3.1/all",
      countries: [],
    };
  },
  async created() {
    try {
      const response = await fetch(this.url);

      if (!response.ok) {
        throw new Error("There was not possible get information about the countries.");
      }

      this.countries = await response.json();
    } catch ({ error, message }) {
      console.log(`${error}: ${message}`);
    }
  },
};
</script>
