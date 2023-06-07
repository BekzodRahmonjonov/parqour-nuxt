<template>
  <div
    :class="isCentered ? 'flex-y-center gap-6' : 'flex-center-between gap-4'"
  >
    <div v-if="isCentered" class="linear-section-wrapper w-full h-px" />
    <p class="text-base sm:text-2xl leading-130 font-bold text-blue-600">
      {{ title }}
    </p>
    <div class="linear-section-wrapper w-full h-px" />

    <slot v-if="!isCentered" name="actions">
      <NuxtLink
        :to="allLink"
        class="flex-y-center gap-1.5 transition-200 hover:text-blue-100 group text-xs sm:text-lg text-blue-200 font-medium leading-120"
      >
        {{ allTitle }}
        <i
          class="icon-arrow-right text-blue-100 transition-200 group-hover:translate-x-1"
        />
      </NuxtLink>
    </slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  allTitle?: string
  allLink?: string
  isCentered?: boolean
}

withDefaults(defineProps<Props>(), {
  title: 'Title',
  allTitle: 'All',
  allLink: '/',
})
</script>

<style scoped>
.linear-section-wrapper {
  background: linear-gradient(
    90deg,
    rgba(162, 188, 222, 0.1) 0%,
    #a2bcde 51.67%,
    rgba(162, 188, 222, 0.1) 100%
  );
}
</style>
