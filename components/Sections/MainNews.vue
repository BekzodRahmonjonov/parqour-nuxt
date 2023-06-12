<template>
  <div class="container">
    <div class="lg:grid grid-cols-12 gap-8">
      <div class="col-span-8">
        <SectionsMainSwiper />
        <div class="mt-8 flex flex-col gap-3 lg:gap-6">
          <div class="grid lg:grid-cols-2 gap-3 lg:gap-8">
            <CardsNewsSmall
              v-for="(card, index) in newsData.slice(0, 2)"
              v-bind="{ card }"
              :key="index"
            />
          </div>
          <div
            class="w-full h-[0.5px] bg-white-200 dark:bg-blue-200/20 transition-200 hidden lg:block"
          />
          <div class="grid lg:grid-cols-2 gap-3 lg:gap-8">
            <CardsNewsSmall
              v-for="(card, index) in newsData.slice(2, 4)"
              v-bind="{ card }"
              :key="index"
              class="last:border-b-[0px]"
            />
          </div>
        </div>
      </div>
      <div
        class="col-span-4 bg-white-400 dark:bg-blue-100/[16%] transition-200 rounded-lg mt-6 lg:mt-0"
      >
        <SectionsSidebarNews />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { newsData } from '~/data'
</script>

<style scoped></style>
