<template>
  <CommonBreadcrumb :menu="breadcrumbLinks" />
  <div class="container mt-8">
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
const breadcrumbLinks = computed(() => [
  { title: 'Разборы', link: '/photo-reports' },
  { title: singlePhoto.title, link: '/photo-reports' },
])
</script>
