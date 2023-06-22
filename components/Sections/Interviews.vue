<template>
  <div class="container">
    <CommonSectionWrapper :title="$t('interview')">
      <template #actions>
        <CommonTags v-bind="{ loading, tags: interviewTags }" />
      </template>
    </CommonSectionWrapper>
    <div class="grid grid-cols-12 sm:gap-x-8 gap-y-6 mt-7">
      <CardsInterview
          v-for="(item, index) in interviews"
          :key="index"
          :data="item"
          class="lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { interviewTags, interviews } from "~/data";
const loading= ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1000)
})
</script>