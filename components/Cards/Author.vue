<template>
  <NuxtLink
    to="/"
    class="rounded-lg flex flex-col relative overflow-hidden bg-white transition-200 group hover:shadow-xl"
    :class="{ '!bg-blue-600 hover:!bg-blue-250 !rounded-sm': isHalf }"
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

    <div class="p-3 p-4 lg:p-6 h-full flex flex-col">
      <p
        v-if="card?.actual"
        class="text-blue-200 text-xs leading-tight mb-3"
        :class="{ '!text-base !text-blue-100': isHalf }"
      >
        {{ $t('actual_comments') }}
      </p>
      <p
        class="text-sm lg:text-base leading-136 font-medium text-blue-700 group-hover:text-blue-200 transition-200 mb-3"
        :class="{
          'md:!text-lg lg:!text-2xl text-white group-hover:text-white mb-5':
            isHalf,
        }"
      >
        {{ card?.title }}
      </p>

      <p
        class="text-xs text-blue-700 leading-130 font-medium mt-auto"
        :class="{ 'md:!text-sm !text-white !mt-[53px]': isHalf }"
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
