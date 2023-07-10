<template>
  <div>
    <div class="container">
      <CommonSectionWrapper :title="$t('news')" all-link="/news" />

      <div
        class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 mt-4 md:mt-6"
      >
        <CardsNews
          v-for="(card, index) in newsData"
          v-bind="{ card }"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { INewsList } from '~/types'

interface Props {
  newsData?: INewsList[]
}

defineProps<Props>()
</script>
