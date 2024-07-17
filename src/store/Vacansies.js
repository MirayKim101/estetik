import { defineStore } from "pinia";
import axios from "axios";
import { headersGet, urlClinicks } from "../util";
export const useVacansies = defineStore("vacansies", {
  state: () => ({
    vacansiesList: null,
  }),
  actions: {
    async getVacansies() {
      let response = await axios.get(`${urlClinicks}vacancies/`, headersGet);
      if (response.status == 200 || response.data) {
        const result = response.data;
        this.vacansiesList = result;
      }
    },
  },
});
