<template>
  <main
    class="w- min-h-screen bg-brand-white-2 px-20 pt-32 transition ease-in dark:bg-brand-dark-2"
  >
    <section class="flex items-center justify-between">
      <search-input />
      <location-filter />
    </section>

    <section></section>
  </main>
</template>

<script>
import SearchInput from "@/components/SearchInput.vue";
import LocationFilter from "@/components/LocationFilter.vue";

export default {
  name: "MainSection",
  components: {
    LocationFilter,
    SearchInput,
  },
};
</script>
