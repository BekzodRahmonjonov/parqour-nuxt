<template>
  <div class="pb-16">
    <CommonBreadcrumb :menu="breadcrumbLinks" />
    <CommonPageWrapper
      :title="$t('podcasts')"
      :text="$t('podcast_text')"
      class="mt-8 container flex flex-col"
    >
      <div class="grid grid-cols-12 gap-8">
        <client-only>
          <CardsPodcast
            :to="'podcasts/' + item.slug"
            v-for="(item, index) in podcastsList"
            :key="index"
            :data="item"
            class="col-span-12 md:col-span-6 lg:col-span-4"
            :class="{ '!col-span-12 !md:max-h-[472px]': index == 0 }"
            :isSingleBanner="index == 0"
          />
        </client-only>
      </div>
      <CommonLoadButton
        class="mt-8"
        v-if="podcastsStore.next"
        :loading="isLoading"
        text="Загрузить еще"
        @click="loadMore"
      />
      <template #aside>
        <img src="https://picsum.photos/200/400" class="w-full mt-11" alt="" />
      </template>
    </CommonPageWrapper>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { usePodcastsStore } from '~/store/podcasts'
import { IPodcast } from '~/types/podcast'

const podcastsStore = usePodcastsStore()
const podcastsList = ref<IPodcast[]>([])

podcastsStore.getPodcasts.then((res) => {
  console.log(res, 'REspo')
  podcastsList.value = res
})

const { t } = useI18n()
const preloader = ref(false)
const isLoading = ref(false)

const loadMore = () => {
  isLoading.value = true
  podcastsStore.params.offset += 10

  setTimeout(() => {
    isLoading.value = false
    podcastsStore.fetchPodcasts(true)
  }, 1000)
}

setTimeout(() => {
  preloader.value = false
}, 1000)

const breadcrumbLinks = computed(() => [
  { title: t('podcasts'), link: '/popular' },
])
</script>
