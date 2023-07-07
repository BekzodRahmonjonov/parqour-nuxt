<template>
  <div class="w-full">
    <CommonTab v-model="active" class="!w-full" :list="tabs" />

    <Transition name="fade" mode="out-in">
      <div :key="active" class="mt-4">
        <CommonNewsBlock
          v-if="active === 'popular'"
          :list="popularList"
          link="popular-news"
          :button-text="$t('all_popular')"
        />
        <CommonNewsBlock
          v-if="active === 'discussed'"
          :list="discussionList"
          link="news"
          :button-text="$t('all_discussed')"
        />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
// import { popularNews } from '~/data'
import { IDiscussionList, IPopularList } from '~/types/news'

const active = ref('popular')
const { t } = useI18n()

const tabs = [
  {
    label: t('popular'),
    value: 'popular',
  },
  {
    label: t('discussed'),
    value: 'discussed',
  },
]

interface Props {
  popularList: IPopularList
  discussionList: IDiscussionList
}
defineProps<Props>()
</script>
