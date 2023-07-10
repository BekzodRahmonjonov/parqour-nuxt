<template>
  <div>
    <CommonBreadcrumb :menu="breadCrumbLinks" />
    <div class="container pb-16">
      <CommonPageWrapper class="mt-8">
        <h1 class="page-title">{{ $t('popular') }}</h1>
        <div class="flex items-center gap-3 justify-between mt-4">
          <div class="flex items-center gap-3">
            <CommonFilter
              v-for="item in buttons"
              :key="item.value"
              :text="item.text"
              :class="{
                'bg-blue-200 text-white dark:text-blue-600 dark:bg-white':
                  item.isActive,
              }"
              @click="item?.onClick?.()"
            />
          </div>
          <FormSelect
            :options="sort"
            label-key="text"
            value-key="value"
            class="shrink-0 min-w-[180px]"
          />
        </div>
        <div
          v-if="!buttons[activeSection]?.data?.length"
          class="mt-8 w-full h-full"
        >
          <CommonNoData class="w-full" />
        </div>
        <template v-else>
          <div>
            <div
              v-if="buttons[activeSection]?.fetchLoading"
              class="flex flex-col gap-6 mt-8"
            >
              <BlockLoaderSpecialReports v-for="item in 5" :key="item" />
            </div>
            <div v-else class="flex flex-col gap-6 mt-8">
              <!--          <pre> {{ buttons[activeSection]?.data }} </pre>-->
              <CardsPopularCard
                v-for="(item, i) in buttons[activeSection]?.data"
                :key="i"
                :news="item"
              />
            </div>
          </div>
        </template>

        <CommonButton
          v-if="
            !buttons[activeSection].fetchLoading &&
            buttons[activeSection].data?.length <
              buttons[activeSection].dataCount
          "
          :loading="buttons[activeSection].btnLoading"
          class="w-full text-blue-600 !bg-[#52618f1a] font-medium leading-125 mt-8 dark:text-white"
          @click="buttons[activeSection]?.loadMore?.()"
        >
          <span class="icon-double rotate-90 mr-[10px] text-xl"></span>
          {{ $t('load_more') }}</CommonButton
        >
        <template #aside>
          <TempAdvetisimentBanner />
        </template>
      </CommonPageWrapper>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { useAuthorsStore } from '~/store/authors'
import { useColumnsStore } from '~/store/columns'
import { useDiscussionsStore } from '~/store/discussions'
import { usePhotoReportsStore } from '~/store/photo-reports'
import { usePopularNewsStore } from '~/store/popularNews'
import { useSpecialReportsStore } from '~/store/special-reports'

const newsStore = usePopularNewsStore()
const columnsStore = useColumnsStore()
const specialReportsStore = useSpecialReportsStore()
const photoReportsStore = usePhotoReportsStore()
const authorsStore = useAuthorsStore()
const discussionsStore = useDiscussionsStore()
// components

