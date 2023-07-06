<template>
  <div class="container mt-8 pb-16">
    <CommonSinglePageWrapper :single="singleData">
      <template #aside>
        <img src="https://picsum.photos/200/400" class="w-full" alt="" />
      </template>
      <div class="max-w-[988px] mx-auto">
        <div class="flex items-center justify-between mb-6">
          <div class="flex-y-center gap-3">
            <NewsTags v-bind="{ tags: interviewTags }" />
          </div>
          <CommonLikeDislike />
        </div>
        <CardsSingleAuthor :data="newsData" />
        <hr class="mt-6 mb-6 border-gray-300 inline-block w-full" />
        <CommonShareLink @click="contactModal = true" />
      </div>
      <ModalContactModal :show="contactModal" @close="contactModal = false" />
    </CommonSinglePageWrapper>
  </div>
</template>
<script setup lang="ts">
import { interviewTags } from '~/data'
import { newsData, singleData } from '~/data/fakeData'
import { ISingleData } from '~/types'

const contactModal = ref(false)
</script>
