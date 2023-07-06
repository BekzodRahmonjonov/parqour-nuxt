<template>
  <NuxtLink
    :to="`/news/${card.id}`"
    class="cursor-pointer flex gap-6 group border-b border-solid border-white-200 dark:border-blue-200/20 lg:!border-transparent pb-3 lg:pb-0"
  >
    <div
      class="w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] rounded relative overflow-hidden shrink-0"
    >
      <img
        src="/images/news/president.png"
        alt="news-list"
        class="w-full h-full object-cover"
      />
    </div>

    <div>
      <div class="flex-y-center gap-2 lg:gap-4">
        <p
          class="border border-solid border-blue-100 rounded-md px-2 py-0.5 text-[10px] lg:text-xs leading-5 font-medium text-blue-200 dark:text-blue-100 transition-200"
        >
          {{ card?.category }}
        </p>

        <p
          class="text-[10px] lg:text-xs leading-5 text-blue-600 dark:text-blue-100 transition-200 font-medium"
        >
          {{ dayjs(card?.date).format('DD.MM.YYYY') }}
        </p>
      </div>

      <div
        class="text-sm line-clamp-3 lg:text-base leading-136 font-bold text-blue-700 mt-1 lg:mt-3 dark:text-white transition-200 group-hover:text-blue-200 dark:group-hover:text-blue-100"
      >
        <span class="mr-1">
          {{ card?.title }}
        </span>
        <CommonNewsTooltip
          :is-video="card?.isVideo"
          :is-verified="card?.isVerified"
          @click.prevent.stop
        />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'

import { INews } from '~/types'

interface Props {
  card: INews
}

defineProps<Props>()
</script>

<style scoped></style>
