<template>
  <div>
    <div class="w-full relative overflow-hidden">
      <img :src="image" alt="banner" class="w-full h-full object-cover" />
    </div>

    <div class="w-full flex items-center justify-end mt-3">
      <p
        class="text-blue-200 transition-300 bg-blue-100/[16%] px-3 py-[7px] rounded-full text-sm leading-126 font-medium transition-300 text-blue-200 dark:text-blue-100"
      >
        {{ $t('add_message') }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  image: string
}

defineProps<Props>()
</script>

<style scoped></style>
