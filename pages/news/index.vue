<template>
  <div>
    <CommonBreadcrumb :menu="breadCrumbLinks" />
    <div class="container pb-16">
      <CommonPageWrapper class="mt-8">
        <h1 class="page-title">{{ $t('popular') }}</h1>
        <div class="flex items-center gap-3 flex-wrap mt-4">
          <CommonFilter
            v-for="(item, i) in filters"
            :key="i"
            :text="item.text"
            :class="{
              'bg-blue-200 text-white dark:text-blue-600 dark:bg-white':
                item.isActive,
            }"
            @click="makeActive(i)"
          />

          <CommonDropdown
            class="bg-[#F5F6F9] rounded-md md:ml-auto dark:bg-blue-800"
            button-class="py-2.5 px-3"
            @change="onChange"
            @clickAway="onClickAway"
          >
            <template #head>
              <div
                class="flex dark:text-white items-center gap-[23px] font-medium leading-130 text-blue-700"
              >
                <span :key="activeSortI">
                  {{ sort[activeSortI] }}
                </span>

                <span
                  class="icon-icon-chevron-down text-sm transition-200"
                  :class="{ '-rotate-180': activeDropdown }"
                ></span>
              </div>
            </template>
            <li
              v-for="(item, i) in sort"
              :key="i"
              class="p-3 hover:bg-[#F5F6F9] dark:text-white dark:hover:bg-[#a2bcde29] rounded-md font-medium leading-130 text-blue-700 transition-300"
              @click="onClick(i)"
            >
              {{ item }}
            </li>
          </CommonDropdown>
        </div>
        <div v-if="newsStore.loading" class="flex flex-col gap-6 mt-8">
          <BlockLoaderSpecialReports v-for="item in 5" :key="item" />
        </div>
        <div v-else class="flex flex-col gap-6 mt-8">
          <CardsPopularCard v-for="(item, i) in list" :key="i" :news="item" />
        </div>

        <CommonButton
          v-if="!newsStore.loading && list?.length < newsStore.newsListCount"
          :loading="isLoading"
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
import { useI18n } from 'vue-i18n'

import { useNewsStore } from '~/store/news'

const newsStore = useNewsStore()
const { t } = useI18n()
const sort = ref(['За неделью', 'За все время'])
const activeSortI = ref(0)
const list = computed(() => newsStore.newsList)
const filters = ref([
  {
    isActive: false,
    text: 'Все',
  },
  {
    isActive: false,
    text: 'Новости',
  },
  {
    isActive: false,
    text: 'Статьи',
  },
  {
    isActive: false,
    text: 'Фоторепортажи',
  },
  {
    isActive: false,
    text: 'Колонки',
  },
])

const makeActive = (index: number) => {
  filters.value.forEach((item, i) => {
    if (index == i) {
      item.isActive = !item.isActive
    }
  })
}
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

const isLoading = ref(false)

const loadMore = () => {
  isLoading.value = true
  newsStore.params.offset += 5
  newsStore.fetchNewsList(newsStore.params, true)
  //   .finally(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 300)
  // })
}
newsStore.fetchNewsList(newsStore.params, false)
</script>
