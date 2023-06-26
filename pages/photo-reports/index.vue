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
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/301',
    'https://picsum.photos/201/300',
    'https://picsum.photos/200/302',
  ],
}
</script>
