<template>
  <div
    class="p-5 bg-white-700 dark:bg-dark-200 w-full group rounded-lg cursor-pointer hover:bg-[#a2bcde33] transition-200 dark:hover:bg-blue-600"
  >
    <div class="flex justify-between flex-wrap">
      <div class="flex items-center gap-5">
        <div class="w-[92px] h-[92px]">
          <img :src="author.img" class="rounded-full" alt="" />
        </div>

        <div class="flex flex-col justify-center">
          <h2
            class="text-xl font-semibold leading-140 text-blue-700 dark:text-white dark:group-hover:text-blue-100 transition-200"
          >
            {{ author.name }}
          </h2>
          <p class="text-sm leading-140 text-blue-200 dark:text-gray-100">
            {{ author.about }}
          </p>
        </div>
      </div>

      <CommonSocials
        class="flex h-full gap-2 w-full md:w-auto justify-center"
      />
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
