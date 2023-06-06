<template>
  <main class="pt-12 transition ease-in dark:bg-brand-dark-2">
    <the-filters />
  </main>
</template>

<script>
import TheFilters from "@/components/TheFilters.vue";

export default {
  name: "MainSection",
  components: {
    TheFilters,
  },
};
</script>
