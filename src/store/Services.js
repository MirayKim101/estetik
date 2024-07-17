import { defineStore } from "pinia";
import axios from "axios";
import { headersGet, services } from "../util";
export const useServices = defineStore("Services", {
  state: () => ({
    services: null,
    categories: null,
    selectedCategory: null,
  }),
  actions: {
    async getServices(category) {
      if (!category) {
        try {
          const response = await axios.get(`${services}`, headersGet);
          if (response.status === 200 || response.data) {
            const result = response.data.results;
            this.services = result;
          }
        } catch (e) {
          console.error("Ошибка в файле Services(getServices)", e);
        }
      } else {
        try {
          const response = await axios.get(
            `${services}?category_id=${category}`,
            headersGet
          );
          if (response.status === 200 || response.data) {
            const result = response.data.results;
            this.services = result;
          }
        } catch (e) {
          console.error("Ошибка в файле Services(getServices)", e);
        }
      }
    },
    async getCategories() {
      const response = await axios.get(`${services}categories/`, headersGet);
      this.categories = response.data.results;
    },
    selectCategory(id) {
      this.selectedCategory = id;
    },
  },
});
