import { defineStore } from "pinia";
import axios from "axios";
import { urlClinicks } from "../util";
export const useOnlineChiefApoint = defineStore("OnlineChiefApoint", {
  state: () => ({}),
  actions: {
    async postChiefApoint(contact) {
      try {
        let response = await axios.post(
          `${urlClinicks}contact-chief-doctor/`,
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
        if (response.status == 201) {
          let result = response;
          return true;
        }
      } catch (e) {
        console.error("Ошибка в файле chiefDoctorApoint", e);
        return false;
      }
    },
  },
});
