<template>
  <div class="relative z-10">
    <div
      class="relative flex h-14 w-60 cursor-pointer items-center justify-between gap-14 rounded bg-brand-white-1 px-6 text-brand-gray-1 shadow-dark-2 hover:bg-brand-gray-2 dark:bg-brand-dark-1 dark:text-brand-white-1 dark:hover:bg-brand-dark-3"
      @click="handleFilterRegionsVisibility"
    >
      <span v-if="selectedRegion">{{ selectedRegion }}</span>
      <span v-else>Filter by region</span>
      <font-awesome-icon
        :icon="['fas', 'angle-down']"
        :class="['transition', { '-rotate-180': filterRegionsVisibility }]"
      />
    </div>

    <ul
      v-show="filterRegionsVisibility"
      class="absolute left-0 top-16 flex w-full flex-col rounded bg-brand-white-1 text-brand-gray-1 shadow-dark-2 transition dark:bg-brand-dark-1 dark:text-brand-white-1"
    >
      <template v-for="region in regions" :key="region">
        <li
          v-if="region !== selectedRegion"
          class="cursor-pointer px-6 py-3 hover:bg-brand-gray-2 dark:hover:bg-brand-dark-3"
          @click="chooseRegion"
        >
          {{ region }}
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "pinia";

import { useUserStore, ADD_SEARCHED_REGION } from "@/stores/user";

export default {
  name: "LocationFilter",
  data() {
    return {
      filterRegionsVisibility: false,
      regions: ["All", "Africa", "America", "Asia", "Europe", "Oceania"],
      selectedRegion: "",
    };
  },
  methods: {
    ...mapActions(useUserStore, [ADD_SEARCHED_REGION]),
    handleFilterRegionsVisibility() {
      this.filterRegionsVisibility = !this.filterRegionsVisibility;
    },
    chooseRegion($event) {
      this.selectedRegion = $event.target.textContent;
      this.filterRegionsVisibility = !this.filterRegionsVisibility;
      this.$router.push({ name: "Home", query: { page: 1 } });
      this.ADD_SEARCHED_REGION(this.selectedRegion);
    },
  },
};
</script>
