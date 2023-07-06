<template>
  <div>
    <CommonBreadcrumb :menu="menu" />
    <div class="container">
      <div class="max-w-[988px] mx-auto">
        <div class="relative md:max-h-[580px] overflow-hidden">
          <div
            class="absolute top-0 left-0 w-full h-full cover-linear flex flex-col items-start justify-end p-6"
          >
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
          <img
            src="https://picsum.photos/988/580"
            class="object-cover w-full h-full"
            alt=""
          />
        </div>
        <div class="grid grid-cols-12 gap-8 mt-8">
          <main class="col-span-12 md:col-span-9">
            <figure v-if="single?.image" class="max-h-[498px] h-full">
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
            <slot />
          </main>
          <aside class="max-md:hidden md:col-span-3">
            <div class="w-full h-full">
              <slot name="aside" />
            </div>
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import 'swiper/css'

import dayjs from 'dayjs'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useI18n } from 'vue-i18n'

import { reportsData } from '~/data'
import { ISingleData } from '~/types'

const { t } = useI18n()
const menu = [
  { title: t('special_reports'), link: '/special-reports' },
  { title: t('reports_single'), link: '/special-reports' },
]
interface Props {
  single: ISingleData
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

.cover-linear {
  background: linear-gradient(
    180deg,
    rgba(22, 28, 45, 0) 0%,
    rgba(22, 28, 45, 0.06) 7.29%,
    rgba(22, 28, 45, 0.88) 100%
  );
}
</style>
