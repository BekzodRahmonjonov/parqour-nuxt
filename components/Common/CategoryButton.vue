<template>
  <button
    class="category-button py-[7px] px-2 rounded-[30px] text-sm font-medium leading-130 text-blue-200 hover:text-white transition-colors duration-200 hover:!bg-blue-200/80"
    :class="{ '!bg-blue-200 text-white': categories.includes(value) }"
    @click="updateCategoryQuery(value)"
  >
    <span v-if="isHash">#</span>
    {{ text }}
  </button>
</template>

<script setup lang="ts">
const active = ref('')
const router = useRouter()
const route = useRoute()
const categories = computed(() => {
  const categories = Object.keys(route.query?.category || [])?.length
    ? route.query?.category?.split(',')
    : [] || []
  return categories
})

function updateCategoryQuery(value: string) {
  if (categories.value?.includes(value)) {
    categories.value.splice(categories.value.indexOf(value), 1)
    active.value = value === active.value ? '' : active.value
  } else {
    active.value = value
    categories.value.push(value)
  }
  const query = {
    ...route.query,
    category: categories.value?.length
      ? intoString(categories.value)
      : undefined,
  }
  router.push({ name: route.name, query })
}
interface Props {
  text: string
  value: string
  isHash?: boolean
}

defineProps<Props>()
function intoString(value: string[]): string {
  if (value?.length) {
    return value.join(',')
  } else {
    return ''
  }
}
</script>

<style scoped>
.category-button {
  background-color: rgba(162, 188, 222, 0.16);
}
</style>
