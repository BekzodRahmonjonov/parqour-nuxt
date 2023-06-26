<template>
  <div class="relative w-full aspect-video">
    <Swiper v-bind="settings" class="w-full h-full rounded relative z-10">
      <SwiperSlide
        v-for="(item, index) in card.images"
        :key="index"
        class="w-full h-full aspect-video rounded"
      >
        <img
          :src="item"
          :alt="card?.title"
          class="aspect-video object-cover rounded absolute w-full h-full photo-report-overlay"
        />
      </SwiperSlide>
    </Swiper>
    <div
      class="absolute inset-0 w-full h-full photo-report-overlay pt-4 px-4 pb-5 !rounded z-20 flex flex-col justify-between items-end"
    >
      <div
        class="text-lg text-white font-bold px-3 py-2.5 bg-blue-700/40 rounded"
      >
        {{ card?.imagesCount }}
      </div>
      <p class="text-white text-base font-medium leading-6">
        {{ card?.title }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/effect-cards'

import { Autoplay, EffectCards } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

interface Props {
  card?: {
    title: string
    views: number
    date: string
    imagesCount: number
    images: string[]
  }
  main?: boolean
}
defineProps<Props>()

const settings = {
  grabCursor: true,
  spaceBetween: 24,
  loop: true,
  effect: 'cards',
  direction: 'vertical',
  cardsEffect: {
    perSlideOffset: 8, // Space between cards in px
    perSlideRotate: 0, // Rotation of cards in degrees
    shadow: 0,
  },
  center: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    reverseDirection: true,
  },
  modules: [Autoplay, EffectCards],
}
</script>
<style>
.photo-report-overlay {
  border: 0.5px solid #f2f2f6;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(25, 31, 46, 0.06) 55.73%,
    rgba(25, 31, 46, 0.8) 100%
  );
}
</style>
