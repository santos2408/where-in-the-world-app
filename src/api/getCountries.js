import ColorThief from "/node_modules/colorthief/dist/color-thief.mjs";
import getDominantImageColor from "@/utils/getDominantImageColor.js";

const getCountries = async () => {
  try {
    const url = `https://restcountries.com/v3.1/all`;
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

    const countriesColorsPromises = alphabeticalOrderedCountries.map(({ flags }) =>
      getDominantImageColor(flags.png, colorThief),
    );
    const countriesColors = await Promise.all(countriesColorsPromises);

    const formattedCountries = alphabeticalOrderedCountries.map((country, index) => {
      return { ...country, flagColor: countriesColors[index] };
    });

    return formattedCountries;
  } catch ({ error, message }) {
    alert(`${error}: ${message}`);
  }
};

const getCountry = async (param) => {
  try {
    const url = `https://restcountries.com/v3.1/alpha/${param}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("There was not possible get information about the countries.");
    }

    const colorThief = new ColorThief();
    const [country] = await response.json();
    const countryColor = await getDominantImageColor(country.flags.png, colorThief);

    country.flagColor = countryColor;

    return country;
  } catch ({ error, message }) {
    alert(`${error}: ${message}`);
  }
};

const getBorderCountries = async (borderCountries) => {
  let allPromises = [];

  borderCountries.forEach(async (borderCountry) => allPromises.push(getCountry(borderCountry)));

  const promises = await Promise.allSettled(allPromises);
  const fulfilledPromises = promises.filter((promise) => promise.status === "fulfilled");
  const countries = fulfilledPromises.map((fulfilledPromise) => fulfilledPromise.value);

  return countries;
};

export { getCountries, getCountry, getBorderCountries };
