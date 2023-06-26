<template>
  <div
    class="relative w-full h-full"
    :class="main ? 'max-h-[548px]' : 'max-h-[260px]'"
  >
    <Swiper
      v-bind="settings"
      class="w-full h-full rounded relative z-10"
      :class="main ? 'max-h-[548px]' : 'max-h-[260px]'"
    >
      <SwiperSlide
        v-for="(item, index) in 3"
        :key="index"
        class="w-full h-full aspect-video rounded"
        :class="main ? 'max-h-[548px]' : 'max-h-[260px]'"
      >
        <img
          :src="`https://picsum.photos/200/30${index}`"
          alt=""
          class="aspect-video object-cover rounded absolute w-full h-full photo-report-overlay"
          :class="main ? 'max-h-[548px]' : 'max-h-[260px]'"
        />
      </SwiperSlide>
    </Swiper>
    <div
      class="absolute main-button-prev inset-0 w-full h-full photo-report-overlay pt-4 px-4 pb-5 !rounded z-20 flex flex-col justify-between items-end"
    >
      <div
        class="text-lg text-white font-bold px-3 py-2.5 bg-blue-700/40 rounded"
      >
        28+
      </div>
      <p class="text-white text-base font-medium leading-6">
        Незаконные сносы бизнеса добрались до Кибрайского района? — спецрепортаж
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/effect-cards'

import { Autoplay, EffectCards, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

interface Props {
  images: any
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
  navigation: {
    prevEl: '.main-button-prev',
    nextEl: '.main-button-next',
  },
  modules: [Navigation, Autoplay, EffectCards],
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
