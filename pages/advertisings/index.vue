<template>
  <CommonBreadcrumb :menu="menu" class="mb-8" />
  <div class="max-w-[784px] px-4 mx-auto mb-10 md:mb-16">
    <h2 class="page-title mt-12 md:mt-[84px]">{{ $t('advertisings') }}</h2>
    <CardsAds
      v-for="(item, index) in ads"
      :key="index"
      :data="item"
      :count="ads?.length"
      class="min-h-[180px]"
    />
  </div>
</template>
<script setup lang="ts">
import { ads } from '~/data'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const menu = [{ title: t('advertisings'), link: '/advertisings' }]
</script>
