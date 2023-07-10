<template>
  <div class="pb-16">
    <CommonBreadcrumb :menu="[{ title: 'Разборы', link: '/' }]" />
    <div class="container">
      <CommonPageWrapper
        :title="$t('analyzes')"
        :text="$t('analyzes_text')"
        class="mt-8"
      >
        <div v-if="preloader" class="grid grid-cols-3 gap-8">
          <BlockAnalysisShimmer v-for="item in 6" :key="item" />
        </div>
        <div v-else class="grid grid-cols-12 sm:gap-x-8 gap-y-6 gap-8 mt-6">
          <nuxt-link
            v-for="(item, index) in discussions"
            :key="index"
            :to="'analysis/' + item?.slug"
            class="lg:col-span-4"
          >
            <CardsAnalise v-bind="{ item }" />
          </nuxt-link>
        </div>
        <CommonButton
          v-if="
            !discussionsStore.loading &&
            discussions?.length < discussionsStore.count
          "
          :loading="isLoading"
          class="w-full text-blue-600 dark:text-blue-100 hover:!text-white !bg-[#52618f1a] font-medium leading-125 mt-8"
          @click="loadMore"
        >
          <span class="icon-double rotate-90 mr-[10px] text-xl"></span>
          {{ $t('load_more') }}</CommonButton
        >
        <template #aside>
          <TempAdvetisimentBanner class="mt-11" />
        </template>
      </CommonPageWrapper>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardsAnalise from '~/components/Cards/Аnalise.vue'
import { analysisData } from '~/data/fakeData'
import { useDiscussionsStore } from '~/store/discussions'

const discussionsStore = useDiscussionsStore()

const discussions = computed(() => discussionsStore.discussions)

const copyOfAnalysisData = ref([...analysisData])
const isLoading = ref(false)
const preloader = ref(true)

setTimeout(() => {
  preloader.value = false
}, 1000)
const counter = 4

const loadMore = () => {
  isLoading.value = true
  discussionsStore.params.offset += 5
  discussionsStore.fetchDiscussions(discussionsStore.params, true)
  //   .finally(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 300)
  // })
}
discussionsStore.fetchDiscussions(discussionsStore.params, false)
</script>
