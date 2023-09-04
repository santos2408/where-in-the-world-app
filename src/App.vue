<template class="text-2xl">
  <the-header />
  <router-view />
  <the-footer />
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
