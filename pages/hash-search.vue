<template>
  <div class="container pb-16">
    <CommonPageWrapper :title="`#${route.query?.hash}`" class="mt-8">
      <div class="flex items-center gap-3">
        <CommonFilter
          v-for="(item, i) in filters"
          :key="i"
          class="mt-4"
          :text="item.text"
          :class="{
            'bg-blue-200 text-white dark:text-blue-600 dark:bg-white':
              item.isActive,
          }"
          @click="makeActive(i)"
        />
      </div>
      <div v-if="newsStore.searchListLoading" class="flex flex-col gap-6 mt-8">
        <BlockLoaderSpecialReports v-for="item in 4" :key="item" />
      </div>
      <div v-else class="grid gap-6 mt-6">
        <CardsPopularCard v-for="(item, i) in list" :key="i" :news="item" />
      </div>

      <div
        v-if="newsStore.newsSearchListCount > newsStore.newsSearchList?.length"
        ref="target"
      ></div>
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
import { useNewsStore } from '~/store/news'

const newsStore = useNewsStore()

const route = useRoute()
const loading = ref(false)
const target = ref(null)
const preloader = ref(true)

newsStore.params.hashtags__slug = String(route.query?.hash)

newsStore.fetchNews(newsStore.params)

const list = computed(() => newsStore.newsSearchList)

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
  newsStore.params.offset += 5
  newsStore.fetchNews(newsStore.params).finally(() => {
    setTimeout(() => {
      loading.value = false
    }, 300)
  })
}

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      loadMore()
    }
  }
)

setTimeout(() => {
  preloader.value = false
}, 1000)
</script>

<style scoped></style>
