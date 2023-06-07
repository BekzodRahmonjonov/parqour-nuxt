<template>
  <div>
    <div class="container">
      <div class="grid grid-cols-12 gap-8 pt-[120px]">
        <div class="col-span-8">
          <CardsMainSwiper :card="mainSwiperData[0]" />
        </div>
        <div class="col-span-4">Div-2</div>
      </div>
    </div>
    <SectionReports :data="reportsData" />
  </div>
</template>

<script setup lang="ts">
import { mainSwiperData, reportsData } from '@/data'
</script>
