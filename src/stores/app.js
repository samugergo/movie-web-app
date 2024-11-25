// Utilities
import { get } from '@/services/movieService'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    catalogList: [],
    page: 0,
    type: 'movie',
    order: 'popular',
  }),

  actions: {
    async fetchCatalogList () {
      this.catalogList = await get(this.page, this.type, this.order);
      this.page++;
    },

    async init() {
      if (!this.catalogList.length) {
        await this.fetchCatalogList();
      }
    }
  },
})
