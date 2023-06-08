<template>
  <div class="container pt-[120px]">
    <div class="md:grid grid-cols-12 gap-8 mb-10">
      <div class="col-span-8">
        <SectionsMainSwiper />
        <div class="mt-8">
          <div class="grid grid-cols-2 gap-8">
            <CardsNewsSmall
              v-for="(card, index) in newsData.slice(0, 2)"
              v-bind="{ card }"
              :key="index"
            />
          </div>
          <div
            class="w-full h-[0.5px] bg-white-200 my-6 dark:bg-blue-200/20 transition-300"
          />
          <div class="grid grid-cols-2 gap-8">
            <CardsNewsSmall
              v-for="(card, index) in newsData.slice(2, 4)"
              v-bind="{ card }"
              :key="index"
            />
          </div>
        </div>
      </div>
      <div
        class="col-span-4 bg-white-400 dark:bg-blue-100/[16%] transition-300 rounded-lg"
      >
        <SectionsSidebarNews />
      </div>
    </div>

    <div class="my-10">
      <CommonSectionWrapper class="mt-6" />

      <div class="grid grid-cols-4 gap-6 mt-6">
        <CardsNews
          v-for="(card, index) in newsData"
          v-bind="{ card }"
          :key="index"
        />
      </div>
    </div>

    <CommonAdBanner image="/images/ad/ad.png" />
    <div class="my-10">
      <CommonSectionWrapper class="mt-6" />

      <div class="grid grid-cols-12 gap-6 mt-6">
        <CardsAuthor
          v-for="(card, index) in authorsData"
          :key="index"
          v-bind="{ card }"
          class="col-span-4"
          :is-half="index === 0 || index === 1"
          :class="{ 'col-span-6': index === 0 || index === 1 }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { authorsData, newsData } from '@/data'
</script>
