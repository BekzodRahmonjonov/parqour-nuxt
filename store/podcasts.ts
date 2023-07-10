import { defineStore } from 'pinia'

import { IPodcast } from '~/types/podcast'
import { IPagination, IResponse } from '~/types/common'

export const usePodcastsStore = defineStore('podcastsStore', {
  state: () => ({
    podcasts: [] as IPodcast[],
    newsCount: 0,
    contentSlug: '',
    next: null as string | null,
    params: {
      search: undefined,
      limit: 10,
      offset: 0,
    } as IPagination,
    loading: true,
  }),
  actions: {
    fetchPodcasts(force?: boolean) {
      if (!this.podcasts.length) {
        this.loading = true
      }
      if (!this.podcasts?.length || force) {
        return new Promise((resolve, reject) => {
          useApi()
            .$get<IResponse<IPodcast>>('news/PodcastList/', {
              params: {
                ...this.params,
              },
            })
            .then((res: IResponse<IPodcast>) => {
              this.newsCount = res.count
              this.next = res.next
              this.podcasts.push(...res.results)
              resolve(res)
            })
            .catch((err) => {
              console.log(err)
              reject(err)
            })
            .finally(() => {
              setTimeout(() => {
                this.loading = false
              }, 300)
            })
        })
      }
    },
  },
  getters: {
    async getPodcasts(): Promise<IPodcast[]> {
      if (this.podcasts.length === 0) {
        await this.fetchPodcasts()
      }
      return this.podcasts
    },
  },
})
