<template>
  <div>
    <CommonBreadcrumb :menu="breadcrumbRoutes" class="mb-8" />
    <CommonSinglePageWrapper :single="singleData">
      <template #aside>
        <TempAdvetisimentBanner />
      </template>
    </CommonSinglePageWrapper>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { singleData } from '~/data/fakeData'

const { t } = useI18n()

const breadcrumbRoutes = [
  { title: t('special_reports'), link: '/special-reports' },
  { title: singleData.title, link: '/special-reports' },
]
</script>
