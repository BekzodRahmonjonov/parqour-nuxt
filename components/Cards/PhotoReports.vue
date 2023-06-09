<template>
  <NuxtLink to="/" class="transition-200 bg-white-700 rounded-lg px-4 py-5 relative flex-y-center hover:bg-white-900">
    <div class="flex flex-col justify-between h-full grow">
      <h2 class="line-clamp-3 text-blue-700 text-sm leading-136 font-bold mb-10">В Яккасарайском районе столицы возведут новый парк отдыха</h2>
      <p class="text-sm text-blue-200 font-medium">
        <i class="icon-gallery text-gray text-sm"></i>
        {{ formatNumberWithSpaces(22) }}
      </p>
    </div>
    <div class="relative ml-3 grow -mr-14 w-full min-w-[178px] min-h-[107px] relative">
      <template v-for="(item, index) in 3" :key="index">
        <img
            :src="`https://picsum.photos/200/30${index}`"
            alt=""
            class="aspect-video object-cover rounded-lg absolute w-[178px] h-[110px]"
            :style="`scale: ${1 - index * 0.1}; z-index: ${10-index}; transform: translateY(${index * 10}px)`"
        >
      </template>
    </div>
  </NuxtLink>
</template>
<script setup lang="ts"></script>