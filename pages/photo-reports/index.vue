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
          <div class="grid grid-cols-2 gap-8 mb-14">
            <CardsPhotoReportSliderCard
              v-for="(item, index) in 4"
              :key="index"
              :card="image"
              class="min-h-[250px]"
              :small="true"
            />
          </div>
          <CommonButton
            :loading="isLoading"
            class="w-full text-blue-600 !bg-[#52618f1a] font-medium leading-125 mt-8 mb-16"
            @click="loadMore"
          >
            <span class="icon-double rotate-90 mr-[10px] text-xl"></span>
            {{ $t('load_more') }}</CommonButton
          >
        </div>
        <template #aside>
          <TempAdvetisimentBanner />
        </template>
      </CommonPageWrapper>
    </div>
    <CommentsCommentUpload class="container mb-10" />
  </div>
</template>
<script setup lang="ts">
import { analysisData } from '~/data/fakeData'

const copyOfAnalysisData = ref([...analysisData])
const isLoading = ref(false)

const loadMore = () => {
  isLoading.value = true
  const additionData = {
    title: 'business',
    images: 'https://picsum.photos/800/701',
  }
  setTimeout(() => {
    isLoading.value = false
    copyOfAnalysisData.value.push(additionData)
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
