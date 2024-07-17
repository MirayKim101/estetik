import { defineStore } from "pinia";
import axios from "axios";
import { headersGet, urlClinicks } from "../util";

export const useStories = defineStore("Stories", {
  state: () => ({
    stories: [],
  }),
  actions: {
    async getStories() {
      try {
        const response = await axios.get(
          `${urlClinicks}story-categories/`,
          headersGet
        );

        if (response.status === 200 || response.data) {
          const result = response.data.results;
          this.stories = result;
        }
      } catch (e) {
        console.error("Ошибка в файле stories", e);
      }
    },
  },
});
