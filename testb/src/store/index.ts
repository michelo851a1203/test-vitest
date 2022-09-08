import { defineStore } from "pinia";
import TestApi from "../api";

export const indexStore = defineStore('indexStore', {
  state: () => {
    return {}
  },
  actions: {
    async testApiHandler() {
      try{
        const testApi = TestApi();
        const result = await testApi.testApiService();
        console.log(result);
      } catch(error) {
        console.error(error);
      }
    }
  },
})
