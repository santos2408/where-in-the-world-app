<template>
  <main
    class="mt-20 min-h-screen w-full bg-brand-blue-1 px-6 pt-12 ease-in dark:bg-brand-dark-2 md:px-20"
  >
    <section v-if="countriesAndColorsReady">
      <router-link
        :to="{ name: 'Home' }"
        class="mb-20 inline-block w-36 rounded bg-brand-white-1 py-3 text-center text-brand-gray-1 shadow-dark-2 hover:bg-brand-gray-2 dark:bg-brand-dark-1 dark:text-brand-white-1 dark:hover:bg-brand-dark-3"
      >
        Back
      </router-link>

      <div class="grid grid-cols-1 items-center gap-8 md:gap-16 lg:grid-cols-2">
        <div class="rounded bg-white">
          <figure
            class="flex items-center justify-center rounded p-6 md:h-120"
            :style="backgroundStyleCountry"
          >
            <img
              class="border-2 border-white object-cover drop-shadow-lg backdrop-blur md:max-h-96"
              :src="country.flags.svg"
              :alt="country.name.common"
            />
          </figure>
        </div>
        <div class="flex flex-col gap-10">
          <h1 class="text-3xl font-bold dark:text-brand-white-1">
            {{ country.name.common || "---" }}
          </h1>
          <ul class="flex flex-col flex-wrap gap-4 xl:h-48">
            <li class="font-medium dark:text-brand-white-1">
              Native Name:
              <span class="font-normal dark:text-brand-gray-3">
                {{ getNativeName || "---" }}
              </span>
            </li>
            <li class="font-medium dark:text-brand-white-1">
              Population:
              <span class="font-normal dark:text-brand-gray-3">
                {{ formattedPopulation || "---" }}
              </span>
            </li>
            <li class="font-medium dark:text-brand-white-1">
              Region:
              <span class="font-normal dark:text-brand-gray-3">
                {{ country.region || "---" }}
              </span>
            </li>
            <li class="font-medium dark:text-brand-white-1">
              Sub Region:
              <span class="font-normal dark:text-brand-gray-3">
                {{ country.subregion || "---" }}
              </span>
            </li>
            <li class="font-medium dark:text-brand-white-1">
              Capital:
              <span class="font-normal dark:text-brand-gray-3">
                {{ country.capital ? country.capital[0] : "---" }}
              </span>
            </li>
            <li class="font-medium dark:text-brand-white-1">
              Top Level Domains:
              <span class="font-normal dark:text-brand-gray-3">
                {{ country.tld ? country.tld[0] : "---" }}
              </span>
            </li>
            <li class="font-medium dark:text-brand-white-1">
              Currencies:
              <span class="font-normal dark:text-brand-gray-3">
                {{ formattedCurrencies || "---" }}
              </span>
            </li>
            <li class="font-medium dark:text-brand-white-1">
              Languages:
              <span class="font-normal dark:text-brand-gray-3">
                {{ formattedLanguages || "---" }}
              </span>
            </li>
          </ul>
          <div class="mb-8 lg:mb-0">
            <h2 class="mb-2 font-bold dark:text-brand-white-1">Border Countries:</h2>
            <div v-if="borderCountries.length" class="flex flex-wrap gap-3">
              <router-link
                v-for="borderCountry in borderCountries"
                :key="borderCountry.cca3"
                :to="`/country/${borderCountry.cca3}`"
                class="inline-block rounded bg-brand-white-1 px-8 py-2 text-center text-brand-gray-1 shadow-dark-2 hover:bg-brand-gray-2 dark:bg-brand-dark-1 dark:text-brand-white-1 dark:hover:bg-brand-dark-3"
              >
                {{ borderCountry.name.common }}
              </router-link>
            </div>

            <p v-else class="dark:text-brand-gray-3">There are no borders.</p>
          </div>
        </div>
      </div>
    </section>

    <section v-else>
      <content-loader
        viewBox="0 0 700 300"
        :primary-color="darkMode ? '#334450' : '#BED4F3'"
        :secondary-color="darkMode ? '#364956' : '#D9E8FF'"
      >
        <rect x="55" y="42" rx="16" ry="16" width="274" height="216" />
        <rect x="412" y="113" rx="3" ry="3" width="102" height="7" />
        <rect x="402" y="91" rx="3" ry="3" width="178" height="6" />
        <rect x="405" y="139" rx="3" ry="3" width="178" height="6" />
        <rect x="416" y="162" rx="3" ry="3" width="102" height="7" />
        <rect x="405" y="189" rx="3" ry="3" width="178" height="6" />
        <rect x="406" y="223" rx="14" ry="14" width="72" height="32" />
        <rect x="505" y="224" rx="14" ry="14" width="72" height="32" />
        <rect x="376" y="41" rx="3" ry="3" width="231" height="29" />
      </content-loader>
    </section>
  </main>
</template>

<script>
import { mapState } from "pinia";

import { getCountry, getBorderCountries } from "@/api/getCountries.js";
import { useUserStore } from "@/stores/user";

import { ContentLoader } from "vue-content-loader";

export default {
  name: "TheCountry",
  components: {
    ContentLoader,
  },
  data() {
    return {
      country: {},
      borderCountries: [],
      countriesAndColorsReady: false,
    };
  },
  computed: {
    ...mapState(useUserStore, ["darkMode", "searchedCountry", "searchedRegion"]),
    backgroundStyleCountry() {
      return { backgroundColor: `rgb(${this.country.flagColor.join(",")}, 0.5)` };
    },
    getNativeName() {
      const hasNativeName = this.country.name.nativeName;
      return hasNativeName
        ? Object.values(this.country.name.nativeName)[0].official
        : this.country.name.official;
    },
    formattedPopulation() {
      return new Intl.NumberFormat("en-US").format(this.country.population);
    },
    formattedCurrencies() {
      const hasCurrencies = this.country.currencies;
      let formattedCurrencies = "";

      if (hasCurrencies) {
        formattedCurrencies = Object.values(this.country.currencies)
          .map((currency) => currency.name)
          .join(", ");
      }

      return hasCurrencies ? formattedCurrencies : "---";
    },
    formattedLanguages() {
      const languages = this.country.languages;
      return languages ? Object.values(this.country.languages).join(", ") : "---";
    },
  },
  watch: {
    async $route() {
      this.countriesAndColorsReady = false;
      this.getData();
    },
  },
  async created() {
    this.getData();
  },
  methods: {
    async getData() {
      this.country = await getCountry(this.$route.params.id);

      if (this.country.borders) {
        this.borderCountries = await getBorderCountries(this.country.borders);
        this.countriesAndColorsReady = true;
        return;
      }

      this.countriesAndColorsReady = true;
    },
  },
};
</script>
