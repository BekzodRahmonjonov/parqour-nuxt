<template>
  <div class="container">
    <CommonPageWrapper
      :title="$t('photo_reports')"
      :text="$t('photo_reports_text')"
      class="mt-8"
    >
      <CardsPhotoReportSliderCard main class="mb-11" />
      <div class="grid grid-cols-2 gap-8 mb-14">
        <CardsPhotoReportSliderCard
          v-for="(item, index) in columns"
          :key="index"
          :data="item"
          class="min-h-[250px]"
        />
      </div>
      <template #aside>
        <img src="https://picsum.photos/200/400" class="w-full" alt="" />
      </template>
    </CommonPageWrapper>
  </div>
</template>
<script setup lang="ts">
import { columns } from '~/data'
</script>
