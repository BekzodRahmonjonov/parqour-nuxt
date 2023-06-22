<template>
  <div class="container">
    <CommonSectionWrapper :title="$t('column')" is-centered />
    <div class="grid grid-cols-12 sm:gap-x-8 gap-y-6 mt-7">
      <CardsColumn
          v-for="(item, index) in columns"
          :key="index"
          :data="item"
          class="lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { interviewTags, columns } from "~/data";
const loading= ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1000)
})
</script>