<template>
  <div class="flex-y-center space-x-[10px]">
    <button
      v-for="item in languageList"
      :key="item?.value"
      class="transition-200"
      :class="[
        activeLang?.value === item?.value
          ? 'text-blue-200 dark:text-white'
          : 'text-gray dark:text-gray-100/40',
      ]"
      @click="switchLanguage(item)"
    >
      {{ item?.name }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const { locale } = useI18n()
interface ILanguage {
  value: string
  name: string
}

const activeLang = ref<ILanguage>()
const router = useRouter()

const switchLanguage = (item: ILanguage) => {
  localStorage.setItem('locale', item?.value)
  router.go(0)
}
const languageList = ref<ILanguage[]>([
  { value: 'uz', name: 'UZ' },
  { value: 'ru', name: 'RU' },
])

onMounted(() => {
  if (process.client) {
    const localLang = localStorage.getItem('locale') ?? 'uz'
    activeLang.value = languageList.value.find((el) => el.value === localLang)
  }
})
</script>

<style scoped></style>
