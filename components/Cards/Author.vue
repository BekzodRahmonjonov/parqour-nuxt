<template>
  <NuxtLink
    to="/"
    class="rounded-lg md:rounded-xl flex flex-col relative overflow-hidden bg-blue-700 border border-solid border-transparent dark:border-blue-200/20 transition-200 group hover:-translate-y-2 hover:shadow-xs"
  >
    <div>
      <div class="aspect-video">
        <img
          :src="card?.image"
          alt="author-image"
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    <div class="p-3 p-4 lg:p-6 h-full flex flex-col justify-between">
      <p
        class="text-sm lg:text-base leading-136 font-bold text-white group-hover:text-blue-100 transition-200"
        :class="{ 'md:text-lg lg:text-2xl': isHalf }"
      >
        {{ card?.title }}asdasd
      </p>

      <p
        class="text-xs text-white leading-5 font-normal mt-3"
        :class="{ 'md:!text-sm': isHalf }"
      >
        {{ card?.author }}
      </p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { IAuthor } from '~/types'

interface Props {
  card: IAuthor
  isHalf?: boolean
}

defineProps<Props>()
</script>

<style scoped></style>
