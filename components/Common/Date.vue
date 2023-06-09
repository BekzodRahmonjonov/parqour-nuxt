<template>
  <div
    class="px-5 py-3 rounded-full border border-solid border-white-300 inline-block dark:border-blue-600"
  >
    <p
      class="text-2xl leading-[125%] text-blue-900 font-bold transition-300 dark:text-white"
    >
      {{ date }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  date: string
}

defineProps<Props>()
</script>

<style scoped></style>
