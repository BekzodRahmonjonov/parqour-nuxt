<template>
  <NuxtLink to="/" class="transition-200 bg-white-700 dark:bg-blue-100/[16%] rounded-lg px-4 py-5 relative flex-y-center hover:bg-white-900 dark:hover:bg-blue-100/[16%] group">
    <div class="flex flex-col justify-between h-full grow">
      <h2 class="transition-300 before:transition-200 line-clamp-3 text-blue-700 dark:text-white text-sm leading-136 font-bold mb-10 before:content-[''] before:h-[54px] before:absolute before:left-0 before:w-0.5 before:rounded before:bg-blue-100 before:opacity-0 group-hover:before:opacity-100">
        В Яккасарайском районе столицы возведут новый парк отдыха
      </h2>
      <p class="text-sm text-blue-200 font-medium">
        <i class="icon-gallery text-gray text-sm"></i>
        {{ formatNumberWithSpaces(22) }}
      </p>
    </div>
    <div class="relative ml-3 grow -mr-14 w-full max-w-[180px] min-w-[178px] min-h-[107px] relative">
      <template v-for="(item, index) in 3" :key="index">
        <img
            :src="`https://picsum.photos/200/30${index}`"
            alt=""
            class="aspect-video object-cover rounded-lg absolute w-[178px] h-[110px]"
            :style="`scale: ${1 - index * 0.1}; z-index: ${10-index}; transform: translateY(${index * 12}px)`"
        >
      </template>
    </div>
  </NuxtLink>
</template>
<script setup lang="ts"></script>