const { t } = useI18n()
enum Sections {
  news = 'news',
  articles = 'articles',
  photo = 'photo',
  columns = 'columns',
  specialReports = 'specialReports',
  discussions = 'discussions',
}
const sort = ref([
  {
    text: 'По дате',
    value: 'date',
  },
  {
    text: 'По популярности',
    value: 'popular',
  },
  {
    text: 'По комментариям',
    value: 'comments',
  },
])
const activeSortI = ref(0)
const list = computed(() => newsStore.news)
const activeSection = ref('news')
const buttons = reactive({
  [Sections.news]: {
    text: 'Новости',
    value: 'news',
    btnLoading: false,
    dataCount: computed(() => newsStore.newsCount),
    data: computed(() => newsStore.news),
    fetchLoading: computed(() => newsStore.loading),
    get isActive() {
      return this.value == activeSection.value
    },
    fetchData() {
      newsStore.fetchPopularNews(newsStore.params, false)
    },
    onClick() {
      activeSection.value = this.value
      if (this.data?.length === 0) {
        this.fetchData?.()
      }
    },
    loadMore() {
      this.btnLoading = true
      newsStore.params.offset += 5
      newsStore.fetchPopularNews(newsStore.params, true)
      setTimeout(() => {
        this.btnLoading = false
      }, 300)
    },
  },
  [Sections.articles]: {
    text: 'Статьи',
    value: 'articles',
    btnLoading: false,
    dataCount: computed(() => authorsStore.articlesCount),
    data: computed(() => authorsStore.articles),
    fetchLoading: computed(() => authorsStore.articlesLoading),
    get isActive() {
      return this.value == activeSection.value
    },
    fetchData() {
      authorsStore.fetchAuthorArticles(authorsStore.params, false)
    },
    onClick() {
      activeSection.value = this.value
      if (this.data?.length === 0) {
        this.fetchData?.()
      }
    },
    loadMore() {
      this.btnLoading = true
      authorsStore.params.offset += 5
      authorsStore.fetchAuthorArticles(authorsStore.params, true)
      setTimeout(() => {
        this.btnLoading = false
      }, 300)
    },
  },
  [Sections.photo]: {
    text: 'Фоторепортажи',
    value: 'photo',
    btnLoading: false,
    dataCount: computed(() => photoReportsStore.count),
    data: computed(() => photoReportsStore.reports),
    fetchLoading: computed(() => photoReportsStore.loading),
    get isActive() {
      return this.value == activeSection.value
    },
    fetchData() {
      photoReportsStore.fetchPhotoReports(specialReportsStore.params)
    },
    onClick() {
      activeSection.value = this.value
      if (this.data?.length == 0) {
        this.fetchData()
      }
    },
    loadMore() {
      this.btnLoading = true
      photoReportsStore.params.offset += 5
      photoReportsStore.fetchPhotoReports(photoReportsStore.params, true)
      setTimeout(() => {
        this.btnLoading = false
      }, 300)
    },
  },
  [Sections.specialReports]: {
    text: 'Спецрепортажи',
    value: 'specialReports',
    btnLoading: false,
    dataCount: computed(() => specialReportsStore.count),
    data: computed(() => specialReportsStore.specialReports),
    fetchLoading: computed(() => specialReportsStore.loading),
    get isActive() {
      return this.value == activeSection.value
    },
    fetchData() {
      specialReportsStore.fetchSpecialReports(specialReportsStore.params)
    },
    onClick() {
      activeSection.value = this.value
      if (this.data?.length == 0) {
        this.fetchData()
      }
    },
    loadMore() {
      this.btnLoading = true
      specialReportsStore.params.offset += 5
      specialReportsStore.fetchSpecialReports(specialReportsStore.params, true)
      setTimeout(() => {
        this.btnLoading = false
      }, 300)
    },
  },
  [Sections.columns]: {
    text: 'Колонки',
    value: 'columns',
    btnLoading: false,
    dataCount: computed(() => columnsStore.columns.length),
    data: computed(() => columnsStore.columns),
    fetchLoading: computed(() => newsStore.loading),
    get isActive() {
      return this.value == activeSection.value
    },
    fetchData() {
      console.log('fetchData: columns')
      columnsStore.fetchColumns()
    },
    onClick() {
      activeSection.value = this.value
      if (this.data?.length == 0) {
        this.fetchData()
      }
    },
    loadMore() {
      this.btnLoading = true
      // newsStore.params.offset += 5
      // newsStore.fetchPopularNews(newsStore.params, true)
      setTimeout(() => {
        this.btnLoading = false
      }, 300)
    },
  },
  [Sections.discussions]: {
    text: 'Разборы',
    value: 'discussions',
    btnLoading: false,
    dataCount: computed(() => discussionsStore.count),
    data: computed(() => discussionsStore.discussions),
    fetchLoading: computed(() => discussionsStore.loading),
    get isActive() {
      return this.value == activeSection.value
    },
    fetchData() {
      discussionsStore.fetchDiscussions(discussionsStore.params)
    },
    onClick() {
      activeSection.value = this.value
      if (this.data?.length == 0) {
        this.fetchData()
      }
    },
    loadMore() {
      this.btnLoading = true
      discussionsStore.params.offset += 5
      discussionsStore.fetchDiscussions(discussionsStore.params, true)
      setTimeout(() => {
        this.btnLoading = false
      }, 300)
    },
  },
})
const activeDropdown = ref(false)
const breadCrumbLinks = computed(() => [
  { title: t('popular'), link: '/popular' },
])
const onClick = (index: number) => {
  activeSortI.value = index
}

const onChange = (e) => {
  activeDropdown.value = e
}

const onClickAway = () => {
  activeDropdown.value = false
}

buttons[activeSection.value].fetchData?.()
</script>
