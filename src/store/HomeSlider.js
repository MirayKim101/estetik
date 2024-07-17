import { defineStore } from "pinia";
import axios from "axios";
import { headersGet, urlClinicks } from "../util";
export const useHomeSlider = defineStore("HomeSlider", {
  state: () => ({
    homeSlider: null,
  }),
  actions: {
    async getHomeSlides() {
      try {
        const response = await axios.get(
          `${urlClinicks}home-slider/`,
          headersGet
        );

        if (response.status === 200 || response.data) {
          const result = await response.data;
          this.homeSlider = result;
        }
      } catch (e) {
        console.error("Ошибка в файле HomeSlider", e);
      }
    },
  },
});
