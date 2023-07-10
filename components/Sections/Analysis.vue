<template>
  <div class="container">
    <CommonSectionWrapper is-centered :title="$t('parsing')" />
    <div class="grid grid-cols-12 sm:gap-x-8 gap-y-6 gap-8 mt-6">
      <CardsAnalise
        v-for="(item, index) in discussionData"
        :key="index"
        v-bind="{ item }"
        :title="item.title"
        :text="item.subtitle"
        :bg="item.author.avatar"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardsAnalise from '~/components/Cards/Аnalise.vue'
import { IDiscussionData } from '~/types'

interface Props {
  discussionData?: IDiscussionData[]
}

defineProps<Props>()
</script>
