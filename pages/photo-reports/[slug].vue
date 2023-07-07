<template>
  <div>
    <CommonBreadcrumb :menu="breadcrumbLinks" />
    <div class="container mt-8">
      <PhotoReportsSingleWrapper :single="photoData">
        <template #aside>
          <TempAdvetisimentBanner />
        </template>
        <div class="mt-20 flex">
          <NewsTags v-bind="{ tags: interviewTags }" />
          <CommonLikeDislike />
        </div>
      </PhotoReportsSingleWrapper>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { interviewTags } from '~/data'
import { photoData } from '~/data/fakeData'

const { t } = useI18n()
const breadcrumbLinks = computed(() => [
  { title: 'Разборы', link: '/photo-reports' },
  { title: photoData.title, link: '/photo-reports' },
])

const images = [
  {
    id: 1,
    title: 'Brand 1',
    default:
      'https://toshkent-parfum.uicgroup.tech/media/manufacturers/saint.svg',
  },
]
</script>
