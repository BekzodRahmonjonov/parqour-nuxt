<template>
  <div>
    <CommonBreadcrumb :menu="[{ title: 'Разборы', link: '/' }]" />
    <div class="container">
      <CommonPageWrapper
        :title="$t('photo_reports')"
        :text="$t('photo_reports_text')"
        class="mt-8"
      >
        <CardsPhotoReportSliderCard :card="image" main class="mb-11" />
        <div>
          <nuxt-link to="/photo-reports/1" class="grid grid-cols-2 gap-8 mb-14">
            <CardsPhotoReportSliderCard
              v-for="(item, index) in counter"
              :key="index"
              :card="image"
              class="min-h-[250px]"
              :small="true"
            />
          </nuxt-link>
          <CommonButton
            :loading="isLoading"
            class="w-full text-blue-600 dark:hover:text-white !bg-[#52618f1a] font-medium leading-125 mt-8 mb-16"
            @click="loadMore"
          >
            <span class="icon-double rotate-90 mr-[10px] text-xl"></span>
            {{ $t('load_more') }}</CommonButton
          >
        </div>
        <div class="flex gap-5 mb-20">
          <BlockLoaderPhotoReports />
          <BlockLoaderPhotoReports />
        </div>
        <template #aside>
          <TempAdvetisimentBanner />
        </template>
      </CommonPageWrapper>
    </div>
  </div>
</template>
<script setup lang="ts">
const isLoading = ref(false)
const counter = ref(4)
const loadMore = () => {
  isLoading.value = true

  setTimeout(() => {
    counter.value += 1
    isLoading.value = false
  }, 1000)
}
const image = {
  title:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, maxime!',
  imagesCount: 10,
  images: [
    'https://picsum.photos/800/701',
    'https://picsum.photos/800/702',
    'https://picsum.photos/800/703',
    'https://picsum.photos/800/704',
    'https://picsum.photos/800/705',
    'https://picsum.photos/800/706',
    'https://picsum.photos/800/707',
    'https://picsum.photos/800/708',
    'https://picsum.photos/800/709',
    'https://picsum.photos/800/710',
    'https://picsum.photos/800/711',
    'https://picsum.photos/800/712',
  ],
}
</script>
