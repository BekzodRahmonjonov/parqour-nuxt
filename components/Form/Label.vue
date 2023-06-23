<template>
  <label
    class="text-gray-100 text-sm leading-130 font-semibold"
    :class="labelClass"
    :for="forText"
  >
    {{ $t(label) }}
  </label>
</template>
<script setup lang="ts">
interface Props {
  label: string
  labelClass?: string
  forText?: string
}
defineProps<Props>()
</script>
