<template>
  <div class="bg-gray-800 dark:bg-blue-700">
    <div class="container">
      <CommonSectionWrapper :title="$t('articles_author')" />

      <div class="flex flex-col md:grid grid-cols-12 gap-6 mt-6">
        <CardsAuthor
          v-for="(card, index) in authorsData"
          :key="index"
          v-bind="{ card }"
          class="col-span-4"
          :is-half="index === 0 || index === 1"
          :class="{ 'col-span-6': index === 0 || index === 1 }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { authorsData } from '~/data'
</script>

<style scoped></style>
