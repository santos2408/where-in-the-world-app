<template>
  <the-header />
  <main-section />
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import MainSection from "@/components/MainSection.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    MainSection,
  },
};
</script>

<style scoped></style>
