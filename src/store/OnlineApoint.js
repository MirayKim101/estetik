import { defineStore } from "pinia";
import axios from "axios";
import { urlClinicks } from "../util";
export const useOnlineApoint = defineStore("OnlineApoint", {
  state: () => ({}),
  actions: {
    async postApoint(contact) {
      try {
        let response = await axios.post(
          `${urlClinicks}online-appointments/`,
          contact,
          {
            accept: "application/json",
            authorization: "Basic YWRtaW4xMjM6YWRtaW4xMjM=",
            "X-CSRFToken":
              "PbaUeeNc2YT26KnCK4blwmtG5Q8ce7nqhpKx1d9Unn6xxEqKGsuOcUjWpe0YtAku",
            "Content-Type": "application/json",
            body: JSON.stringify(),
          }
        );
        let result = response;
      } catch (e) {
        console.error("Ошибка в файле OnlineApoint", e);
      }
    },
  },
});
