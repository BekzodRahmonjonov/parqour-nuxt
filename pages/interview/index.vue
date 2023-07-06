<template>
  <div class="pb-[70px]">
    <CommonBreadcrumb :menu="breadcrumb" />
    <div class="container">
      <CommonPageWrapper
        :title="$t('interview')"
        :text="$t('interview_sub')"
        class="mt-8"
      >
        <SectionsInterviewMainCard v-bind="{ coverData }" class="mb-8" />

        <div class="grid grid-cols-1 gap-4 md:gap-6 mb-8">
          <CardsInterview
            v-for="(item, index) in interviews"
            :key="index"
            :data="item"
            :row-format="true"
            class="lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12"
          />
        </div>
        <CommonLoadButton :text="$t('load_more')" />
        <template #aside>
          <img src="https://picsum.photos/274/584" class="w-full" alt="" />
        </template>
      </CommonPageWrapper>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { interviews } from '~/data'
import { coverData } from '~/data/fakeData'

const { t } = useI18n()

const breadcrumb = [
  {
    title: t('interview'),
    link: '/interview',
  },
]
</script>
