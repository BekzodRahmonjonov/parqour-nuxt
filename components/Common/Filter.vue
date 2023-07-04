<template>
  <button
    class="text-sm transition-200 hover:bg-blue-200 dark:text-white hover:text-white font-medium leading-126 p-2 rounded-[30px] bg-[#a2bcde29] text-blue-200"
  >
    {{ text }}
  </button>
</template>

<script lang="ts" setup>
interface Props {
  text: string
}

defineProps<Props>()
</script>
