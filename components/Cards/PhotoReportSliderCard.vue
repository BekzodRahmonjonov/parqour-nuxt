<template>
  <div class="relative w-full aspect-video">
    <!--    paginations-->
    <div
      v-if="$route?.path == '/'"
      class="relative hidden md:flex justify-center top-2/4 translate-y-2/4 z-[2] swiper-cursor"
    >
      <div class="flex-y-center !justify-between w-[92%]">
        <button
          class="main-button-prev bg-black/[20%] w-7 h-7 rounded flex-center transition-200 hover:bg-black/[60%] active:scale-90"
        >
          <i class="icon-arrow-left text-white" />
        </button>
        <button
          class="main-button-next bg-black/[20%] w-7 h-7 rounded flex-center transition-200 hover:bg-black/[60%] active:scale-90"
        >
          <i class="icon-arrow-right text-white" />
        </button>
      </div>
    </div>
    <!--    paginations-->
    <Swiper
      v-bind="settings"
      :autoplay="auto"
      class="w-full h-full rounded relative z-10"
    >
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
        <div
          class="absolute inset-0 w-full h-full photo-report-overlay pt-4 px-4 pb-5 !rounded z-20 flex flex-col pointer-events-none"
          :class="
            small ? 'justify-between items-end' : 'justify-end items-start'
          "
        >
          <div
            class="text-xs text-white font-bold px-[10px] py-[6px] bg-blue-700/40 rounded mb-3"
            :class="small ? 'hidden' : 'block'"
          >
            {{ index + 1 }}/{{ card?.images.length }}
          </div>
          <div
            class="text-lg text-white font-bold px-3 py-2.5 bg-blue-700/40 rounded mb-3 leading-130"
            :class="small ? 'flex' : 'hidden'"
          >
            {{ card?.images.length }}
            <p v-if="card?.images.length > 1">+</p>
          </div>
          <p class="text-white text-base font-medium leading-6">
            {{ card?.title }}
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/effect-cards'

import { Autoplay, EffectCards, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

interface Props {
  card?: {
    title: string
    views: number
    date: string
    imagesCount: number
    images: string[]
  }
  auto: {
    delay: number
    disableOnInteraction: boolean
    reverseDirection: boolean
  }
  main?: boolean
  small?: boolean
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
  navigation: {
    prevEl: '.main-button-prev',
    nextEl: '.main-button-next',
  },
  modules: [Autoplay, EffectCards, Navigation],
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
