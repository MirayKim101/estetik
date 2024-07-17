import { defineStore } from "pinia";
import axios from "axios";
import { headersGet, services } from "../util";
export const useServicePage = defineStore("ServicePage", {
  state: () => ({
    service: null,
  }),
  actions: {
    async getService(id) {
      try {
        const response = await axios.get(`${services}${id}`, headersGet);
        if (response.status === 200 || response.data) {
          this.service = response.data;
          return { success: true };
        }
      } catch (e) {
        console.error("Ошибка в файле ServicePage", e);
        return { success: false, status: e.response?.status };
      }
    },
  },
});
