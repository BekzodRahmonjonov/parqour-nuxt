<template>
  <NuxtLink
    :to="'/article-authors/' + card?.slug"
    class="rounded-lg flex flex-col relative overflow-hidden bg-white transition-200 group hover:shadow-xl"
    :class="{ '!bg-blue-600 hover:!bg-blue-250 !rounded-sm': isDefault }"
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

    <div class="p-5 h-full flex flex-col">
      <p v-if="card?.actual" class="text-sm text-blue-100 leading-tight mb-2">
        {{ $t('actual_comments') }}
      </p>
      <p class="text-sm lg:text-base leading-136 font-medium text-white mb-5">
        {{ card?.title }}
      </p>

      <p class="text-sm text-white leading-130 font-medium mt-auto">
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
  isDefault?: boolean
}

defineProps<Props>()
</script>

<style scoped></style>
