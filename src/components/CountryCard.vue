<template>
  <div class="overflow-hidden rounded bg-brand-white-1 shadow-dark-2">
    <figure
      class="flex h-60 items-center justify-center"
      :style="{ backgroundColor: `rgb(${countryColor.join(',')})` }"
    >
      <img
        class="max-h-52 w-64 border-2 border-white object-cover drop-shadow-lg backdrop-blur"
        :src="country.flags.svg"
        :alt="country.name.common"
      />
    </figure>
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
    countryColor: {
      type: Array,
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
