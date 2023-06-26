<template>
  <div class="flex-y-center md:space-x-[10px]">
    <button
      v-for="item in languageList"
      :key="item?.value"
      class="transition-200 w-8 h-8 md:w-auto md:h-auto rounded-full"
      :class="[
        activeLang?.value === item?.value
          ? 'bg-white md:bg-transparent text-blue-200 md:text-blue-200 md:dark:text-white'
          : ' text-blue-100  md:text-gray md:dark:text-gray-100/40 hover:text-blue-200/80',
      ]"
      @click="switchLanguage(item)"
    >
      {{ item?.name }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

interface ILanguage {
  value: string
  name: string
}

const cookieLocale = useCookie('i18n_redirected')
const activeLang = ref<ILanguage>()
const router = useRouter()

const switchLanguage = (item: ILanguage) => {
  cookieLocale.value = item?.value
  router.go(0)
}
const languageList = ref<ILanguage[]>([
  { value: 'uz', name: 'UZ' },
  { value: 'ru', name: 'RU' },
])

onMounted(() => {
  if (process.client) {
    const localLang = cookieLocale.value || 'uz'
    activeLang.value = languageList.value.find((el) => el.value === localLang)
  }
})
</script>

<style scoped></style>
