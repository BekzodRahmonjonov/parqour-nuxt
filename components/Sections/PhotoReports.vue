<template>
  <div class="container">
    <CommonSectionWrapper
        :title="$t('photo_reports')"
        :all-link="'/special-reports'"
        :all-title="$t('all')"
        class="mb-5 md:mb-4"
    />
    <div class="flex justify-between gap-[60px] pr-10">
      <CardsPhotoReports v-for="(item, index) in 3" :key="index" />
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

interface Props {
  data: object
}
defineProps<Props>()
</script>
