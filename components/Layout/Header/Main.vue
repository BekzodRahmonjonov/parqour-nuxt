<template>
  <div class="w-auto overflow-hidden">
    <Swiper v-bind="settings" class="h-5">
      <SwiperSlide>
        <LayoutHeaderSalary />
      </SwiperSlide>
      <SwiperSlide>
        <LayoutHeaderLegal :salary="970000" type="МПОТ" currency="UZS" />
      </SwiperSlide>
      <SwiperSlide>
        <LayoutHeaderLegal :salary="330000" type="БРВ" currency="UZS" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

import { mainSwiperData } from '~/data'

const settings = {
  loop: true,
  direction: 'vertical',
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  modules: [Autoplay],
}
</script>
