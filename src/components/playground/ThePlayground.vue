<template>
  <input type="text" :value="title" @input="updateValue" />
</template>

<script>
export default {
  name: "ThePlayground",
  props: ["title"],
  emits: ["update:title"],
  methods: {
    updateValue($event) {
      this.$emit("update:title", $event.target.value);
    },
  },
};
</script>
