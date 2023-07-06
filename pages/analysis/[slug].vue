<template>
  <CommonBreadcrumb :menu="menu" />
  <div class="container mt-8">
    <CommonSinglePageWrapper :single="singleData">
      <template #aside>
        <img src="https://picsum.photos/200/400" class="w-full" alt="" />
      </template>
    </CommonSinglePageWrapper>
  </div>
</template>
<script setup lang="ts">
import { singleData } from '~/data/fakeData'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const menu = [
  { title: t('analyzes'), link: '/analysis' },
  { title: singleData.title, link: '/analysis' },
]
</script>
