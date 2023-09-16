<template>
  <footer
    class="flex h-20 w-full items-center justify-center bg-brand-white-1 px-6 text-brand-gray-1 shadow-dark-1 ease-in dark:bg-brand-dark-1 dark:text-brand-gray-2 md:px-20"
  >
    <p>Desenvolvido por <a :href="link" target="_blank">Roger Santos</a></p>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {
      link: "https://github.com/santos2408",
    };
  },
};
</script>
