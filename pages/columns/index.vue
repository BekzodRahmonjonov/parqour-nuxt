<template>
  <div class="container">
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
</script>
