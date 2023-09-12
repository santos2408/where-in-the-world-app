<template>
  <router-link
    :to="countryPageLink"
    class="cursor-pointer overflow-hidden rounded bg-white shadow-dark-2 transition hover:-translate-y-1"
  >
    <figure class="flex h-60 items-center justify-center p-6" :style="backgroundStyleCountry">
      <img
        class="max-h-52 w-64 border-2 border-white object-cover drop-shadow-lg backdrop-blur"
        :src="country.flags.svg"
        :alt="country.name.common"
      />
    </figure>
    <div class="bg-brand-white-1 p-6">
      <h2 class="mb-6 text-lg font-bold">{{ country.name.common }}</h2>
      <ul class="space-y-1">
        <li><span class="font-semibold">Population</span>: {{ formattedPopulation }}</li>
        <li><span class="font-semibold">Region</span>: {{ country.region }}</li>
        <li><span class="font-semibold">Capital</span>: {{ formattedCountryCapital }}</li>
      </ul>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "CountryCard",
  props: {
    country: {
      type: Object,
      required: true,
    },
    countryColor: {
      type: Array,
      required: true,
    },
  },
  computed: {
    formattedCountryCapital() {
      return this.country.capital ? this.country.capital[0] : "---";
    },
    backgroundStyleCountry() {
      return { backgroundColor: `rgb(${this.countryColor.join(",")}, 0.5)` };
    },
    formattedPopulation() {
      return new Intl.NumberFormat("en-US").format(this.country.population);
    },
    countryPageLink() {
      return `/country/${this.country.cca3}`;
    },
  },
};
</script>
