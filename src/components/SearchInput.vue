<template>
  <div>
    <label
      for="search-country"
      class="flex h-14 w-120 items-center gap-6 rounded bg-brand-white-1 px-8 text-brand-gray-1 shadow-dark-2 transition ease-in dark:bg-brand-dark-1 dark:text-brand-white-1"
    >
      <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      <input
        id="search-country"
        type="text"
        class="h-full w-full bg-transparent outline-none transition ease-in"
        placeholder="Search for a country..."
      />
    </label>
  </div>
</template>
<script>
export default {
  name: "SearchInput",
};
</script>
