<template>
  <CommonBreadcrumb :menu="menu" class="mb-8" />
  <div class="container">
    <CommonPageWrapper :title="$t('special_reports')" :text="$t('column_text')">
      <div class="grid grid-cols-1 gap-8">
        <CardsSpecialReportsSingle
          v-for="(item, index) in specialReports"
          :key="index"
          :data="item"
          class="min-h-[180px]"
        />

        <BlockLoaderSpecialReports />
      </div>
      <template #aside>
        <img
          src="https://picsum.photos/200/400"
          class="w-full"
          alt="absolute-y-center -left-5 rounded-lg"
        />
      </template>
    </CommonPageWrapper>
  </div>
</template>
<script setup lang="ts">
import { specialReports } from '~/data'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const menu = [{ title: t('special_reports'), link: '/special-reports' }]
</script>
