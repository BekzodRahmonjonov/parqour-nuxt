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
      <SectionsAuthor
        class="py-6 lg:py-10"
        v-bind="{ authorsData: authorsList }"
      />
<!--      <SectionsReports :data="specialReports" />-->
      <CommonAdBanner
        image="/images/advertising/yellow.png"
        class="pt-6 lg:pt-10"
      />
      <SectionsPhotoReports class="pt-6 lg:pt-10" />
      <SectionsPodcasts class="py-6 lg:py-10" />
      <SectionsInterviews
        class="pb-6 lg:pb-10"
        v-bind="{ interviewData: interviewList }"
      />
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
import { useSpecialReportsStore } from '~/store/special-reports'

const homeStore = useHomeStore()
const reportsStore = useSpecialReportsStore()
  reportsStore.fetchSpecialReports()
const specialReports = computed(() => reportsStore.specialReports)
const newsList = computed(() => homeStore.newsList)
const popularList = computed(() => homeStore.popularList)
const discussionList = computed(() => homeStore.discussionList)
const interviewList = computed(() => homeStore.interviewList)
const authorsList = computed(() => homeStore.authorsList)

const loading = ref(true)

Promise.allSettled([
  homeStore.fetchNewsList(),
  homeStore.fetchPopularList(),
  homeStore.fetchDiscussionList(),
  homeStore.fetchInterviewList(),
  homeStore.fetchAuthorsList(),
]).finally(() => {
  loading.value = false
})
</script>
