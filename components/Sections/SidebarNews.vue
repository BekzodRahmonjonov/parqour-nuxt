<template>
  <div class="w-full">
    <CommonTab v-model="active" class="!w-full" :list="tabs" />

    <Transition name="fade" mode="out-in">
      <div :key="active" class="mt-4">
        <CommonNewsBlock
          v-if="active === 'popular'"
          :list="popularNews"
          link="popular-news"
          :button-text="$t('all_popular')"
        />
        <CommonNewsBlock
          v-if="active === 'discussed'"
          :list="popularNews"
          link="news"
          :button-text="$t('all_discussed')"
        />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { popularNews } from '~/data'

const active = ref('popular')
const { t } = useI18n()

const tabs = [
  {
    label: t('popular'),
    value: 'popular',
  },
  {
    label: t('discussed'),
    value: 'discussed',
  },
]
</script>

<style scoped></style>
