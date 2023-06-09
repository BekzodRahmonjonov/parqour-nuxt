<template>
  <div class="container">
    <CommonSectionWrapper :title="$t('podcasts')">
      <template #actions>
        <CommonTags v-bind="{ loading, tags: podcastTags }" />
      </template>
    </CommonSectionWrapper>
    <div class="grid grid-cols-12 gap-x-8 gap-y-6">
      <client-only>
        <CardsPodcast
            v-for="(item, index) in 8" :key="index"
            class="col-span-3"
        />
      </client-only>
    </div>
  </div>
</template>
<script setup lang="ts">
import { podcastTags } from "~/data";
const loading= ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1000)
})
</script>