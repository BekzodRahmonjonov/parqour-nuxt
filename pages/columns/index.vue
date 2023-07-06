<template>
  <div>
    <CommonBreadcrumb :menu="menu" />
    <div class="container pb-16">
      <CommonPageWrapper
        :title="$t('column')"
        :text="$t('column_text')"
        class="mt-8"
      >
        <div v-if="preloader" class="grid grid-cols-3 gap-8">
          <BlockColumnShimmer v-for="item in 6" :key="item" />
        </div>
        <div v-if="!preloader" class="grid grid-cols-3 gap-8">
          <CardsColumn
            v-for="(item, index) in columns"
            :key="index"
            :data="item"
            class="min-h-[250px]"
          />
        </div>
        <template #aside>
          <img src="https://picsum.photos/200/400" class="w-full" alt="" />
        </template>
      </CommonPageWrapper>
    </div>
  </div>
</template>
<script setup lang="ts">
import { columns } from '~/data'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const menu = [{ title: t('column'), link: '/column' }]
const preloader = ref(true)

setTimeout(() => {
  preloader.value = false
}, 1000)
</script>
