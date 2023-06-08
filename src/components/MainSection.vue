<template>
  <main
    class="min-h-screen bg-brand-white-2 px-20 pt-32 transition ease-in dark:bg-brand-dark-2"
  >
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
