<template>
  <div class="container pt-[120px]">
    <div class="md:grid grid-cols-12 gap-8">
      <div class="col-span-8">
        <SectionsMainSwiper />
      </div>
      <div
        class="col-span-4 bg-white-400 dark:bg-blue-100/[16%] transition-300 rounded-lg"
      >
        <SectionsSidebarNews />
      </div>
    </div>
    <div class="flex">
      <CardsSpecialReports />
    </div>
    <CommonSectionWrapper class="mt-6" />
    <CommonSectionWrapper class="mt-6" is-centered />
    <CommonSectionWrapper class="mt-6">
      <template #actions> Actions </template>
    </CommonSectionWrapper>
  </div>
</template>

<script setup lang="ts"></script>
