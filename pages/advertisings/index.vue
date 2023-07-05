<template>
  <CommonBreadcrumb :menu="menu" class="mb-8" />
  <div class="container">
    <CommonPageWrapper :title="$t('advertisings')" class="mb-10 md:mb-16">
      <CardsAds
        v-for="(item, index) in ads"
        :key="index"
        :data="item"
        :count="ads?.length"
        class="min-h-[180px]"
      />
    </CommonPageWrapper>
  </div>
</template>
<script setup lang="ts">
import { ads } from '~/data'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const menu = [{ title: t('advertisings'), link: '/advertisings' }]
</script>
