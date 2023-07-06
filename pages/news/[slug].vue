<template>
  <div>
    <CommonSinglePageWrapper v-if="newsData?.default" :single="newsData">
      <template #aside>
        <img src="https://picsum.photos/200/400" class="w-full" alt="" />
      </template>
    </CommonSinglePageWrapper>
    <NewsStandardSingleWrapper v-if="newsData?.standard" :single="newsData">
      <template #aside>
        <TempAdvetisimentBanner />
      </template>
    </NewsStandardSingleWrapper>
    <NewsFullWidthSingleWrapper
      v-if="newsData?.full_width"
      :single="newsData"
    />
  </div>
</template>
<script setup lang="ts">
import { newsData } from '~/data/fakeData'
</script>
