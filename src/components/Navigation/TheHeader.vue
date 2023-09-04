<template>
  <header
    class="lef-0 fixed top-0 z-20 flex h-20 w-full items-center justify-between bg-brand-white-1 px-6 shadow-dark-1 ease-in dark:bg-brand-dark-1 md:px-20"
  >
    <h1 class="text-2xl font-bold text-brand-black-1 dark:text-brand-white-1">
      <router-link :to="{ name: 'Home' }"> Where in the world? </router-link>
    </h1>
    <button
      class="flex items-center gap-3 py-3 font-semibold text-brand-black-1 dark:text-brand-white-1"
      @click="CHANGE_THEME"
    >
      <font-awesome-icon v-if="theme" :icon="['fas', 'sun']" />
      <font-awesome-icon v-else :icon="['fas', 'moon']" />
      {{ handleThemeNameVisibility }}
    </button>
  </header>
</template>

<script>
import { mapState, mapActions } from "pinia";

import { useUserStore, HANDLE_CURRENT_THEME, CHANGE_THEME } from "@/stores/user";

export default {
  name: "TheHeader",
  data() {
    return {
      isMobile: null,
    };
  },
  computed: {
    ...mapState(useUserStore, {
      theme: "darkMode",
      currentTheme() {
        return this.theme ? "Light Mode" : "Dark Mode";
      },
    }),
    handleThemeNameVisibility() {
      return this.isMobile ? "" : this.currentTheme;
    },
  },
  created() {
    this.HANDLE_CURRENT_THEME();
  },
  mounted() {
    this.isMobile = window.innerWidth <= 600 ? true : false;
    window.addEventListener("resize", () => {
      this.isMobile = window.innerWidth <= 600 ? true : false;
    });
  },
  methods: {
    ...mapActions(useUserStore, [CHANGE_THEME, HANDLE_CURRENT_THEME]),
  },
};
</script>
