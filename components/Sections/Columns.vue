<template>
  <div class="container">
    <CommonSectionWrapper :title="$t('column')" is-centered />
    <div class="grid grid-cols-12 sm:gap-x-8 gap-y-6 mt-7">
      <CardsColumn
        v-for="(item, index) in articlesData"
        :key="index"
        :data="item"
        class="lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { IArticlesData } from '~/types'

const loading = ref(true)

interface Props {
  articlesData?: IArticlesData[]
}
defineProps<Props>()
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1000)
})
</script>
