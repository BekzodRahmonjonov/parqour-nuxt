<template>
  <div class="container mt-8">
    <CommonSinglePageWrapper :single-photo="singlePhoto">
      <template #aside>
        <TempAdvetisimentBanner />
      </template>
    </CommonSinglePageWrapper>
  </div>
</template>
<script setup lang="ts">
import { singlePhoto } from '~/data/fakeData'
</script>
