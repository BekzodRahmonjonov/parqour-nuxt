<template>
  <div>
    <CommonBreadcrumb :menu="breadcrumbLinks" />
    <div class="mt-8">
      <SectionsAudioPlayer />
      <CommonSinglePageWrapper class="container" :single="singleData">
        <template #aside>
          <img src="https://picsum.photos/200/400" class="w-full" alt="" />
        </template>
      </CommonSinglePageWrapper>
    </div>
  </div>
</template>
<script setup lang="ts">
import { singleData } from '~/data/fakeData'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const breadcrumbLinks = computed(() => [
  { title: t('podcasts'), link: '/podcasts' },
  {
    title: singleData.title,
    link: '/podcasts',
  },
])
</script>
