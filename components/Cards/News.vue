<template>
  <NuxtLink
    to="/"
    class="border border-solid border-blue-200/20 rounded-lg relative overflow-hidden transition-300 hover:bg-white-100 dark:hover:bg-blue-200/20 hover:border-transparent group"
  >
    <div class="aspect-video">
      <img
        :src="card?.image"
        alt="card-news-image"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="p-4 pt-3 h-full">
      <div>
        <div class="flex-y-center gap-4">
          <p
            class="border border-solid border-blue-100 rounded-md px-2 py-0.5 text-xs leading-5 font-medium text-blue-200 dark:text-blue-100 transition-300"
          >
            {{ card?.category }}
          </p>

          <p
            class="text-xs leading-5 text-blue-600 dark:text-blue-100 transition-300 font-medium"
          >
            {{ dayjs(card?.date).format('DD.MM.YYYY') }}
          </p>
        </div>

        <p
          class="text-base leading-136 font-bold text-blue-700 mt-3 dark:text-white transition-300 line-clamp-3 h-[66px] group-hover:text-blue-200 dark:group-hover:text-blue-100"
        >
          {{ card?.title }}
          <i
            v-if="card?.isVideo"
            class="icon-play-circle text-blue-200 dark:text-white transition-300 inline-block -mb-1 translate-y-0.5"
          />
          <i
            v-if="card?.isVerified"
            class="icon-unread text-green inline-block -mb-1 translate-y-0.5"
          />
        </p>
      </div>

      <div class="mt-4 flex-y-center gap-5">
        <p
          class="transition-300 line-clamp-2 flex-y-center gap-1 text-sm leading-14 font-medium text-blue-200 dark:text-white"
        >
          <i class="icon-eye font-normal" />
          {{ formatNumberWithSpaces(card?.views) }}
        </p>

        <p
          v-if="card?.comments"
          class="transition-300 line-clamp-2 flex-y-center gap-1 text-sm leading-14 font-medium text-green"
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
