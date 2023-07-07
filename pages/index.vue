<template>
  <div>
    <LayoutHeaderBreakingNews />
    <div class="pt-8">
      <SectionsLatestNews />
      <SectionsMainNews
        v-bind="{ newsData: newsList, popularList, discussionList }"
      />
      <SectionsNews class="py-6 lg:py-10" v-bind="{ newsData: newsList }" />
      <CommonAdBanner image="/images/advertising/adver.png" />
      <SectionsAuthor class="py-6 lg:py-10" />
      <SectionsReports :data="reportsData" />
      <CommonAdBanner
        image="/images/advertising/yellow.png"
        class="pt-6 lg:pt-10"
      />
      <SectionsPhotoReports class="pt-6 lg:pt-10" />
      <SectionsPodcasts class="py-6 lg:py-10" />
      <SectionsInterviews class="pb-6 lg:pb-10" />
      <CommonAdBanner
        image="/images/advertising/airways.png"
        class="pb-6 lg:pb-10"
      />
      <SectionsColumns class="pb-6 lg:pb-10" />
      <SectionsSocial />
      <SectionsAnalysis class="py-6 lg:py-10" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reportsData } from '@/data'
import { useHomeStore } from '~/store'

const homeStore = useHomeStore()
const newsList = computed(() => homeStore.newsList)
const popularList = computed(() => homeStore.popularList)
const discussionList = computed(() => homeStore.discussionList)

const loading = ref(true)

Promise.allSettled([
  homeStore.fetchNewsList(),
  homeStore.fetchPopularList(),
  homeStore.fetchDiscussionList(),
]).finally(() => {
  loading.value = false
})
</script>
