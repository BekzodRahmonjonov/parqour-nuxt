<template>
  <div>
    <LayoutHeaderBreakingNews />
    <div class="pt-8">
      <SectionsLatestNews />
      <SectionsMainNews v-bind="{ newsData: newsList, discussionList }" />
      <SectionsNews class="py-6 lg:py-10" :news-data="newsList" />
      <CommonAdBanner image="/images/advertising/adver.png" />
      <SectionsAuthor
        class="py-6 lg:py-10"
        v-bind="{ authorsData: authorsArticleList, authorsList, mediaList }"
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
        :interview-data="interviewList"
      />
      <CommonAdBanner
        image="/images/advertising/airways.png"
        class="pb-6 lg:pb-10"
      />
      <SectionsColumns class="pb-6 lg:pb-10" />
      <SectionsSocial />
      <SectionsAnalysis
        class="py-6 lg:py-10"
        v-bind="{ discussionData: discussionList }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHomeStore } from '~/store'
import { useSpecialReportsStore } from '~/store/special-reports'

const {
  fetchNewsList,
  fetchDiscussionList,
  fetchInterviewList,
  fetchAuthorsList,
  fetchPopularList,
  fetchAuthorsArticlesList,
  fetchSocialMediaList,
} = useHomeStore()
const reportsStore = useSpecialReportsStore()
const homeStore = useHomeStore()

const specialReports = computed(() => reportsStore.specialReports)
const newsList = computed(() => homeStore.newsList)
const popularList = computed(() => homeStore.popularList)
const discussionList = computed(() => homeStore.discussionList)
const interviewList = computed(() => homeStore.interviewList)
const authorsList = computed(() => homeStore.authorsList)
const authorsArticleList = computed(() => homeStore.authorsArticleList)
const mediaList = computed(() => homeStore.mediaList)

const loading = ref(true)

Promise.allSettled([
  reportsStore.fetchSpecialReports(),
  fetchNewsList(),
  // fetchPopularList(),
  fetchDiscussionList(),
  fetchInterviewList(),
  fetchAuthorsList(),
  fetchAuthorsArticlesList(),
  fetchSocialMediaList(),
]).finally(() => {
  loading.value = false
})
</script>
