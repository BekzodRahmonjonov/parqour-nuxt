<template>
  <div class="container pb-16">
    <div v-if="preloader" class="grid gap-5">
      <BlockColumnShimmer v-for="item in 6" :key="item" />
    </div>
    <CommonPageWrapper
      :title="$t('column')"
      :text="$t('column_text')"
      class="mt-8"
    >
      <div class="grid grid-cols-3 gap-8">
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
</template>
<script setup lang="ts">
import { columns } from '~/data'

const preloader = ref(true)
</script>
