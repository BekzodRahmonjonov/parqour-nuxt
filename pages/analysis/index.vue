<template>
  <div class="pb-16">
    <CommonBreadcrumb :menu="[{ title: 'Разборы', link: '/' }]" />
    <div class="container">
      <CommonPageWrapper
        :title="$t('analyzes')"
        :text="$t('analyzes_text')"
        class="mt-8"
      >
        <div class="grid grid-cols-12 sm:gap-x-8 gap-y-6 gap-8 mt-6">
          <nuxt-link
            :to="'analysis/' + item.id"
            v-for="(item, index) in copyOfAnalysisData"
            :key="index"
            class="lg:col-span-4"
          >
            <CardsAnalise
              v-bind="{ item }"
              :title="item.title"
              :text="item.text"
              :bg="item.bg"
              :id="item.id"
            />
          </nuxt-link>
        </div>
        <CommonButton
          @click="loadMore"
          :loading="isLoading"
          class="w-full text-blue-600 !bg-[#52618f1a] font-medium leading-125 mt-8"
        >
          <span class="icon-double rotate-90 mr-[10px] text-xl"></span>
          {{ $t('load_more') }}</CommonButton
        >
        <template #aside>
          <img src="https://picsum.photos/200/400" class="w-full" alt="" />
        </template>
      </CommonPageWrapper>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardsAnalise from '~/components/Cards/Аnalise.vue'
import { analysisData } from '~/data/fakeData'

const copyOfAnalysisData = ref([...analysisData])
const isLoading = ref(false)
let counter = 4

const loadMore = () => {
  isLoading.value = true
  const additionData = {
    id: ++counter,
    title: 'business',
    text: 'analysiscardtext4',
    bg: '/images/analysis/card4.png',
  }
  setTimeout(() => {
    isLoading.value = false
    copyOfAnalysisData.value.push(additionData)
  }, 1000)
}
</script>
