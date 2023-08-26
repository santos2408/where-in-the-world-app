<template>
  <label
    for="search-country"
    class="flex h-14 w-full items-center gap-6 rounded bg-brand-white-1 px-6 text-brand-gray-1 shadow-dark-2 ease-in dark:bg-brand-dark-1 dark:text-brand-white-1 md:w-120 md:px-8"
  >
    <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
    <input
      id="search-country"
      v-model="value"
      type="text"
      class="h-full w-full bg-transparent outline-none transition ease-in"
      placeholder="Search for a country..."
      @input="handleInput"
    />
  </label>
</template>
<script>
export default {
  name: "SearchInput",
  emits: ["handle-input"],
  data() {
    return {
      value: "",
    };
  },
  methods: {
    handleInput($event) {
      this.value = $event.target.value;
      this.$emit("handle-input", this.value);
    },
  },
};
</script>
