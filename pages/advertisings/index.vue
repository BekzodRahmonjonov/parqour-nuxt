<template>
   <div class="container">
    <CommonPageWrapper
      :title="$t('advertisings')"
      class="mt-8"
    >
    <CardsAds
          v-for="(item, index) in ads"
          :key="index"
          :data="item"
          class="min-h-[180px]"
        />

    </CommonPageWrapper>
  </div>
</template>
<script setup lang="ts">
import { ads } from '~/data'
</script>