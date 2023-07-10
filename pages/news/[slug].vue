<template>
  <div>
    <CommonBreadcrumb :menu="menu" />
    <CommonSinglePageWrapper v-if="newsData?.default" :single="newsData">
      <template #aside>
        <img src="https://picsum.photos/200/400" class="w-full" alt="" />
      </template>
    </CommonSinglePageWrapper>
    <NewsStandardSingleWrapper v-if="newsData?.standard" :single="newsData">
      <template #aside>
        <TempAdvetisimentBanner />
      </template>
    </NewsStandardSingleWrapper>
    <NewsFullWidthSingleWrapper
      v-if="newsData?.full_width"
      :single="newsData"
    />
    <CommentsCommentMain/>
  </div>
</template>
<script setup lang="ts">
import {useNewsStore} from '~/store/news'
import { useI18n } from 'vue-i18n'

import { newsData } from '~/data/fakeData'
const router = useRouter()
const {params: {slug} } = useRoute()
const {fetchNewsBySlug} = useNewsStore();
const { t } = useI18n()
const menu = [
  { title: t('all_news'), link: '/news' },
  { title: newsData.title, link: '/news' },
];
console.log(slug)
Promise.allSettled([fetchNewsBySlug({ slug })])
</script>
