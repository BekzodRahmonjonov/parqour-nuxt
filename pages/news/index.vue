<template>
  <div class="pb-16">
    <CommonPageWrapper :title="$t('all_news')" class="mt-8 container">
      <div class="mt-3 flex-y-center justify-between">
        <div class="flex-y-center gap-3">
          <CommonCategoryButton
            v-for="(item, idx) in newsCategories"
            :key="idx"
            :text="item.name"
            :value="item.value"
          />
        </div>
        <div class="min-w-[144px]">
          <FormSelectDefault
            :placeholder="$t('all_authors')"
            :options="tempOptions"
          />
        </div>
      </div>
      <template #aside>
        <TempAdvetisimentBanner />
      </template>
    </CommonPageWrapper>
  </div>
</template>
<script setup lang="ts">
import { newsCategories } from '~/data/fakeData'

const { t } = useI18n()

const tempOptions = ref([
  {
    id: 1,
    name: 'За неделью',
    value: 'week',
  },
  {
    id: 1,
    name: 'За все время',
    value: 'all-time',
  },
])
</script>
