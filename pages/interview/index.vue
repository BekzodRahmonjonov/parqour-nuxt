<template>
  <div class="container">
    <CommonPageWrapper
      :title="$t('interview')"
      :text="$t('interview_sub')"
      class="mt-8"
    >
      <SectionsInterviewMainCard v-bind="{ coverData }" />
      <template #aside>
        <img src="https://picsum.photos/274/584" class="w-full" alt="" />
      </template>
    </CommonPageWrapper>
  </div>
</template>
<script setup lang="ts">
import { coverData } from '~/data/fakeData'
</script>
