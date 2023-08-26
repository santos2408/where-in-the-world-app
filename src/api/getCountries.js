import ColorThief from "/node_modules/colorthief/dist/color-thief.mjs";
import getDominantImageColor from "@/utils/getDominantImageColor.js";

const url = "https://restcountries.com/v3.1/all";

const getCountries = async () => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("There was not possible get information about the countries.");
    }

    const colorThief = new ColorThief();
    const countries = await response.json();
    const alphabeticalOrderedCountries = countries.sort((firstCountry, secondCountry) => {
      return firstCountry.name.common
        .toLowerCase()
        .localeCompare(secondCountry.name.common.toLowerCase());
    });

    const promises = alphabeticalOrderedCountries.map(({ flags }) =>
      getDominantImageColor(flags.png, colorThief),
    );
    const countriesColors = await Promise.all(promises);

    return { countries: alphabeticalOrderedCountries, countriesColors };
  } catch ({ error, message }) {
    alert(`${error}: ${message}`);
  }
};

export default getCountries;
