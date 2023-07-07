<template>
  <div class="pb-16">
    <CommonBreadcrumb :menu="breadcrumbLinks" />
    <CommonPageWrapper
      :title="$t('podcasts')"
      :text="$t('podcast_text')"
      class="mt-8 container flex flex-col"
    >
      <div class="grid grid-cols-12 gap-8">
        <client-only>
          <CardsPodcast
            to="/podcasts/1"
            v-for="(item, index) in copyOfpodcasts"
            :key="index"
            :data="item"
            class="col-span-12 md:col-span-6 lg:col-span-4"
            :class="{ '!col-span-12 !md:max-h-[472px]': index == 0 }"
            :isSingleBanner="index == 0"
          />
        </client-only>
      </div>
      <CommonButton
        v-if="!preloader"
        @click="loadMore"
        :loading="isLoading"
        class="w-full text-blue-600 !bg-[#52618f1a] font-medium leading-125 mt-8 dark:text-white"
      >
        <span class="icon-double rotate-90 mr-[10px] text-xl"></span>
        {{ $t('load_more') }}</CommonButton
      >
      <template #aside>
        <img src="https://picsum.photos/200/400" class="w-full mt-11" alt="" />
      </template>
    </CommonPageWrapper>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { podcastTags, podcasts } from '~/data'

const { t } = useI18n()
const preloader = ref(false)
const isLoading = ref(false)
const copyOfpodcasts = ref([...podcasts])

const loadMore = () => {
  isLoading.value = true
  const additionData = {
    image: '/images/podcasts/image5.png',
    type: 'audio',
    title: 'Почему в Узбекистане не работает система образования?',
    created_at: '2021-01-01',
    typeTitle: 'Подкасты',
  }

  setTimeout(() => {
    isLoading.value = false
    copyOfpodcasts.value.push(additionData)
  }, 1000)
}

setTimeout(() => {
  preloader.value = false
}, 1000)

const breadcrumbLinks = computed(() => [
  { title: t('podcasts'), link: '/popular' },
])
</script>
