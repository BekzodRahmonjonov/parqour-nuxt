<template>
  <li class="text-white space-y-0.5 pl-[10px]" @click="handleCloseMobile">
    <NuxtLink
      :to="localePath(`/destination/${slug}`)"
      class="w-full flex-y-center space-x-2 border-b border-solid border-white-500 dark:border-blue-200"
    >
      <div class="w-12 h-12 rounded flex-shrink-0 overflow-hidden">
        <img :src="image" class="w-full h-full" />
      </div>
      <Highlighter
        class="text-[13px] text-blue-700 dark:text-white font-bold leading-136"
        highlight-class-name="bg-[#FFCD55] dark:bg-[#F9DCA3] dark:text-white dark:bg-opacity-[24%] rounded"
        :search-words="[search ?? '']"
        :text-to-highlight="title"
      />
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
import Highlighter from 'vue-highlight-words'

interface Props {
  title?: string
  search?: string
  slug?: string
  image?: string
  breadcrumb?: {}[]
}
defineProps<Props>()

const handleCloseMobile = () => {}
</script>
