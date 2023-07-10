<template>
  <div class="pb-16">
    <CommonBreadcrumb :menu="breadcrumbRoutes" />
    <div class="container">
      <CommonPageWrapper
        :title="$t('photo_reports')"
        :text="$t('photo_reports_text')"
        class="mt-8"
      >
        <client-only>
          <CardsPhotoReportSliderCard
            v-bind="{
              card: photoReports,
              auto: {
                delay: 5000,
                disableOnInteraction: true,
                reverseDirection: true,
              },
            }"
            main
            class="mb-11"
          />
        </client-only>
        <div>
          <div class="grid grid-cols-2 gap-8 mb-14">
            <CardsPhotoReportSliderCard
              v-for="(item, index) in counter"
              :key="index"
              v-bind="{
                card: photoReports,
                auto: {
                  delay: 9000 + getRandomNumber() * 1000,
                  disableOnInteraction: true,
                  reverseDirection: true,
                },
              }"
              class="min-h-[250px]"
              small
            />
          </div>
          <CommonButton
            v-if="
              !photoReportsStore.loading &&
              photoReports?.length < photoReportsStore.count
            "
            :loading="isLoading"
            class="w-full text-blue-600 dark:hover:text-white !bg-[#52618f1a] font-medium leading-125 mt-8 mb-16"
            @click="loadMore"
          >
            <span class="icon-double rotate-90 mr-[10px] text-xl"></span>
            {{ $t('load_more') }}</CommonButton
          >
        </div>
        <!--        this is skeleton-->
        <div v-if="false" class="flex gap-5 mb-20">
          <BlockLoaderPhotoReports />
          <BlockLoaderPhotoReports />
        </div>
        <!--        this is skeleton-->
        <template #aside>
          <TempAdvetisimentBanner />
        </template>
      </CommonPageWrapper>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { usePhotoReportsStore } from '~/store/photo-reports'

const photoReportsStore = usePhotoReportsStore()

const photoReports = computed(() => photoReportsStore.reports)

const { t } = useI18n()

const isLoading = ref(false)
const counter = ref(4)

// const loadMore = () => {
//   isLoading.value = true
//
//   setTimeout(() => {
//     counter.value += 1
//     isLoading.value = false
//   }, 1000)
// }
// const image = {
//   title:
//     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, maxime!',
//   imagesCount: 10,
//   images: [
//     'https://picsum.photos/800/701',
//     'https://picsum.photos/800/702',
//     'https://picsum.photos/800/703',
//     'https://picsum.photos/800/704',
//     'https://picsum.photos/800/705',
//     'https://picsum.photos/800/706',
//     'https://picsum.photos/800/707',
//     'https://picsum.photos/800/708',
//     'https://picsum.photos/800/709',
//     'https://picsum.photos/800/710',
//     'https://picsum.photos/800/711',
//     'https://picsum.photos/800/712',
//   ],
// }

function getRandomNumber() {
  return Math.floor(Math.random() * 5) + 1
}

const breadcrumbRoutes = [{ title: t('photo_reports'), link: '/photo-reports' }]
const loadMore = () => {
  isLoading.value = true
  photoReportsStore.params.offset += 5
  photoReportsStore.fetchPhotoReports(photoReportsStore.params, true)
  //   .finally(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 300)
  // })
}
photoReportsStore.fetchPhotoReports(photoReportsStore.params, false)
</script>
