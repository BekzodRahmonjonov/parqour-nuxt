<template>
  <div class="container">
    <CommonSectionWrapper
      :title="$t('photo_reports')"
      :all-link="'/photo-reports'"
      :all-title="$t('all')"
      class="mb-5 md:mb-4"
    />
    <div class="flex gap-6">
      <CardsPhotoReportSliderCard :card="image" main class="!w-[787px]" />
      <div
        class="grid lg:justify-between justify-center lg:flex-nowrap flex-wrap gap-4 pr-10"
      >
        <CardsPhotoReports
          v-for="(item, index) in 3"
          :key="index"
          :auto="auto"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'swiper/css'

import { Swiper, SwiperSlide } from 'swiper/vue'

const settings = {
  slidesPerView: 'auto',
  spaceBetween: 44,
  loop: true,
}

const image = {
  title:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, maxime!',
  imagesCount: 10,
  images: [
    'https://picsum.photos/800/701',
    'https://picsum.photos/800/702',
    'https://picsum.photos/800/703',
    'https://picsum.photos/800/704',
    'https://picsum.photos/800/705',
    'https://picsum.photos/800/706',
    'https://picsum.photos/800/707',
    'https://picsum.photos/800/708',
    'https://picsum.photos/800/709',
    'https://picsum.photos/800/710',
    'https://picsum.photos/800/711',
    'https://picsum.photos/800/712',
  ],
}

interface Props {
  data: object
}
defineProps<Props>()
</script>
