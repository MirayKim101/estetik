import { defineStore } from "pinia";
import axios from "axios";
import { headersGet, urlClinicks } from "../util";
export const usePhotogalleries = defineStore("Photogalleries", {
  state: () => ({
    images: null,
    categories: null,
  }),
  actions: {
    async getImages(category_id = null) {
      let url = `${urlClinicks}photogalleries/`;
      if (category_id) {
        url += `?category_id=${category_id}`;
      }
      try {
        const response = await axios.get(url, headersGet);
        this.images = response.data.results;
      } catch (e) {
        console.error("Ошибка в файле Photogalleries (getImages)", e);
      }
    },

    async getPhotoCategories() {
      try {
        const response = await axios.get(
          `${urlClinicks}photogallery-categories/`,
          headersGet
        );
        this.categories = response.data.results;
      } catch (e) {
        console.error("Ошибка в файле Photogalleries(getPhotoCategories)", e);
      }
    },
  },
});
