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
              @click="onClick(item.value)"
            />
          </div>
          <FormSelect
            v-model="filter"
            :options="sort"
            label-key="text"
            value-key="value"
            class="shrink-0 min-w-[180px]"
          />
        </div>
        <div
          v-if="buttons[activeSection]?.fetchLoading"
          class="flex flex-col gap-6 mt-8"
        >
          <BlockLoaderSpecialReports v-for="item in 5" :key="item" />
        </div>
        <template v-else>
          <div>
            <div
              v-if="buttons[activeSection]?.data?.length"
              class="flex flex-col gap-6 mt-8"
            >
              <CardsPopularCard
                v-for="(item, i) in buttons[activeSection]?.data"
                :key="i"
                :news="item"
                :link="buttons[activeSection]?.link"
              />
            </div>
            <div v-else class="mt-8 w-full h-full">
              <CommonNoData class="w-full" />
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
          @click="loadMore"
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
import dayjs from 'dayjs'
import { useI18n } from 'vue-i18n'

import { getSevenDaysBeforeToday } from '~/helpers'
import { useAuthorsStore } from '~/store/authors'
import { useColumnsStore } from '~/store/columns'
import { useDiscussionsStore } from '~/store/discussions'
import { useNewsStore } from '~/store/news'
import { usePhotoReportsStore } from '~/store/photoReports'
import { useSpecialReportsStore } from '~/store/specialReports'

const newsStore = useNewsStore()
const columnsStore = useColumnsStore()
const specialReportsStore = useSpecialReportsStore()
const photoReportsStore = usePhotoReportsStore()
const authorsStore = useAuthorsStore()
const discussionsStore = useDiscussionsStore()
// components

const { t } = useI18n()
const router = useRouter()
const route = useRoute()

const filter = ref(route.query?.filter || 'for_a_whole_time')

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
    text: t('for_a_week'),
    value: 'for_a_week',
  },
  {
    text: t('for_a_whole_time'),
    value: 'for_a_whole_time',
  },
])
const list = computed(() => newsStore.news)
const activeSection = ref(route.query?.section || 'news')
const buttons = reactive({
  [Sections.news]: {
    text: t('news'),
    value: 'news',
    btnLoading: false,
    link: 'news',
    dataCount: computed(() => newsStore.newsListCount),
    data: computed(() => newsStore.newsList),
    fetchLoading: computed(() => newsStore.loading),
    params: {
      ...newsStore.params,
      is_popular: true,
      published_at__before: undefined,
      published_at__after: undefined,
      // hashtags__slug: undefined,
      // model_type: undefined,
      // search: undefined,
    },
    fetcher: newsStore.fetchNewsList,
    get isActive() {
      return this.value == activeSection.value
    },
  },
  [Sections.articles]: {
    text: 'Статьи',
    value: 'articles',
    btnLoading: false,
    link: 'article-authors',
    dataCount: computed(() => authorsStore.articlesCount),
    data: computed(() => authorsStore.articles),
    fetchLoading: computed(() => authorsStore.articlesLoading),
    params: {
      ...newsStore.params,
      is_popular: true,
      published_at__before: undefined,
      published_at__after: undefined,
    },
    fetcher: authorsStore.fetchAuthorArticles,
    get isActive() {
      return this.value == activeSection.value
    },
  },
  [Sections.photo]: {
    text: 'Фоторепортажи',
    value: 'photo',
    link: 'photo-reports',
    btnLoading: false,
    dataCount: computed(() => photoReportsStore.count),
    data: computed(() => photoReportsStore.reports),
    fetchLoading: computed(() => photoReportsStore.loading),
    params: {
      ...photoReportsStore.params,
      is_popular: true,
      published_at__before: undefined,
      published_at__after: undefined,
    },
    fetcher: photoReportsStore.fetchPhotoReports,
    get isActive() {
      return this.value == activeSection.value
    },
  },
  [Sections.specialReports]: {
    text: 'Спецрепортажи',
    value: 'specialReports',
    btnLoading: false,
    link: 'special-reports',
    dataCount: computed(() => specialReportsStore.count),
    data: computed(() => specialReportsStore.specialReports),
    fetchLoading: computed(() => specialReportsStore.loading),
    params: {
      ...specialReportsStore.params,
      is_popular: true,
      published_at__before: undefined,
      published_at__after: undefined,
    },
    fetcher: specialReportsStore.fetchSpecialReports,
    get isActive() {
      return this.value == activeSection.value
    },
  },
  [Sections.columns]: {
    text: 'Колонки',
    value: 'columns',
    btnLoading: false,
    dataCount: computed(() => columnsStore.columns.length),
    data: computed(() => columnsStore.columns),
    fetchLoading: computed(() => newsStore.loading),
    params: {
      ...columnsStore.params,
      is_popular: true,
      published_at__before: undefined,
      published_at__after: undefined,
    },
    fetcher: columnsStore.fetchColumns,
    get isActive() {
      return this.value == activeSection.value
    },
  },
  [Sections.discussions]: {
    text: 'Разборы',
    value: 'discussions',
    btnLoading: false,
    link: 'analysis',
    dataCount: computed(() => discussionsStore.count),
    data: computed(() => discussionsStore.discussions),
    fetchLoading: computed(() => discussionsStore.loading),
    params: {
      ...discussionsStore.params,
      is_popular: true,
      published_at__before: undefined,
      published_at__after: undefined,
    },
    fetcher: discussionsStore.fetchDiscussions,
    get isActive() {
      return this.value == activeSection.value
    },
  },
})
const breadCrumbLinks = computed(() => [
  { title: t('popular'), link: '/popular' },
])

function updateQueries(name: string, value: string) {
  const queries = {
    ...route.query,
    [name]: value,
  }
  router.replace({ query: queries })
}

watch(
  () => filter.value,
  (val) => {
    filterMaintainer()
    fetchData(true, true)
    updateQueries('filter', val)
  }
)

function filterMaintainer() {
  if (filter.value == 'for_a_week') {
    buttons[activeSection.value].params.published_at__after =
      getSevenDaysBeforeToday()
    buttons[activeSection.value].params.published_at__before = dayjs(
      new Date()
    ).format('YYYY.MM.DD')
  } else {
    buttons[activeSection.value].params.published_at__after = undefined
    buttons[activeSection.value].params.published_at__before = undefined
  }
}
function loadMore() {
  buttons[activeSection.value].btnLoading = true
  buttons[activeSection.value].params.offset += 5
  buttons[activeSection.value].fetcher(
    buttons[activeSection.value]?.params,
    true
  )
  buttons[activeSection.value].btnLoading = false
}
function onClick(value: string) {
  activeSection.value = value
  updateQueries('section', value)
  if (buttons[activeSection.value]?.data?.length == 0) {
    fetchData()
  }
}
function fetchData(force?: boolean, filter?: boolean) {
  filterMaintainer()
  buttons[activeSection.value].fetcher?.(
    buttons[activeSection.value]?.params,
    force,
    filter
  )
}

fetchData()
</script>
