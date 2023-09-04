<template>
  <router-link
    :to="{ name: 'Home', query: { page: previousPage } }"
    class="inline-block w-36 rounded bg-brand-white-1 py-3 text-center text-brand-gray-1 shadow-dark-2 hover:bg-brand-gray-2 dark:bg-brand-dark-1 dark:text-brand-white-1 dark:hover:bg-brand-dark-3"
    :class="disablePreviousButton"
  >
    Previous
  </router-link>
</template>

<script>
export default {
  name: "PaginationButton",
  props: {
    name: {
      type: String,
      required: true,
    },
    routeName: {
      type: String,
      required: true,
    },
    routePage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    disablePreviousButton() {
      return this.currentPage === 1
        ? "bg-[#c9d4e3] text-brand-gray-1 hover:bg-brand-gray-2 dark:bg-[#25313D] dark:hover:bg-[#25313D] pointer-events-none"
        : undefined;
    },
    disableNextButton() {
      const lastPage = Math.ceil(this.FILTERED_COUNTRIES.length / 20);
      return this.currentPage === lastPage
        ? "bg-[#c9d4e3] text-brand-gray-1 hover:bg-brand-gray-2 dark:bg-[#25313D] dark:hover:bg-[#25313D] pointer-events-none"
        : undefined;
    },
  },
};
</script>
