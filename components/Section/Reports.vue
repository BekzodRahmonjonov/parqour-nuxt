<template>
  <div class="bg-blue-700 pt-10 pb-12">
    <div class="container">
      <CommonSectionWrapper
        :title="$t('special_reports')"
        :all-link="'/special-reports'"
        :all-title="$t('all')"
        :dark-title="true"
        class="mb-5 md:mb-4"
      />
    </div>
    <div class="hidden md:block">
      <Swiper v-bind="settings">
        <SwiperSlide
          v-for="(item, idx) in data"
          :key="idx"
          class="py-4 !w-[521px] h-[180px]"
        >
          <CardsSpecialReports :data="item" />
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="container">
      <div class="flex flex-col items-center gap-4 md:hidden">
        <CardsSpecialReports
          v-for="(item, idx) in data.slice(0, 3)"
          :key="idx"
          :data="item"
        />
      </div>
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
