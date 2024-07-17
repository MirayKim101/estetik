import { defineStore } from "pinia";
import axios from "axios";
import { headersGet, urlClinicks } from "../util";
export const useActionList = defineStore("Action", {
  state: () => ({
    actionList: null,
  }),
  actions: {
    async getActions() {
      try {
        const response = await axios.get(`${urlClinicks}actions/`, headersGet);

        if (response.status === 200 || response.data) {
          let result = await response.data;
          this.actionList = result;
        }
      } catch (e) {
        console.error("Ошибка в файле Actions", e);
      }
    },
  },
});
