<template>
  <div class="py-10 text-center">
    <h2>Seems like no country was found.</h2>
    <router-link :to="{ name: 'Home', query: { page: 1 } }" @click="resetSearch">
      Try again
    </router-link>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";

import { useUserStore, RESET_SEARCHED_COUNTRY } from "@/stores/user";

export default {
  name: "CountriesNotFound",
  computed: {
    ...mapState(useUserStore, ["searchedCountry"]),
  },
  methods: {
    ...mapActions(useUserStore, [RESET_SEARCHED_COUNTRY]),
    resetSearch() {
      this.RESET_SEARCHED_COUNTRY();
    },
  },
};
</script>
