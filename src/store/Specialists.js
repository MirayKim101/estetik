import { defineStore } from "pinia";
import axios from "axios";
import { headersGet, urlClinicks } from "../util";

export const useSpecialists = defineStore("Specialists", {
  state: () => ({
    specialists: null,
    specialistId: null,
  }),
  actions: {
    async getSpecialists() {
      try {
        let response = await axios.get(`${urlClinicks}specialists`, headersGet);
        if (response.status === 200 || response.data) {
          let result = [...response.data.results];
          this.specialists = result;
        }
      } catch (e) {
        console.log("Ошибка в файле Specialists (getSpecialists)", e);
      }
    },

    async getSpecialistById(id) {
      try {
        let response = await axios.get(
          `${urlClinicks}specialists/${id}`,
          headersGet
        );

        if (response.status === 200 || response.data) {
          let result = { ...response.data };
          this.specialistId = result;
          return { success: true };
        }
      } catch (e) {
        console.error("Ошибк в файле Specialists(getSpecialistById)", e);
        return { success: false, status: e.response?.status };
      }
    },
  },
});
