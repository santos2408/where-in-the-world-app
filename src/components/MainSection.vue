<template>
  <main
    class="mt-20 min-h-screen w-full bg-brand-white-2 px-6 pt-12 ease-in dark:bg-brand-dark-2 md:px-20"
  >
    <section
      class="mb-12 flex flex-col items-center justify-between gap-5 md:flex-row md:gap-6 lg:gap-0"
    >
      <search-input @handle-input="updateSearch" />
      <location-filter />
    </section>

    <section v-if="countriesAndColorsReady">
      <div class="mb-6 flex items-end justify-between">
        <p class="text-sm text-brand-black-1 dark:text-brand-gray-2">
          {{ FILTERED_COUNTRIES.length }} countries
        </p>

        <div class="flex gap-6">
          <router-link
            v-if="previousPage"
            :to="{ name: 'Home', query: { page: previousPage } }"
            class="inline-block w-36 rounded bg-brand-white-1 py-3 text-center text-brand-gray-1 shadow-dark-2 hover:bg-brand-gray-2 dark:bg-brand-dark-1 dark:text-brand-white-1 dark:hover:bg-brand-dark-3"
          >
            Previous
          </router-link>
          <router-link
            v-if="nextPage"
            :to="{ name: 'Home', query: { page: nextPage } }"
            class="inline-block w-36 rounded bg-brand-white-1 py-3 text-center text-brand-gray-1 shadow-dark-2 hover:bg-brand-gray-2 dark:bg-brand-dark-1 dark:text-brand-white-1 dark:hover:bg-brand-dark-3"
          >
            Next
          </router-link>
        </div>
      </div>

      <div
        class="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
      >
        <country-card
          v-for="country in displayedCountry"
          :key="country.name.common"
          :country="country"
          :country-color="country.flagColor"
        />
      </div>

      <div class="flex justify-end gap-6 py-10">
        <router-link
          v-if="previousPage"
          :to="{ name: 'Home', query: { page: previousPage } }"
          class="w-36 rounded bg-brand-white-1 py-3 text-center text-brand-gray-1 shadow-dark-2 hover:bg-brand-gray-2 dark:bg-brand-dark-1 dark:text-brand-white-1 dark:hover:bg-brand-dark-3"
        >
          Previous
        </router-link>
        <router-link
          v-if="nextPage"
          :to="{ name: 'Home', query: { page: nextPage } }"
          class="w-36 rounded bg-brand-white-1 py-3 text-center text-brand-gray-1 shadow-dark-2 hover:bg-brand-gray-2 dark:bg-brand-dark-1 dark:text-brand-white-1 dark:hover:bg-brand-dark-3"
        >
          Next
        </router-link>
      </div>
    </section>

    <section
      v-else
      class="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
    >
      <content-loader
        v-for="n in 10"
        :key="n"
        viewBox="0 0 200 285"
        :speed="2"
        :primary-color="darkMode ? '#334450' : '#EBEBEB'"
        :secondary-color="darkMode ? '#364956' : '#DEDEDE'"
      >
        <rect x="0" y="3" rx="10" ry="10" width="195" height="140" />
        <rect x="5" y="160" rx="0" ry="0" width="180" height="15" />
        <rect x="5" y="185" rx="0" ry="0" width="154" height="15" />
        <rect x="5" y="210" rx="0" ry="0" width="180" height="15" />
      </content-loader>
    </section>
  </main>
</template>

<script>
import { mapState, mapActions } from "pinia";

import {
  useCountriesStore,
  FETCH_COUNTRIES,
  FILTERED_COUNTRIES,
  FILTER_COUNTRIES_BY_SEARCH,
} from "@/stores/countries";
import { useUserStore } from "@/stores/user";

import { ContentLoader } from "vue-content-loader";
import CountryCard from "@/components/CountryCard.vue";
import LocationFilter from "@/components/LocationFilter.vue";
import SearchInput from "@/components/SearchInput.vue";

export default {
  name: "MainSection",
  components: {
    ContentLoader,
    CountryCard,
    LocationFilter,
    SearchInput,
  },
  data() {
    return {
      searchValue: "",
      countriesAndColorsReady: false,
    };
  },
  computed: {
    getCountriesIntervalIndex() {
      const currentPageString = this.$route.query.page || 1;
      const currentPageNumber = Number.parseInt(currentPageString);
      const firstCountryIndex = (currentPageNumber - 1) * 20;
      const lastCountryIndex = currentPageNumber * 20;
      return { firstCountryIndex, lastCountryIndex };
    },
    currentPage() {
      return Number.parseInt(this.$route.query.page || 1);
    },
    ...mapState(useUserStore, ["darkMode"]),
    ...mapState(useCountriesStore, {
      FILTERED_COUNTRIES,
      displayedCountry() {
        const { firstCountryIndex, lastCountryIndex } = this.getCountriesIntervalIndex;
        return this.FILTERED_COUNTRIES.slice(firstCountryIndex, lastCountryIndex);
      },
      nextPage() {
        const nextPage = this.currentPage + 1;
        const maxPage = this.FILTERED_COUNTRIES.length / 20;
        return nextPage < maxPage ? nextPage : undefined;
      },
    }),
    previousPage() {
      const previousPage = this.currentPage - 1;
      return previousPage >= 1 ? previousPage : undefined;
    },
  },
  async created() {
    await this.FETCH_COUNTRIES();
    this.countriesAndColorsReady = true;
  },
  methods: {
    ...mapActions(useCountriesStore, [FETCH_COUNTRIES, FILTER_COUNTRIES_BY_SEARCH]),
    updateSearch(payload) {
      this.$router.push({ name: "Home", query: { page: 1 } });
      this.FILTER_COUNTRIES_BY_SEARCH(payload);
    },
  },
};
</script>
