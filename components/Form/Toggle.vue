<template>
  <div class="flex items-center gap-[10px]">
    <span class="text-dark text-sm font-normal"> Counter </span>
    <label
      class="relative w-10 h-[26px] rounded-[32px] cursor-pointer border duration-200 ease-in-out"
      :class="modelValue ? 'bg-primary' : 'bg-gray-100'"
    >
      <input
        type="checkbox"
        class="absolute w-px h-px opacity-0"
        :checked="modelValue"
        :value="value"
        :name="name"
        @change="handleChange"
      />
      <span
        class="absolute w-5 h-5 rounded-full top-0.5 bg-white left-0.5 duration-200 ease-in-out"
        :class="!modelValue ? 'translate-x-0' : 'translate-x-3.5'"
      />
    </label>
  </div>
</template>
<script setup lang="ts">
interface Props {
  modelValue: boolean
  label?: string
  name?: string
  value?: string | number | boolean
}

const props = withDefaults(defineProps<Props>(), {})

const emit = defineEmits<{
  (e: 'update:modelValue', value: Props['value']): void
}>()
const handleChange = (e: Event) => {
  const target = e?.target as HTMLInputElement
  if (target === null) {
    return
  }

  emit(
    'update:modelValue',
    typeof props.value !== 'undefined' ? target.value : target.checked
  )
}
</script>

<style></style>
