<template>
  <div class="container pt-[120px]">
    <div class="sm:grid grid-cols-12 gap-8">
      <div class="col-span-8">
        <SectionsMainSwiper />
      </div>
      <div class="col-span-4">Div-2</div>
    </div>
    <div class="flex">
      <CardsSpecialReports />
    </div>
    <div class="h-6"></div>
    <CommonSectionWrapper />
  </div>
</template>

<script setup lang="ts">
import { mainSwiperData } from '@/data'
</script>
