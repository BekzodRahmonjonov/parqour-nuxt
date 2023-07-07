<template>
  <NuxtLink
    :to="`/news/${news?.slug}`"
    class="py-5 rounded-lg bg-white-100 dark:bg-dark-200 group dark:hover:bg-blue-600 transition-200"
  >
    <div class="flex gap-0.5">
      <img
        class="w-[202px] -translate-x-4 rounded-lg object-cover transition-300 group-hover:-translate-y-1"
        :src="news?.cover_image"
        alt=""
      />
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-4">
          <span
            class="border border-[#A2BCDE] dark:text-blue-100 rounded-lg leading-20 py-1 px-2.5 font-medium text-xs text-[#52618F]"
            >{{ news.model_type }}</span
          >
          <p class="text-dark text-xs leading-20 dark:text-blue-100">
            {{ news?.created_at }}
          </p>
        </div>
        <div>
          <h1
            class="text-base font-semibold text-blue-600 leading-140 dark:text-white dark:group-hover:text-blue-100 transition-200"
          >
            {{ news?.title }}
          </h1>
          <p class="text-xs leading-138 dark:text-white-100 text-blue-700">
            {{ news.subtitle }}
          </p>
        </div>
        <span
          class="mt-2 text-blue-200 text-xs font-medium flex items-center gap-1 dark:text-white"
        >
          <i class="icon-eye text-sm"></i> {{ news.views_count }}</span
        >
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { INewsSearch } from '~/types/news'

interface Props {
  news: INewsSearch
}

defineProps<Props>()
</script>

<style scoped></style>
