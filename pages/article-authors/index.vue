<template>
  <div class="pb-16">
    <div class="container">
      <CommonPageWrapper
        :title="$t('articles_author')"
        :text="$t('article_author_text')"
        class="mt-8"
      >
        <div class="max-w-[274px] my-6">
          <FormSelect
            :options="options"
            search
            :placeholder="$t('all_authors')"
            @handle-search="(e: string) => search = e"
          />
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
          <CardsDefaultAuthor
            v-for="(card, index) in authorsData"
            :key="index"
            v-bind="{ card }"
            is-default
          />
        </div>
        <CommonLoadButton :text="$t('load_more')" />
        <template #aside>
          <CommonOtherAuthors
            :others="authorsSideData.slice(0, 5)"
            class="mb-6"
          />
          <TempAdvetisimentBanner />
        </template>
      </CommonPageWrapper>
    </div>
  </div>
</template>
<script setup lang="ts">
import { authorsData, authorSelect, authorsSideData } from '~/data/fakeData'

const search = ref('')

const options = computed(() => {
  const list = ref()
  if (search.value) {
    list.value = authorSelect.filter((el: any) =>
      el.name.toLowerCase().includes(search.value)
    )
  } else {
    list.value = authorSelect
  }
  return list.value
})
</script>
