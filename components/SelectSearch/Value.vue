<template>
  <li class="text-white space-y-0.5 pl-2.5 group" @click="handleCloseMobile">
    <NuxtLink
      to="/"
      class="w-full flex-y-center space-x-2 border-b border-solid border-white-500 group-last:border-0 dark:border-blue-200"
    >
      <Highlighter
        class="text-[13px] text-blue-700 dark:text-white font-bold leading-136"
        highlight-class-name="bg-[#FFCD55] dark:bg-[#F9DCA3] dark:text-white dark:bg-opacity-[24%] rounded"
        :search-words="[search ?? '']"
        :text-to-highlight="name"
      />
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
import Highlighter from 'vue-highlight-words'

interface Props {
  name?: string
  search?: string
}
defineProps<Props>()

const handleCloseMobile = () => {}
</script>
