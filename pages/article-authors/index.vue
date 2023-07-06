<template>
  <CommonBreadcrumb :menu="menu" />
  <div class="container">
    <CommonPageWrapper
      :title="$t('interview')"
      :text="$t('interview_sub')"
      class="mt-8"
    ></CommonPageWrapper>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const menu = [{ title: t('authors'), link: '/authors' }]
</script>
