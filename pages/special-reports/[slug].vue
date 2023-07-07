<template>
  <div>
    <CommonBreadcrumb :menu="menu" class="mb-8" />
    <CommonSinglePageWrapper :single="singleData">
      <template #aside>
        <TempAdvetisimentBanner />
      </template>
    </CommonSinglePageWrapper>
  </div>
</template>
<script setup lang="ts">
import { singleData } from '~/data/fakeData'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const menu = [
  { title: t('special_reports'), link: '/special-reports' },
  { title: singleData.title, link: '/special-reports' },
]
</script>
