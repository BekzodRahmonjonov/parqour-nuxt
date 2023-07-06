<template>
  <div class="container mt-8">
    <CommonSinglePageWrapper :single="singleData">
      <template #aside>
        <TempAdvetisimentBanner/>
      </template>
    </CommonSinglePageWrapper>
  </div>
</template>
<script setup lang="ts">
import { singleData } from '~/data/fakeData'
</script>
