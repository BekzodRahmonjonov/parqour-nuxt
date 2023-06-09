<template>
  <NuxtLink
    to="/"
    class="border-b last:border-b-[0px] sm:last:border-b sm:border border-solid border-blue-200/20 sm:rounded-lg relative overflow-hidden transition-200 hover:bg-white-100 dark:hover:bg-blue-200/20 hover:border-transparent group flex items-center sm:items-start flex-row sm:flex-col flex-row-reverse gap-2 sm:gap-0 justify-between"
  >
    <div class="shrink-0 sm:w-full">
      <div
        class="w-full h-full max-w-[127px] max-h-[72px] sm:max-w-[unset] sm:max-h-[unset] sm:w-[unset] sm:h-[unset] relative overflow-hidden sm:aspect-video rounded sm:rounded-none"
      >
        <img
          :src="card?.image"
          alt="card-news-image"
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    <div
      class="pb-3 sm:p-4 sm:pt-3 h-full flex flex-col justify-between gap-3 sm:gap-0"
    >
      <div>
        <div class="flex-y-center gap-4">
          <p
            class="border border-solid border-blue-100 rounded-md px-2 py-0.5 text-[10px] sm:text-xs leading-5 font-medium text-blue-200 dark:text-blue-100 transition-200"
          >
            {{ card?.category }}
          </p>

          <p
            class="text-[10px] sm:text-xs leading-5 text-blue-600 dark:text-blue-100 transition-200 font-medium"
          >
            {{ dayjs(card?.date).format('DD.MM.YYYY') }}
          </p>
        </div>

        <p
          class="text-sm sm:text-base leading-136 font-bold text-blue-700 mt-3 dark:text-white transition-200 line-clamp-3 group-hover:text-blue-200 dark:group-hover:text-white"
        >
          {{ card?.title }}
          <i
            v-if="card?.isVideo"
            class="icon-play-circle text-blue-200 dark:text-white transition-200 inline-block -mb-1 translate-y-0.5"
          />
          <i
            v-if="card?.isVerified"
            class="icon-unread text-green inline-block -mb-1 translate-y-0.5"
          />
        </p>
      </div>

      <div class="sm:mt-4 flex-y-center gap-3 sm:gap-5">
        <p
          class="transition-200 line-clamp-2 flex-y-center gap-1 text-xs sm:text-sm leading-14 font-medium text-blue-200 dark:text-white"
        >
          <i class="icon-eye font-normal" />
          {{ formatNumberWithSpaces(card?.views) }}
        </p>

        <p
          v-if="card?.comments"
          class="transition-200 line-clamp-2 flex-y-center gap-1 text-xs sm:text-sm leading-14 font-medium text-green"
        >
          <i class="icon-chat font-normal" />
          {{ formatNumberWithSpaces(card?.comments) }}
        </p>
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
