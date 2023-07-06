<template>
  <div class="w-40 overflow-hidden">
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
import { mainSwiperData } from '~/data'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper'

const settings = {
  spaceBetween: 40,
  loop: true,
  direction: 'vertical',
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  modules: [Autoplay],
}
</script>

<style scoped></style>
