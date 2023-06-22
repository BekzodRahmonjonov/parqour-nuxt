<template>
  <NuxtLink to="/" class="transition-200 group">
    <div class="rounded relative">
      <img
        :src="data.image"
        alt=""
        class="aspect-video w-full h-full object-cover rounded"
      />
      <div
        class="absolute w-full h-full top-0 pt-4 pb-3 bg-transparent group-hover:bg-blue-200/[36%] rounded transition-200 flex flex-col justify-between"
      >
        <div
          class="px-2 py-1 inline-flex items-center rounded-e bg-blue-700/40 backdrop-blur-sm w-fit overflow-hidden transition-200 max-w-[36px] group-hover:max-w-full"
        >
          <i class="icon-play text-white text-lg"></i>
          <p class="text-white text-sm font-medium ml-3">15:04</p>
        </div>
        <div class="interview-card-bg px-5 py-3 text-white font-bold">
          <h3 class="text-lg uppercase">{{ $t('interview') }}</h3>
          <p class="text-sm uppercase">{{ data.with_whom }}</p>
        </div>
      </div>
    </div>
    <p
      class="text-xs text-blue-700 leading-5 transition-200 dark:text-white mt-4 mb-1"
    >
      {{ '27 ноя 2022, 20:00' }}
    </p>
    <p
      class="text-base font-bold text-blue-700 line-clamp-2 transition-200 dark:text-white leading-136 group-hover:text-blue-200 dark:group-hover:text-blue-100"
    >
      {{ data.title }}
    </p>
    <p
      class="mt-4 text-blue-200 transition-200 dark:text-blue-100 text-xs font-medium flex-y-center"
    >
      <i
        class="icon-eye text-blue-200 transition-200 dark:text-blue-100 mr-0.5"
      ></i>
      {{ formatNumberWithSpaces(1234) }}
    </p>
  </NuxtLink>
</template>
<script setup lang="ts">
import { IInterview } from '~/types'

interface Props {
  data: IInterview
}
defineProps<Props>()
</script>
<style>
.interview-card-bg {
  background: linear-gradient(
    89.54deg,
    #7ca7de 0.39%,
    rgba(82, 97, 143, 0) 97.44%
  );
}
</style>
