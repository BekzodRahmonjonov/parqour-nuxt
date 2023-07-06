<template>
  <div class="pb-16">
    <CommonBreadcrumb :menu="breadcrumb" />
    <div class="relative md:max-h-[580px] overflow-hidden">
      <div
        class="absolute top-0 left-0 w-full h-full cover-linear flex flex-col items-start justify-end p-6"
      >
        <div class="container">
          <div class="mb-2 sm:mb-4 flex items-center gap-4">
            <span class="text-white text-sm font-normal leading-tight">
              <i
                class="icon-calendar-dotted group-odd:text-white/60 group-even:text-gray mr-1"
              ></i>
              {{ dayjs(single.created_at).format('DD MMMM, HH:mm') }}</span
            >
            <p
              class="text-white text-sm font-normal leading-tight flex items-center"
            >
              <i
                class="icon-eye group-odd:text-white/60 group-even:text-gray mr-1"
              ></i>
              {{ formatNumberWithSpaces(single.views_count) }}
            </p>
          </div>
          <h2
            class="text-white text-xl sm:text-2xl md:text-[32px] font-bold leading-10 line-clamp-2"
          >
            {{ single.title }}
          </h2>
        </div>
      </div>
      <img
        src="https://picsum.photos/1024/580"
        class="object-cover w-full h-full"
        alt=""
      />
    </div>
    <div>
      <div class="grid grid-cols-12 gap-6 mt-8">
        <main class="col-span-12 md:col-span-12">
          <div
            class="mx-auto my-10 text-dark-200 text-lg font-normal leading-relaxed transition-200 dark:text-white single-content"
            v-html="single.content"
          ></div>
          <slot />
        </main>
      </div>
    </div>
    <div class="max-w-[988px] mx-auto">
      <div class="flex items-center justify-between mb-6">
        <div class="flex-y-center gap-3">
          <NewsTags v-bind="{ tags: interviewTags }" />
        </div>
        <CommonLikeDislike />
      </div>
      <CardsSingleAuthor :data="single" />
      <hr class="mt-6 mb-6 border-gray-300 inline-block w-full" />
      <CommonShareLink @click="contactModal = true" />
    </div>
    <ModalContactModal :show="contactModal" @close="contactModal = false" />
  </div>
</template>
<script setup lang="ts">
import dayjs from 'dayjs'
import { useI18n } from 'vue-i18n'

import { interviewTags } from '~/data'
import { ISingleData } from '~/types'

const contactModal = ref(false)

const { t } = useI18n()

const breadcrumb = [
  { title: t('special_reports'), link: '/special-reports' },
  { title: t('reports_single'), link: '/special-reports' },
]
interface Props {
  single: ISingleData
}
defineProps<Props>()
</script>

<style scoped>
.single-content div {
  max-width: 988px;
  margin: 0 auto;
}
.single-content figure {
  margin: 24px auto 40px;
  min-width: 100vh;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  max-height: 498px;
  height: 100%;
}
.single-content figure img {
  width: 100%;
  height: 100%;
  max-height: 498px;
  object-fit: cover;
}
.single-content figure figcaption {
  display: none;
  margin-top: 8px;
  color: #919299;
  font-size: 12px;
  font-style: italic;
  line-height: 140%;
}
.single-content blockquote {
  max-width: 698px;
  margin: 24px auto;
  border-radius: 4px;
  background: rgba(162, 188, 222, 0.2);
  padding: 24px;
  color: #2c3752;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  position: relative;
}
.dark .single-content blockquote {
  color: white;
}
.single-content blockquote::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: #52618f;
  border-radius: 4px;
}
.single-content blockquote:after {
  content: url('/svg/quote.svg');
  position: absolute;
  top: 24px;
  left: 24px;
  margin: 0;
}

.cover-linear {
  background: linear-gradient(
    180deg,
    rgba(22, 28, 45, 0) 0%,
    rgba(22, 28, 45, 0.06) 7.29%,
    rgba(22, 28, 45, 0.88) 100%
  );
}
</style>
