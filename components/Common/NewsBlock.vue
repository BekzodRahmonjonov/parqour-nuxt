<template>
  <div class="relative">
    <div
      class="h-[674px] relative px-6 pb-[100px] flex flex-col gap-3 overflow-y-auto mini-scroll-sidebar overflow-x-hidden"
    >
      <CardsSideNews
        v-for="(card, index) in list"
        :key="index"
        v-bind="{ card }"
      />
    </div>
    <div class="news-side-bg-linear absolute bottom-0 w-full h-[120px]" />
    <div class="w-full absolute bottom-0 z-[1]">
      <CommonButton class="w-full" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { INews } from '~/types'

interface Props {
  list?: INews[]
}

defineProps<Props>()
</script>

<style scoped>
.mini-scroll-sidebar::-webkit-scrollbar {
  width: 4px;
  border-radius: 99px;
}

.mini-scroll-sidebar::-webkit-scrollbar-track {
  background: #e5e7ee;
  border-radius: 99px;
}

.mini-scroll-sidebar::-webkit-scrollbar-thumb {
  background: #d1d2d5;
  border-radius: 99px;
}

.news-side-bg-linear {
  background: linear-gradient(
    180deg,
    rgba(245, 246, 249, 0) 0%,
    rgba(245, 246, 249, 0.94) 48.66%
  );
}
</style>
