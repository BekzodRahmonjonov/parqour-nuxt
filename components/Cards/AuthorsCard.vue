<template>
  <div
    class="p-5 bg-white-700 w-full rounded-lg cursor-pointer hover:scale-105 transition-200 dark:bg-blue-600"
  >
    <div class="flex justify-between">
      <div class="flex items-center gap-5">
        <div class="w-[92px] h-[92px]">
          <img :src="author.img" class="rounded-full" alt="" />
        </div>

        <div class="flex flex-col justify-center">
          <h2
            class="text-xl font-semibold leading-140 text-blue-700 dark:text-white"
          >
            {{ author.name }}
          </h2>
          <p class="text-sm leading-140 text-blue-200 dark:text-white">
            {{ author.about }}
          </p>
        </div>
      </div>

      <CommonSocials class="flex h-full gap-2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IAuthorCard } from '~/types/author'

interface Props {
  author: IAuthorCard
}

defineProps<Props>()
</script>

<style scoped lang="ts"></style>
