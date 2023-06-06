<template>
  <section class="">
    <div>
      <label
        for="search-country"
        class="inline-block w-96 bg-brand-white-1 shadow-dark"
      >
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        <input id="search-country" type="text" />
      </label>
    </div>
    <div></div>
  </section>
</template>

<script>
export default {
  name: "InputFilter",
};
</script>
