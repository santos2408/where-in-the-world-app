<template>
  <div class="overflow-hidden rounded bg-brand-white-1 shadow-dark-2">
    <div>
      <img
        class="h-52 object-cover"
        :src="`https://flagcdn.com/${sigle.toLowerCase()}.svg`"
        alt="Brazil"
      />
    </div>
    <div class="p-6">
      <h2 class="mb-6 text-lg font-bold">{{ country }}</h2>
      <ul class="space-y-1">
        <li><span class="font-semibold">Population</span>: {{ population }}</li>
        <li><span class="font-semibold">Region</span>: {{ region }}</li>
        <li><span class="font-semibold">Capital</span>: {{ capital }}</li>
        <li><span class="font-semibold"></span>{{ sigle }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "CountryCard",
  props: ["country", "population", "region", "capital", "sigle"],
};
</script>
