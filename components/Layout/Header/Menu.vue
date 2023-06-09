<template>
  <div
    class="absolute left-0 top-0 w-full h-screen bg-white z-20 transition-200 dark:bg-blue-700 overflow-y-auto"
  >
    <div class="h-full pt-[233.9px] pb-16 min-h-[800px]">
      <div class="relative container h-full flex flex-col">
        <div class="relative h-full flex-y-center justify-center py-16">
          <div class="flex items-stretch">
            <div class="inline-flex flex-col space-y-4">
              <NuxtLink
                v-for="(link, i) of navigationData"
                :key="i"
                :to="localePath(`/${link?.url}`)"
                class="text-blue-600 text-44 font-medium transition-200 hover:text-blue-200 cursor-pointer dark:text-white dark:hover:text-blue-100"
              >
                {{ link?.title }}
              </NuxtLink>
            </div>
            <div class="linear-section-wrapper w-px h-auto mr-8 ml-16" />
            <div class="inline-flex flex-col space-y-5 py-8">
              <NuxtLink
                v-for="(link, idx) of headerMainMenuData"
                :key="idx"
                class="flex-y-center space-x-2 group cursor-pointer"
              >
                <span
                  :class="`icon-${link?.icon}`"
                  class="flex-shrink-0 text-blue-100 text-xl transition-200 group-hover:text-blue-600 dark:text-blue-100 dark:group-hover:text-white"
                />
                <span
                  class="text-blue-200 text-base font-medium transition-200 leading-20 group-hover:text-blue-600 dark:text-blue-100 dark:group-hover:text-white"
                >
                  {{ link?.title }}
                </span>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="flex items-end justify-between mt-auto">
          <div class="space-y-3">
            <div class="space-x-4">
              <a
                v-for="(link, i) of socialsData"
                :key="i"
                :href="link?.url"
                class="!text-2xl text-blue-200 transition-200 hover:text-blue-700 dark:text-blue-100 dark:hover:text-white"
                :class="`icon-${link?.icon}`"
              />
            </div>
            <div
              class="inline-flex items-center space-x-1 text-blue-200 dark:text-gray-200"
            >
              <span>{{ $t('age_limit') }}</span>
              <span class="icon-circle text-2xl text-" />
            </div>
          </div>
          <div class="inline-flex items-center space-x-4 text-blue-200">
            <NuxtLink
              v-for="(link, index) of headerBottomMenuData"
              :key="index"
              :to="localePath(link?.url)"
              class="text-sm font-normal leading-130 transition-200 hover:text-blue-700 dark:text-blue-100 dark:hover:text-white"
            >
              {{ link?.title }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  headerBottomMenuData,
  headerMainMenuData,
  navigationData,
  socialsData,
} from '~/data'
</script>
<style>
.linear-section-wrapper {
  background: linear-gradient(
    90deg,
    rgba(162, 188, 222, 0.1) 0%,
    #a2bcde 51.67%,
    rgba(162, 188, 222, 0.1) 100%
  );
}
</style>
