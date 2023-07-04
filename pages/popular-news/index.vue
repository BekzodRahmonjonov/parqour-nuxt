<template>
  <div>
    <CommonBreadcrumb :menu="menu" />
    <div class="container pb-16">
      <CommonPageWrapper class="mt-8">
        <h1 class="page-title">Популярное</h1>
        <div class="flex items-center gap-3 flex-wrap mt-4">
          <CommonFilter v-for="(item, i) in filters" :key="i" :text="item" />

          <CommonDropdown
            class="bg-[#F5F6F9] rounded-md md:ml-auto dark:bg-blue-800"
            @change="onChange"
            @clickAway="onClickAway"
            buttonClass="py-2.5 px-3"
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
              @click="onClick(i)"
              class="p-3 hover:bg-[#F5F6F9] dark:text-white dark:hover:bg-[#a2bcde29] rounded-md font-medium leading-130 text-blue-700 transition-300"
            >
              {{ item }}
            </li>
          </CommonDropdown>
        </div>
        <div class="flex flex-col gap-6 mt-8">
          <CardsSpecialReportsSingle
            v-for="(item, index) in copyOfspecialReports"
            :key="index"
            :data="item"
            class="min-h-[180px]"
            badge-text="Экономика"
          />
          <CardsSpecialReportsSingle
            v-for="(item, index) in copyOfspecialReports"
            :key="index"
            :data="item"
            class="min-h-[180px]"
            badge-text="Экономика"
          />
        </div>

        <CommonButton
          @click="loadMore"
          :loading="isLoading"
          class="w-full text-blue-600 !bg-[#52618f1a] font-medium leading-125 mt-8 dark:text-white"
        >
          <span class="icon-double rotate-90 mr-[10px] text-xl"></span>
          {{ $t('load_more') }}</CommonButton
        >

        <template #aside>
          <img src="https://picsum.photos/200/400" class="w-full" alt="" />
        </template>
      </CommonPageWrapper>
    </div>
  </div>
</template>
<script setup lang="ts">
import { specialReports } from '~/data'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const sort = ref(['За неделью', 'За все время'])
const activeSortI = ref(0)
const filters = ['Все', 'Новости', 'Статьи', 'Фоторепортажи', 'Колонки']
const activeDropdown = ref(false)
const menu = [{ title: t('popular'), link: '/popular' }]

const onClick = (index: number) => {
  activeSortI.value = index
}

const onChange = (e) => {
  activeDropdown.value = e
}

const onClickAway = () => {
  activeDropdown.value = false
}

const copyOfspecialReports = ref([...specialReports])
const isLoading = ref(false)
let counter = 4

const loadMore = () => {
  isLoading.value = true
  const additionData = {
    id: 1,
    title: 'Что происходит с ценами на аренду жилья в Ташкенте',
    image: '/images/news/bulid.jpg',
    author: 'Дарья Пензова',
    created_at: '2023-06-07',
    views_count: 1234,
    userName: 'Абдулла',
  }

  setTimeout(() => {
    isLoading.value = false
    copyOfspecialReports.value.push(additionData)
  }, 1000)
}
</script>
