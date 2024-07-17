import { defineStore } from "pinia";
import axios from "axios";
import { headersGet, urlClinicks } from "../util";
export const useLicenes = defineStore("Licenses", {
  state: () => ({
    licensesList: null,
  }),
  actions: {
    async getLicenses() {
      try {
        let response = await axios.get(`${urlClinicks}licenses/`, headersGet);
        if (response.status === 200 || response.data) {
          let result = [...response.data.results];
          this.licensesList = result;
        }
      } catch (e) {
        console.log("Ошибка в файле Licenses", e);
      }
    },
  },
});
