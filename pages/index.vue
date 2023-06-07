<template>
  <div class="container">
    <div class="grid grid-cols-12 gap-8 pt-[120px]">
      <div class="col-span-8">
        <SectionsMainSwiper />
      </div>
      <div class="col-span-4">Div-2</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mainSwiperData } from '@/data'
</script>
