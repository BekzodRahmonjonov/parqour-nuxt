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
import { singleData } from '~/data/fakeData'
import { singlePhoto } from '~/data/fakeData'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const breadcrumbLinks = computed(() => [
  { title: 'Разборы', link: '/photo-reports' },
  { title: singlePhoto.title, link: '/photo-reports' },
])
</script>
