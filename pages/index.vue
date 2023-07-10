<template>
  <div>
    <LayoutHeaderBreakingNews />
    <div class="pt-8">
      <SectionsLatestNews />
      <SectionsMainNews v-bind="{ newsData: newsList, discussionList }" />
      <SectionsNews class="py-6 lg:py-10" :news-data="newsList" />
      <CommonAdBanner image="/images/advertising/adver.png" />
      <SectionsAuthor class="py-6 lg:py-10" :authors-data="authorsList" />
      <CommonAdBanner
        image="/images/advertising/yellow.png"
        class="pt-6 lg:pt-10"
      />
      <SectionsPhotoReports class="pt-6 lg:pt-10" />
      <SectionsPodcasts class="py-6 lg:py-10" />
      <SectionsInterviews
        class="pb-6 lg:pb-10"
        :interview-data="interviewList"
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
import { useHomeStore } from '~/store'
import { useSpecialReportsStore } from '~/store/special-reports'

const homeStore = useHomeStore()
const reportsStore = useSpecialReportsStore()
reportsStore.fetchSpecialReports()
const specialReports = computed(() => reportsStore.specialReports)
const newsList = computed(() => homeStore.newsList)
const discussionList = computed(() => homeStore.discussionList)
const interviewList = computed(() => homeStore.interviewList)
const authorsList = computed(() => homeStore.authorsList)

const loading = ref(true)

Promise.allSettled([
  homeStore.fetchNewsList(),
  homeStore.fetchDiscussionList(),
  homeStore.fetchInterviewList(),
  homeStore.fetchAuthorsList(),
]).finally(() => {
  loading.value = false
})
</script>
