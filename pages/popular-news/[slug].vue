<template>
  <div>
    <CommonBreadcrumb :menu="breadcrumbRoutes" />
    <div class="container mt-8">
      <CommonSinglePageWrapper :single="singleData">
        <template #aside>
          <img src="https://picsum.photos/200/400" class="w-full" alt="" />
        </template>
      </CommonSinglePageWrapper>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { singleData } from '~/data/fakeData'

const { t } = useI18n()

const breadcrumbRoutes = [
  { title: t('popular_head'), link: '/popular-news' },
  { title: singleData.title, link: '/popular-news' },
]
</script>
