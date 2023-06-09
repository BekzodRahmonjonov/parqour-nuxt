<template>
  <div class="flex-y-center gap-2.5 group cursor-pointer">
    <div
      class="flex-center w-10 md:w-[50px] h-10 md:h-[50px] rounded-full transition-200 bg-[#E7EEF6] dark:bg-[#44526E] group-hover:bg-blue-100 dark:group-hover:bg-blue-100"
    >
      <i
        :class="social?.icon"
        class="text-blue-200 transition-200 dark:text-white text-xl"
      />
    </div>

    <div>
      <p
        class="uppercase text-sm md:text-base leading-140 font-bold text-blue-600 transition-200 dark:text-white group-hover:text-blue-200 dark:group-hover:text-blue-100"
      >
        {{ social?.title }}
      </p>
      <p
        class="text-blue-200 text-xs md:text-sm leading-140 font-medium transition-200 dark:text-blue-100"
      >
        {{ formatNumberWithSpaces(social?.subscribe) }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ISocial } from '~/types'

interface Props {
  social: ISocial
}

defineProps<Props>()
</script>

<style scoped></style>
