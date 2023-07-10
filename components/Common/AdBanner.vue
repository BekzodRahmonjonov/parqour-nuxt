<template>
  <div class="container">
    <div class="w-full relative overflow-hidden">
      <img :src="image" alt="banner" class="w-full h-full object-cover" />
    </div>

    <div class="w-full flex items-center justify-end mt-3">
      <NuxtLink
        to="/"
        class="relative text-blue-200 transition-200 bg-blue-100/[16%] px-3 py-[7px] rounded-full text-xs sm:text-sm leading-126 font-medium transition-200 text-blue-200 hover:bg-blue-150 hover:text-white dark:text-blue-100 cursor-pointer"
      >
        {{ $t('add_message') }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  image: string
}

defineProps<Props>()
</script>
