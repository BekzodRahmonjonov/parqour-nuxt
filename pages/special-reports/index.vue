<template>
  <CommonBreadcrumb :menu="menu" class="mb-8" />
  <div class="container mb-12 md:mb-16">
    <CommonPageWrapper :title="$t('special_reports')" :text="$t('column_text')">
      <div class="grid grid-cols-1 gap-8">
        <CardsSpecialReportsSingle
          v-for="(item, index) in specialReports.slice(0, counter)"
          :key="index"
          :data="item"
          class="min-h-[180px]"
        />
        <CommonButton
          v-if="counter !== specialReports?.length"
          :loading="isLoading"
          class="w-full text-blue-600 dark:hover:text-white !bg-[#52618f1a] font-medium leading-125 mt-6 mb-16"
          @click="loadMore"
        >
          <span class="icon-double rotate-90 mr-[10px] text-xl"></span>
          {{ $t('load_more') }}</CommonButton
        >
      </div>
      <template #aside>
        <tempAdvetisimentBanner />
      </template>
    </CommonPageWrapper>
  </div>
</template>
<script setup lang="ts">
import { specialReports } from '~/data'
import { useI18n } from 'vue-i18n'

const isLoading = ref(false)
const { t } = useI18n()
const menu = [{ title: t('special_reports'), link: '/special-reports' }]
const counter = ref(3)
const loadMore = () => {
  isLoading.value = true
  setTimeout(() => {
    counter.value += 1
    isLoading.value = false
  }, 1000)
}
</script>
