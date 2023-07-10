<template>
  <div>
    <CommonBreadcrumb :menu="breadcrumb" />
    <div class="mt-8 pb-16">
      <CommonSinglePageWrapper :single="singleData">
        <template #aside>
          <img src="https://picsum.photos/200/400" class="w-full" alt="" />
        </template>
      </CommonSinglePageWrapper>
      <div class="container">
        <CommonSectionWrapper
          :title="$t('see_also')"
          :all-title="$t('all_interviews')"
          :all-link="'/interview'"
          class="mb-6"
        />
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8"
        >
          <CardsInterview
            v-for="(item, index) in interviews"
            :key="index"
            :data="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { interviews } from '~/data'
import { singleData } from '~/data/fakeData'

const { t } = useI18n()

const breadcrumb = [
  {
    title: t('interview'),
    link: '/interview',
  },
  {
    title: singleData.title,
    link: '/interview',
  },
]
</script>
