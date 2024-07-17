import { defineStore } from "pinia";
import axios from "axios";
import { headersGet, urlClinicks } from "../util";

export const useNews = defineStore("useNews", {
  state: () => ({
    newsArr: [],
    article: null,
    categories: null,
    currentLimit: 9,
    totalNewsCount: 0,
    loadStep: 9,
  }),
  actions: {
    async getNews(isUnlimited = false, categoryId = null) {
      if (isUnlimited) {
        this.currentLimit += this.loadStep;
      }
      let url = `${urlClinicks}news/`;
      const params = [];
      if (categoryId) {
        params.push(`category_id=${categoryId}`);
      }
      params.push(`limit=${this.currentLimit}`);
      url += `?${params.join("&")}`;
      const response = await axios.get(url, headersGet);
      this.newsArr = response.data.results;
      this.totalNewsCount = response.data.count;
    },
    async getArticle(id) {
      try {
        const response = await axios.get(
          `${urlClinicks}news/${id}`,
          headersGet
        );
        if (response.status === 200 || response.data) {
          this.article = response.data;
          return { success: true };
        }
      } catch (e) {
        console.error("Ошибка в файле News(getArticle)", e);
        return { success: false, status: e.response?.status };
      }
    },
    async getCategories() {
      const response = await axios.get(
        `${urlClinicks}news-categories/`,
        headersGet
      );
      this.categories = response.data.results;
    },
  },
});
