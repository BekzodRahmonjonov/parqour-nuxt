<template>
  <label
    class="flex relative w-10 h-5 rounded-[10px] border border-solid border-blue-100 cursor-pointer"
  >
    <input
      :checked="value"
      type="checkbox"
      class="absolute w-px h-px opacity-0"
      @change="handleChange"
    />
    <span
      class="absolute w-[14px] h-[14px] rounded-full top-0.5 bg-blue-200 left-0.5 transition-200 dark:bg-white"
      :class="!value ? 'translate-x-5' : 'translate-x-0'"
    />
  </label>
</template>
<script setup lang="ts">
interface Props {
  modelValue: boolean
  label?: string
}

const props = withDefaults(defineProps<Props>(), {})
const emit = defineEmits<{
  (e: 'input', value: boolean): void
}>()

const value = ref(false)

watch(
  () => props.modelValue,
  (newValue) => {
    value.value = newValue
  },
  { immediate: true }
)
const handleChange = (e) => {
  const target = e?.target

  if (target === null) {
    return
  }
  value.value = target.checked
  emit('input', value.value)
}
</script>
