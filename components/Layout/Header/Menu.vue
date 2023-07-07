<template>
  <div
    class="absolute left-0 top-0 w-full h-screen bg-white z-20 transition-200 dark:bg-blue-700 overflow-y-auto"
  >
    <div class="h-full pt-[104px] md:pt-[233.9px] pb-16 min-h-[900px]">
      <div class="relative container h-full flex flex-col">
        <div
          class="relative h-auto md:h-full flex items-start md:items-center flex-col md:flex-row justify-start md:justify-center py-5 md:py-16"
        >
          <div
            class="w-full flex md:hidden items-center justify-between space-x-3 border-b border-solid border-gray-300 pb-4 mb-5"
          >
            <LanguageSwitcher class="rounded-[150px] bg-white-100 p-1" />
            <div class="flex-y-center space-x-3">
              <NuxtLink to="/">
                <CommonButton
                  variant="secondary"
                  button-class="hover:bg-blue-200/20 dark:hover:bg-blue-200/[16%]"
                >
                  <span
                    class="relative text-blue-200 inline-block icon-plus text-lg font-medium mr-2 leading-20 transition-200 dark:text-blue-100"
                  />
                  <span
                    class="text-sm font-medium leading-20 transition-200 dark:text-white"
                  >
                    {{ $t('news') }}
                  </span>
                </CommonButton>
              </NuxtLink>
              <NuxtLink to="/">
                <CommonButton button-class="hover:bg-blue-200">
                  <span
                    class="relative inline-block icon-login text-lg font-medium mr-2 leading-20 transition-200 group-hover:text-white"
                  />
                  <span
                    class="text-sm font-medium leading-20 transition-200 group-hover:text-white"
                  >
                    {{ $t('login') }}
                  </span>
                </CommonButton>
              </NuxtLink>
            </div>
          </div>
          <div
            class="w-full flex items-stretch justify-center flex-col md:flex-row"
          >
            <div class="inline-flex flex-col space-y-3 md:space-y-4">
              <NuxtLink
                v-for="(link, i) of navigationData"
                :key="i"
                :to="localePath(link?.url)"
                class="text-blue-600 text-xl md:text-44 font-medium transition-200 hover:text-blue-200 cursor-pointer dark:text-white dark:hover:text-blue-100 hover:translate-x-2"
              >
                {{ $t(link?.title) }}
              </NuxtLink>
            </div>
            <div
              class="linear-section-wrapper w-full h-px md:w-px md:h-auto my-4 md:my-0 md:mr-8 md:ml-16"
            />
            <div class="inline-flex flex-col space-y-5 py-0 md:py-8">
              <NuxtLink
                v-for="(link, idx) of headerMainMenuData"
                :key="idx"
                :to="link?.url"
                class="flex-y-center space-x-2 group cursor-pointer"
              >
                <span
                  :class="`icon-${link?.icon}`"
                  class="flex-shrink-0 text-blue-100 text-xl transition-200 group-hover:text-blue-600 dark:text-blue-100 dark:group-hover:text-white"
                />
                <span
                  class="text-blue-200 text-base font-medium transition-200 leading-20 group-hover:text-blue-600 dark:text-blue-100 dark:group-hover:text-white"
                >
                  {{ $t(link?.title) }}
                </span>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div
          class="flex items-start md:items-end md:justify-between mt-auto md:flex-row flex-col-reverse space-y-6 md:space-y-0 space-y-reverse"
        >
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
              <span class="icon-circle text-2xl transition-200 text-red" />
            </div>
          </div>
          <div
            class="inline-flex items-start md:items-center md:flex-row flex-col space-y-3 md:space-y-0 md:space-x-4 text-blue-200"
          >
            <NuxtLink
              v-for="(link, index) of headerBottomMenuData"
              :key="index"
              :to="localePath(link?.url)"
              class="text-sm font-normal leading-130 transition-200 hover:text-blue-700 dark:text-blue-100 dark:hover:text-white"
            >
              {{ $t(link?.title) }}
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
