<template>
  <div class="thumb-example">
    <div class="relative h-[480px] overflow-hidden">
      <div
        class="slide-prev absolute-y-center left-5 z-50 w-12 h-12 flex-center rounded-full border-2 border-white/30 cursor-pointer hover:bg-white/10 transition-200"
      >
        <i class="icon-arrow-left text-white text-xl pointer-events-none"></i>
      </div>
      <div
        class="slide-next absolute-y-center right-5 z-50 w-12 h-12 flex-center rounded-full border-2 border-white/30 cursor-pointer hover:bg-white/10 transition-200"
      >
        <i class="icon-arrow-right text-white text-xl pointer-events-none"></i>
      </div>
      <swiper
        class="top-swiper"
        :modules="modules"
        :space-between="12"
        :navigation="true"
        :grab-cursor="true"
        :thumbs="{ swiper: thumbsSwiper }"
      >
        <swiper-slide v-for="index in 12" :key="index" class="slide">
          <img :src="`https://picsum.photos/1024/968`" />
        </swiper-slide>
      </swiper>
    </div>

    <swiper
      class="thumbs-swiper"
      :modules="modules"
      :space-between="12"
      :slides-per-view="9"
      :watch-slides-progress="true"
      :grab-cursor="true"
      :prevent-clicks="false"
      :prevent-clicks-propagation="false"
      @swiper="setThumbsSwiper"
    >
      <swiper-slide v-for="index in 12" :key="index" class="slide">
        <img :src="`https://picsum.photos/1024/968`" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'

import SwiperClass, { Navigation, Pagination, Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'

const thumbsSwiper = ref<SwiperClass>()
const setThumbsSwiper = (swiper: SwiperClass) => {
  thumbsSwiper.value = swiper
}

const modules = [Navigation, Thumbs, Pagination]

// const settingsFirst = {
//   spaceBetween: 12,
//   navigation: {
//     nextEl: '.slide-next',
//     prevEl: '.slide-prev',
//   },
//   grabCursor
// }
</script>

<style scoped>
.thumb-example {
  height: 480px;
  background-color: transparent;
}

.top-swiper,
.thumbs-swiper .slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

.top-swiper {
  height: 100%;
  width: 100%;
}

.thumbs-swiper {
  height: 20%;
  box-sizing: border-box;
  padding: 18px 0;
}

.thumbs-swiper .slide {
  width: 80px;
  height: 48px;
  opacity: 1;
}

.thumbs-swiper .slide:not(.swiper-slide-thumb-active) {
  opacity: 0.4;
}
</style>
