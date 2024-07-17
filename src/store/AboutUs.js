import { defineStore } from "pinia";
import axios from "axios";
import { headersGet, urlClinicks } from "../util";
export const useAboutUs = defineStore("AboutUs", {
  state: () => ({
    about: null,
  }),
  actions: {
    async getAbout() {
      try {
        const response = await axios.get(
          ` ${urlClinicks}about-us/`,
          headersGet
        );

        if (response.status === 200 || response.data) {
          const result = response.data;
          this.about = { ...result };
        }
      } catch (e) {
        console.error("Ошибка в файле AboutUs", e);
      }
    },
  },
});
