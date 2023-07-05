<template>
  <CommonBreadcrumb :menu="menu" class="mb-8" />
  <div class="container">
    <h1 class="page-title mt-4 md:mt-12 mb-5">{{ t('contacts') }}</h1>
    <div class="grid grid-cols-3 gap-x-8 gap-y-5">
      <div
        class="group bg-blue-700 dark:bg-white dark:hover:bg-white-500 max-h-[239px] rounded-xl p-5 transition-all hover:bg-blue-600 cursor-pointer"
      >
        <span class="inline-block p-4 bg-blue-600 rounded-lg mb-7">
          <i class="icon-phone text-[40px] text-white"></i>
        </span>
        <p class="text-2xl font-bold text-white dark:text-blue-700 mb-4">
          title
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const menu = [{ title: t('contacts'), link: '/contact' }]
</script>
