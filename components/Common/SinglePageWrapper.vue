<template>
  <div class="grid grid-cols-12 gap-8">
    <main class="col-span-12 md:col-span-9">
      <h2
        class="text-blue-700 dark:text-white text-[32px] font-bold leading-10"
      >
        {{ single.title }}
      </h2>
      <div class="my-4 flex items-center gap-4">
        <span class="text-blue-200 text-sm font-normal leading-tight">{{
          dayjs(single.created_at).format('DD MMMM, HH:mm')
        }}</span>
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
        class="text-blue-700 text-2xl font-medium leading-[33px] transition-200 dark:text-white"
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
          class="text-neutral-400 text-xs font-normal leading-none mt-2"
        >
          © Фото: <span class="italic">{{ single.author }}</span>
        </figcaption>
      </figure>
      <div
        class="mx-auto my-10 text-dark-200 text-lg font-normal leading-relaxed transition-200 dark:text-white single-content"
        v-html="single.content"
      ></div>
      <slot />
    </main>
    <aside class="max-md:hidden md:col-span-3">
      <div class="mt-14 w-full h-full">
        <slot name="aside" />
      </div>
    </aside>
  </div>
</template>
<script setup lang="ts">
import dayjs from 'dayjs'

import { ISingleData } from '~/types'

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
</style>
