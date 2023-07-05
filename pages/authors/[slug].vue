<template>
  <div class="pb-14">
    <CommonBreadcrumb :menu="menu" />
    <div class="grid grid-cols-12 gap-8 mt-8 container">
      <div class="col-span-9">
        <CardsAuthorSideCard :author="authorSideData" />
        <div class="flex flex-col md:grid grid-cols-12 gap-6 mt-6">
          <CardsAuthor
            v-for="(card, index) in copyOfAuthorsData"
            :key="index"
            v-bind="{ card }"
            class="col-span-6 rounded-lg"
            :is-half="index === 0 || index === 1"
          />
        </div>
        <CommonButton
          @click="loadMore"
          :loading="isLoading"
          class="w-full text-blue-600 !bg-[#52618f1a] font-medium leading-125 mt-8"
        >
          <span class="icon-double rotate-90 mr-[10px] text-xl"></span>
          {{ $t('load_more') }}</CommonButton
        >
      </div>
      <aside class="col-span-3">
        <div class="w-full h-full">
          <CommonOtherAuthors :others="other_authors" class="mb-6" />
          <img src="https://picsum.photos/200/400" class="w-full" alt="" />
        </div>
      </aside>
    </div>
  </div>
</template>
<script setup lang="ts">
import { authorSideData } from '~/data/fakeData'
import { authorsData, other_authors } from '~/data'

const copyOfAuthorsData = ref([...authorsData])
const isLoading = ref(false)

const loadMore = () => {
  isLoading.value = true
  const additionData = {
    id: 1,
    actual: true,
    title:
      '«Сейчас население переплачивает за некачественное мясо» — российский экспер...',
    author: 'Дарья Пензова',
    image: '/images/news/older.png',
  }

  setTimeout(() => {
    isLoading.value = false
    copyOfAuthorsData.value.push(additionData)
  }, 1000)
}

const menu = [
  { title: 'Авторы', link: '/authors' },
  { title: 'Шахзод Юлдошбоев', link: '/authors/1' },
]
</script>
