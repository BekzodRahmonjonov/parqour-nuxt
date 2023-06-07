<template>
  <div
    class="w-full aspect-video md:h-[466px] rounded-lg relative overflow-hidden"
  >
    <img :src="card?.image" alt="news" class="w-full h-full object-cover" />
    <div class="linear-bg-news absolute w-full h-full inset-0" />
    <div class="absolute w-full h-full inset-0 z-[1] flex items-end">
      <div class="p-6">
        <p class="text-xs sm:text-sm leading-5 text-white font-normal">
          {{ card?.date }}
        </p>
        <p
          class="text-white text-sm sm:text-2xl leading-136 font-bold mt-2 sm:mt-4 mb-3 sm:mb-7"
        >
          {{ card?.title }}
        </p>
        <div class="flex-y-center gap-1">
          <i class="icon-eye text-lg text-white" />
          <p class="text-xs leading-14 text-white font-medium">
            {{ formatNumberWithSpaces(card?.views) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { INews } from '~/types'
import { formatNumberWithSpaces } from '~/utils'

interface Props {
  card?: INews
}

defineProps<Props>()
</script>

<style scoped>
.linear-bg-news {
  background: linear-gradient(
    180deg,
    rgba(57, 68, 102, 0) 0%,
    rgba(28, 34, 52, 0.92) 70.19%
  );
}
</style>
