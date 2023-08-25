<template>
  <header
    class="lef-0 fixed top-0 z-20 flex h-20 w-full items-center justify-between bg-brand-white-1 px-6 shadow-dark-1 ease-in dark:bg-brand-dark-1 md:px-20"
  >
    <h1 class="text-2xl font-bold text-brand-black-1 dark:text-brand-white-1">
      <router-link :to="{ name: 'Home' }"> Where in the world? </router-link>
    </h1>
    <button
      class="flex items-center gap-3 py-3 font-semibold text-brand-black-1 dark:text-brand-white-1"
      @click="changeTheme"
    >
      <font-awesome-icon v-if="theme" :icon="['fas', 'sun']" />
      <font-awesome-icon v-else :icon="['fas', 'moon']" />
      {{ handleThemeNameVisibility }}
    </button>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      isMobile: null,
      theme: null,
    };
  },
  computed: {
    currentTheme() {
      return this.theme ? "Light Mode" : "Dark Mode";
    },
    handleThemeNameVisibility() {
      return this.isMobile ? "" : this.currentTheme;
    },
  },

  created() {
    const themeFromLocalStorage = localStorage.getItem("darkMode");
    const currentTheme = JSON.parse(themeFromLocalStorage);

    this.theme = currentTheme;

    if (currentTheme) {
      document.documentElement.classList.add("dark");
      return;
    }

    document.documentElement.classList.remove("dark");
  },

  mounted() {
    this.isMobile = window.innerWidth <= 600 ? true : false;

    window.addEventListener("resize", () => {
      this.isMobile = window.innerWidth <= 600 ? true : false;
    });
  },

  methods: {
    changeTheme() {
      this.theme = !this.theme;
      localStorage.setItem("darkMode", JSON.stringify(this.theme));
      document.documentElement.classList.toggle("dark");
    },
  },
};
</script>

<style scoped></style>
