<template>
  <NuxtLink
    to="/"
    class="px-3 lg:px-5 hover:bg-[#EDEFF4] dark:hover:bg-white/[4%] transition-200"
  >
    <div
      class="py-3 border-b border-solid border-gray-300 dark:border-gray-300/10"
    >
      <p
        class="text-blue-200 text-xs leading-140 font-medium text-xs mb-1 transition-300 dark:text-white"
      >
        {{ dayjs(card?.date).locale(locale).format('DD MMM YYYY, HH:mm') }}
      </p>
      <p
        class="text-sm leading-140 font-semibold text-blue-600 transition-200 dark:text-white"
      >
        {{ card?.title }}
        <i
          v-if="card?.isVideo"
          class="icon-play-circle text-blue-200 dark:text-white transition-300 inline-block -mb-1 translate-y-0.5"
        />
      </p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'

import { INews } from '~/types'

const { locale } = useI18n()

interface Props {
  card?: INews
}

defineProps<Props>()
</script>

<style scoped></style>
