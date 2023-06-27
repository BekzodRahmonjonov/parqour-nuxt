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
const coverData = {
  id: 1,
  title: 'Министру цифровых технологий Узбекистана определили заместителей',
  date: new Date(),
  views: 9664,
  image: 'https://picsum.photos/1024/968',
}
</script>
