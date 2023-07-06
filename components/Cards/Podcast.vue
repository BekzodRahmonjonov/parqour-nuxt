<template>
  <NuxtLink
    to="/"
    class="rounded-md w-full h-full relative max-h-[296px] group transition-200 overflow-hidden bg-transparent hover:shadow-xs hover:-translate-y-2"
  >
    <img
      :src="data.image"
      alt="podcast_image"
      class="w-full h-full object-cover rounded-md aspect-auto relative z-0 box transition-200"
    />
    <div
      class="absolute top-0 podcast-overlay translate-y-[35px] w-full rounded-md h-full z-0 transition-200 group-hover:translate-y-0"
    ></div>
    <div
      class="transition-200 absolute z-10 box w-full h-full top-0 rounded-md p-4 flex flex-col justify-between items-end"
    >
      <div
        class="bg-blue-700/40 px-2.5 py-1.5 transition-200 rounded w-fit flex-center group-hover:bg-blue-150"
      >
        <span class="text-white text-xs font-medium leading-130">
          {{ data.typeTitle }}
        </span>
        <span class="w-1 h-1 rounded-full bg-gray-100 mx-1.5"></span>
        <i
          class="text-white"
          :class="
            data.type === 'video' ? 'icon-videocamera' : 'icon-microphone-side'
          "
        ></i>
      </div>
      <div class="w-full">
        <div class="flex-y-center mb-3">
          <p class="text-white font-medium text-sm leading-5">
            <i class="icon-eye text-white text-lg mr-1"></i>
            {{ formatNumberWithSpaces(12344) }}
          </p>
          <span class="w-1 h-1 rounded-full bg-gray-100 mx-1.5"></span>
          <p class="text-white font-medium text-sm leading-5">
            {{ getTimeText(data.created_at, $t) }}
          </p>
        </div>
        <p
          class="text-white line-clamp-2 text-base font-medium leading-130"
          :class="{ '!text-2xl !leading-136': isSingleBanner }"
        >
          {{ data.title }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
import { IPodcast } from '~/types'

import { getTimeText } from '../../helpers'

interface Props {
  data: IPodcast
  isSingleBanner?: boolean
}
defineProps<Props>()
</script>
<style>
.podcast-overlay {
  transition: all 0.2s linear;
  background: linear-gradient(
    0deg,
    rgba(25, 31, 46, 0.9) 25.97%,
    rgba(25, 31, 46, 0) 95%
  );
}
</style>
