<template>
  <div class="container pb-16">
    <CommonPageWrapper :title="$t('search_result')" class="mt-8">
      <FormInput
        :model-value="search"
        class="transition-200 mt-4 !px-2.5 py-[10px] !absolute w-[86%] sm:w-[90%] md:w-[93%] lg:w-full right-12 z-30 !left-[3px] !top-[2px] transition-all duration-300 lg:!relative lg:!right-0 lg:!left-0 lg:!top-0"
        :placeholder="$t('search')"
        :class="[
          searchTrigger
            ? 'max-w-full opacity-100'
            : 'max-w-0 md:max-w-full opacity-0 lg:opacity-100',
        ]"
        input-class="pl-2 pr-2 mt-0.5 dark:text-white "
        prefix-class="leading-130"
        :focus="searchTrigger"
        @update:model-value="handleUpdateSearch"
        @enter="handleEnter"
      >
        <template #prefix>
          <span
            class="icon-magnifer text-base text-blue-200 dark:text-blue-100"
          />
        </template>
        <template #suffix>
          <button
            :class="{ '!opacity-100 !visible': search?.length }"
            class="text-xl leading-5 icon-close text-gray-200 hover:text-blue-150 dark:hover:text-white transition-200 opacity-0 invisible"
            @click="clear"
          />
        </template>
      </FormInput>
      <div class="flex items-center gap-3">
        <CommonFilter
          v-for="(item, i) in filters"
          class="mt-4"
          :key="i"
          :text="item.text"
          :class="{
            'bg-blue-200 text-white dark:text-blue-600 dark:bg-white':
              item.isActive,
          }"
          @click="makeActive(i)"
        />
      </div>
      <div class="flex flex-col gap-6 mt-8" v-if="preloader">
        <BlockLoaderSpecialReports v-for="item in 5" :key="item" />
      </div>
      <div v-if="search.length < 6 && !preloader" class="grid gap-6 mt-6">
        <CardsPopularCard
          v-for="(item, i) in copyOfpopularNews"
          :key="i"
          :news="item"
        />
      </div>
      <CommonNoData v-else-if="!preloader" class="mt-16" />
      <div ref="target"></div>
      <Transition name="fade">
        <div v-if="loading" class="flex-center py-10">
          <div class="dots" />
        </div>
      </Transition>
      <template #aside>
        <img src="https://picsum.photos/200/400" class="w-full" alt="" />
      </template>
    </CommonPageWrapper>
  </div>
</template>

<script setup lang="ts">
import { searchContent, popular_news } from '~/data'

const search = ref('')
const searchTrigger = ref(false)
const route = useRoute()
const loading = ref(false)
const target = ref(null)
const preloader = ref(true)

search.value = route.query?.q
// watch(route, () => {
//   console.log(route.query.q)
//   search.value = route.query.q
// })

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

function loadMore() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 1000)
}

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      loadMore()
    }
  }
)

const handleShowSearch = () => {
  search.value = ''
  searchTrigger.value = !searchTrigger.value
}
const clear = () => {
  search.value = ''
}
const handleUpdateSearch = (value: string) => {
  search.value = value
}

const handleEnter = () => {
  console.log('enter')
}

const copyOfpopularNews = ref([...popular_news])

setTimeout(() => {
  preloader.value = false
}, 1000)
</script>

<style scoped></style>
