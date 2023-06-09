<template>
  <div class="rounded-md bg-gray-150 w-full h-full relative max-h-[296px] group transition-200 cursor-pointer hover:-translate-y-1 hover:shadow-cyan-500/50">
    <img :src="data.image"
         alt="podcast_image"
         class="w-full h-full object-cover rounded-md aspect-auto relative z-0 box transition-200"
    >
    <div class="transition-200 absolute z-10 box w-full h-full podcast-overlay border-0 border-transparent top-0 rounded-md p-4 flex flex-col justify-between items-end">
      <div class="bg-blue-700/40 px-2.5 py-1.5 rounded w-fit flex-center">
        <span class="text-white text-xs font-medium leading-130"> {{ data.typeTitle }} </span>
        <span class="w-1 h-1 rounded-full bg-gray-100 mx-1.5"></span>
        <i class="text-white" :class="data.type === 'video' ? 'icon-videocamera' : 'icon-microphone-side'"></i>
      </div>
      <div class="w-full">
        <div class="flex-y-center mb-3">
          <p class="text-white font-medium text-sm leading-5"> <i class="icon-eye text-white text-lg mr-1"></i> {{ formatNumberWithSpaces(12344) }} </p>
          <span class="w-1 h-1 rounded-full bg-gray-100 mx-1.5"></span>
          <p class="text-white font-medium text-sm leading-5"> {{ getTimeText(data.created_at, $t) }} </p>
        </div>
        <p class="text-white line-clamp-2 text-base font-medium leading-130"> {{ data.title }} </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { IPodcast } from "~/types";
import dayjs from "dayjs";
import {getTimeText} from "../../helpers";
interface Props {
  data: IPodcast
}
defineProps<Props>()
</script>
<style>
  .podcast-overlay {
    background: linear-gradient(0deg, rgba(25, 31, 46, 0.9) -9.97%, rgba(25, 31, 46, 0) 108.11%);
  }
</style>