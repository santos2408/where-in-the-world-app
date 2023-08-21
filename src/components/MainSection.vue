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
      class="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
    >
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
