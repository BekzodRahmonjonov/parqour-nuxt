<template>
  <div
    class="p-6 relative bg-white-150 dark:bg-dark-200 w-full group rounded-lg transition-200 dark:hover:bg-blue-600"
  >
    <div class="flex justify-between flex-wrap">
      <div class="flex items-center gap-5">
        <div class="w-[65px] h-[65px]">
          <img :src="data?.author_image" class="rounded-full" alt="" />
        </div>

        <div class="flex flex-col justify-center">
          <h2
            class="text-xl font-semibold leading-140 text-blue-700 dark:text-white dark:group-hover:text-blue-100 transition-200"
          >
            {{ data?.author }}
          </h2>
          <p class="text-sm leading-140 text-blue-200 dark:text-gray-100">
            {{ $t('author') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  data?: object
}

defineProps<Props>()
</script>

<style scoped lang="ts"></style>
