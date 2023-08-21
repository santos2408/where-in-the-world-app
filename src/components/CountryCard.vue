<template>
  <div class="overflow-hidden rounded bg-brand-white-1 shadow-dark-2">
    <div>
      <img class="" :src="country.flags.svg" :alt="country.name.common" />
    </div>
    <div class="p-6">
      <h2 class="mb-6 text-lg font-bold">{{ country.name.common }}</h2>
      <ul class="space-y-1">
        <li><span class="font-semibold">Population</span>: {{ country.population }}</li>
        <li><span class="font-semibold">Region</span>: {{ country.region }}</li>
        <li><span class="font-semibold">Capital</span>: {{ formattedCountryCapital }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "CountryCard",
  props: {
    country: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedCountryCapital() {
      return this.country.capital ? this.country.capital[0] : "Unkown";
    },
  },
};
</script>
