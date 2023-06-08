<template>
  <div class="relative">
    <div
      class="h-[674px] relative px-3 lg:px-6 pb-[70px] flex flex-col gap-3 overflow-y-auto mini-scroll-sidebar overflow-x-hidden"
    >
      <CardsSideNews
        v-for="(card, index) in list"
        :key="index"
        v-bind="{ card }"
      />
    </div>
    <div
      class="absolute bottom-0 w-full h-[100px] pointer-events-none transition-300 news-side-bg-linear"
    />
    <div class="w-full absolute bottom-0 z-[1] p-3 lg:p-5">
      <CommonButton variant="primary-dark" class="w-full group px-0">
        <div class="flex-center-between w-full pl-4 pr-2.5">
          <p>{{ buttonText }}</p>
          <i
            class="icon-arrow-right text-white group-hover:translate-x-1 transition-200"
          />
        </div>
      </CommonButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useColorMode } from '@vueuse/core'

import { INews } from '~/types'

interface Props {
  list?: INews[]
  buttonText?: string
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

html.dark .news-side-bg-linear {
  background: linear-gradient(
    180deg,
    rgba(47, 56, 75, 0) 0%,
    rgba(47, 56, 75, 0.94) 48.66%
  );
}
</style>
