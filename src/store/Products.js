import { defineStore } from "pinia";
import axios from "axios";
import { headersGet, product } from "../util";

export const useProducts = defineStore("Products", {
  state: () => ({
    products: [],
    categories: null,
    manufactures: null,
    savedQueryParams: {},
    min: null,
    max: null,
    count: 0,
  }),
  actions: {
    async getProducts(filter = {}) {
      Object.assign(this.savedQueryParams, filter);
      const params = new URLSearchParams();

      for (const key in this.savedQueryParams) {
        const values = this.savedQueryParams[key];
        if (Array.isArray(values)) {
          params.append(key, values.join(","));
        } else {
          if (values !== null && values !== undefined) {
            params.append(key, values);
          }
        }
      }

      const queryString = params.toString();

      try {
        const response = await axios.get(
          `${product}?${queryString}`,
          headersGet
        );
        const result = response.data.results;
        this.count = response.data.count;
        this.products = result;
      } catch (e) {
        console.log(e, "Ошибка в файле getProducts");
      }
    },

    async getRecommendedProducts() {
      const randomOffset = Math.floor(Math.random() * 24) + 1;
      await this.getProducts({ limit: 12, offset: randomOffset });
      return this.products.sort(() => Math.random() - 0.5);
    },

    async getProductsCategories() {
      try {
        const response = await axios.get(`${product}categories/`, headersGet);
        const result = response.data.results;
        this.categories = result;
      } catch (e) {
        console.log(e, "Ошибка в файле getProductsCategories");
      }
    },

    async getProductsManufactures() {
      try {
        const response = await axios.get(`${product}manufactures`, headersGet);
        const result = response.data.results;
        this.manufactures = result;
      } catch (e) {
        console.log(e, "Ошибка в файле getProductsManufactures");
      }
    },

    filterProducts(filters) {
      const { priceUp, priceDown } = filters;
      if (priceUp) {
        this.products.sort((a, b) => a.price - b.price);
      }

      if (priceDown) {
        this.products.sort((a, b) => b.price - a.price);
      }

      if (!priceUp && !priceDown) {
        this.products.sort((a, b) => a.id - b.id);
      }
    },

    async getMinMax() {
      try {
        const response = await axios.get(`${product}`, headersGet);
        this.results = response.data.results;
        const prices = this.results.map((product) => product.price);
        this.min = Math.min(...prices);
        this.max = Math.max(...prices);
      } catch (e) {
        console.log(e, "Ошибка в файле getMinMax");
      }
    },
  },
});
