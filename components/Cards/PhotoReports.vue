<template>
  <NuxtLink
    to="/"
    class="transition-200 bg-white-700 dark:bg-blue-100/[16%] rounded-lg px-4 py-5 relative flex-y-center hover:bg-white-900 dark:hover:bg-blue-100/[16%] group"
  >
    <div class="flex flex-col justify-between h-full grow">
      <h2
        class="transition-200 before:transition-200 line-clamp-3 text-blue-700 dark:text-white text-sm leading-136 font-bold mb-10 before:content-[''] before:h-[54px] before:-translate-y-1/3 before:top-1/3 before:transition-all before:duration-200 before:origin-center before:!max-h-0 group-hover:before:!max-h-full before:absolute before:left-0 before:w-0.5 before:rounded before:bg-blue-100"
      >
        В Яккасарайском районе столицы возведут новый парк отдыха
      </h2>
      <p
        class="flex-y-center space-x-1 text-sm transition-200 text-blue-200 dark:text-blue-100 font-medium"
      >
        <i class="icon-gallery text-sm"></i>
        <span>{{ formatNumberWithSpaces(22) }}</span>
      </p>
    </div>
    <div
      class="w-[178px] h-[122px] relative ml-3 grow -mr-14 w-full max-w-[180px] min-w-[178px] min-h-[107px] relative"
    >
      <Swiper v-bind="settings">
        <SwiperSlide v-for="(item, index) in 3" :key="index">
          <img
            :src="`https://picsum.photos/200/30${index}`"
            alt=""
            class="aspect-video object-cover rounded-lg absolute w-full h-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/effect-cards'

import { Autoplay, EffectCards, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

const settings = {
  grabCursor: true,
  spaceBetween: 16,
  loop: true,
  effect: 'cards',
  direction: 'vertical',
  cardsEffect: {
    perSlideOffset: 12, // Space between cards in px
    perSlideRotate: 0, // Rotation of cards in degrees
    shadow: 0,
  },
  center: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    prevEl: '.main-button-prev',
    nextEl: '.main-button-next',
  },
  modules: [Navigation, Autoplay, EffectCards],
}
</script>
<style scoped>
.swiper-cards {
  width: 100%;
  height: 100%;
}
.swiper-cards .swiper-slide {
  border-radius: 8px;
}
</style>
