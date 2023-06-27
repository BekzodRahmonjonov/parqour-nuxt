<template>
  <swiper
    class="swiper"
    :loop="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :modules="modules"
    :space-between="20"
    :slides-per-view="'auto'"
  >
    <swiper-slide
      v-for="(item, index) in SliderMain"
      :key="index"
      class="!w-[253px]"
    >
      <div class="slide !w-[300px]">
        <img :src="item?.img" alt="image" @click="show = true" />
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/pagination'

import { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'

const show = ref(false)
const SliderMain = [
  {
    img: '/images/face.png',
  },
  {
    img: '/images/face.png',
  },
  {
    img: '/images/face.png',
  },
  {
    img: '/images/face.png',
  },
  {
    img: '/images/face.png',
  },
  {
    img: '/images/face.png',
  },
  {
    img: '/images/face.png',
  },
  {
    img: '/images/face.png',
  },
  {
    img: '/images/face.png',
  },
  {
    img: '/images/face.png',
  },
  {
    img: '/images/face.png',
  },
  {
    img: '/images/face.png',
  },
  {
    img: '/images/face.png',
  },
  {
    img: '/images/face.png',
  },
  {
    img: '/images/face.png',
  },
  {
    img: '/images/face.png',
  },
  {
    img: '/images/face.png',
  },
  {
    img: '/images/face.png',
  },
  {
    img: '/images/face.png',
  },
  {
    img: '/images/face.png',
  },
  {
    img: '/images/face.png',
  },
  {
    img: '/images/face.png',
  },
  {
    img: '/images/face.png',
  },
  {
    img: '/images/face.png',
  },
  {
    img: '/images/face.png',
  },
  {
    img: '/images/face.png',
  },
  {
    img: '/images/face.png',
  }
]

const modules = [Autoplay]
</script>
