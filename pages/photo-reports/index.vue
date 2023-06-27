<template>
  <div class="container">
    <CommonPageWrapper
      :title="$t('photo_reports')"
      :text="$t('photo_reports_text')"
      class="mt-8"
    >
      <CardsPhotoReportSliderCard :card="image" main class="mb-11" />
      <div class="grid grid-cols-2 gap-8 mb-14">
        <CardsPhotoReportSliderCard
          v-for="(item, index) in columns"
          :key="index"
          :card="image"
          class="min-h-[250px]"
          :small="true"
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

const image = {
  title:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, maxime!',
  imagesCount: 10,
  images: [
    'https://picsum.photos/800/701',
    'https://picsum.photos/800/702',
    'https://picsum.photos/800/703',
    'https://picsum.photos/800/704',
  ],
}
</script>
