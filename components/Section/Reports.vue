<template>
  <div class="bg-blue-700 pt-10 pb-12">
    <div class="container">bla bla</div>
    <Swiper v-bind="settings">
      <SwiperSlide v-for="(item, idx) in data" :key="idx" class="py-4">
        <CardsSpecialReports :data="item" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import 'swiper/css'

import { Swiper, SwiperSlide } from 'swiper/vue'

const settings = {
  slidesPerView: 4,
  spaceBetween: 44,
  loop: true,
  freeMode: true,
}

interface Props {
  data: object
}
defineProps<Props>()
</script>
