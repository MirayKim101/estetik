import { defineStore } from "pinia";
import axios from "axios";
import { headersGet, urlClinicks } from "../util";
export const useFeedBack = defineStore("FeedBack", {
  state: () => ({
    feedbacks: null,
  }),
  actions: {
    async getFeedBack(limit, offset) {
      try {
        const response = await axios.get(
          `${urlClinicks}feedbacks/?limit=${limit}&offset=${offset}`,
          headersGet
        );

        if (response.status === 200 || response.data) {
          const result = response.data.results.reverse();
          result.forEach((item) => {
            item.created_at = new Date(item.created_at).toLocaleDateString();
            item.textOverflow = item.text.length > 130;
            item.showFullText = false;
          });

          this.feedbacks = [...result];
        }
      } catch (e) {
        console.error("Ошибка в файле Feedback(get)", e);
      }
    },
    async postFeedBack(review) {
      try {
        let response = await axios.post(`${urlClinicks}feedbacks/`, review, {
          accept: "application/json",
          authorization: "Basic YWRtaW4xMjM6YWRtaW4xMjM=",
          "X-CSRFToken":
            "PbaUeeNc2YT26KnCK4blwmtG5Q8ce7nqhpKx1d9Unn6xxEqKGsuOcUjWpe0YtAku",
          "Content-Type": "application/json",
          body: JSON.stringify(),
        });
        let result = response;
      } catch (e) {
        console.error(e);
      }
    },
  },


});
