<template>
  <label
    for="search-country"
    class="flex h-14 w-full items-center gap-6 rounded bg-brand-white-1 px-6 text-brand-gray-1 shadow-dark-2 ease-in dark:bg-brand-dark-1 dark:text-brand-white-1 md:w-120 md:px-8"
  >
    <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
    <input
      id="search-country"
      :value="getSearchedCountry"
      type="text"
      class="h-full w-full bg-transparent outline-none transition ease-in"
      placeholder="Search for a country..."
      autocomplete="off"
      @input="handleInput"
    />
  </label>
</template>
<script>
import { mapActions, mapState } from "pinia";

import { useUserStore, ADD_SEARCHED_COUNTRY } from "@/stores/user";

export default {
  name: "SearchInput",
  emits: ["handle-input"],
  computed: {
    ...mapState(useUserStore, ["getSearchedCountry"]),
  },
  methods: {
    ...mapActions(useUserStore, [ADD_SEARCHED_COUNTRY]),
    handleInput($event) {
      this.$router.push({ name: "Home", query: { page: 1 } });
      this.ADD_SEARCHED_COUNTRY($event.target.value);
    },
  },
};
</script>
