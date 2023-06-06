<template>
  <header
    class="flex h-20 items-center justify-between bg-brand-white-1 px-20 shadow-dark transition ease-in dark:bg-brand-dark-1"
  >
    <h1 class="text-2xl font-bold text-brand-black-1 dark:text-brand-white-1">
      Where in the world?
    </h1>
    <button
      class="flex items-center gap-3 font-semibold text-brand-black-1 dark:text-brand-white-1"
      @click="changeTheme"
    >
      <font-awesome-icon v-if="isDarkMode" :icon="['fas', 'sun']" />
      <font-awesome-icon v-else :icon="['fas', 'moon']" />
      {{ currentTheme }}
    </button>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      isDarkMode: false,
    };
  },
  computed: {
    currentTheme() {
      return this.isDarkMode ? "Light Mode" : "Dark Mode";
    },
  },
  methods: {
    changeTheme() {
      this.isDarkMode = !this.isDarkMode;
      document.documentElement.classList.toggle("dark");
    },
  },
};
</script>

<style scoped></style>
