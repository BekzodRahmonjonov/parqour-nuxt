<template>
  <CommonBreadcrumb :menu="menu" class="mb-8" />
  <div class="container">
    <div class="grid grid-cols-12 gap-8">
      <main class="col-span-12 md:col-span-9">
        <h2
          class="text-blue-700 dark:text-white text-[32px] font-bold leading-10"
        >
          {{ single.title }}
        </h2>
        <div class="my-4 flex items-center gap-4">
          <span class="text-blue-200 text-sm font-normal leading-tight">
            <i
              class="icon-calendar-dotted group-odd:text-white/60 group-even:text-gray mr-1"
            ></i>
            {{ dayjs(single.created_at).format('DD MMMM, HH:mm') }}</span
          >
          <p
            class="text-blue-200 text-sm font-normal leading-tight flex items-center"
          >
            <i
              class="icon-eye group-odd:text-white/60 group-even:text-gray mr-1"
            ></i>
            {{ formatNumberWithSpaces(single.views_count) }}
          </p>
        </div>
        <p
          class="text-blue-700 text-2xl font-medium leading-[33px] transition-200 dark:text-white mb-6"
        >
          {{ single.text }}
        </p>
        <figure v-if="single?.image" class="mt-6 max-h-[498px] h-full">
          <img
            :src="single.image"
            class="w-full h-full object-cover rounded"
            alt=""
          />
          <figcaption
            v-if="single.author"
            class="text-neutral-400 text-xs font-normal leading-none mt-2 italic"
          >
            © Фото: {{ single.author }}
          </figcaption>
        </figure>
        <div
          class="mx-auto my-10 text-dark-200 text-lg font-normal leading-relaxed transition-200 dark:text-white single-content"
          v-html="single.content"
        ></div>
        <CommonAdBanner
          image="/images/advertising/yellow.png"
          class="mb-10 md:mb-20"
        />
        <slot />
      </main>
      <aside class="max-md:hidden md:col-span-3">
        <div class="mt-14 w-full h-full">
          <slot name="aside" />
        </div>
      </aside>
    </div>
  </div>
  <div class="mb-6 container">
    <CommonSectionWrapper
      :title="$t('special_reports')"
      all-link="/special-reports"
    />
    <Swiper v-bind="settings">
      <SwiperSlide
        v-for="(item, idx) in reportsData"
        :key="idx"
        class="py-5 !w-[333px] h-[147px]"
      >
        <CardsSpecialReports special-report :data="item" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script setup lang="ts">
import 'swiper/css'

import dayjs from 'dayjs'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useI18n } from 'vue-i18n'

import { reportsData } from '~/data'
import { ISingleData, ISinglePhoto } from '~/types'

const { t } = useI18n()
const menu = [
  { title: t('special_reports'), link: '/special-reports' },
  { title: t('reports_single'), link: '/special-reports' },
]
const settings = {
  slidesPerView: 'auto',
  spaceBetween: 75,
  loop: true,
  navigation: {
    prevEl: '.button-report-prev',
    nextEl: '.button-report-next',
  },
  modules: [Navigation],
}

interface Props {
  single: ISingleData
  singlePhoto: ISinglePhoto
}
defineProps<Props>()
</script>
<style>
.single-content div {
  max-width: 698px;
  margin: 0 auto;
}
.single-content figure {
  margin: 24px auto 40px;
  width: 100%;
  max-height: 498px;
  height: 100%;
}
.single-content figure img {
  width: 100%;
  height: 100%;
  max-height: 498px;
  object-fit: cover;
  border-radius: 4px;
}
.single-content figure figcaption {
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
</style>
