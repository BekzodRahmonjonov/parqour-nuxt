<template>
  <div>
    <CommonBreadcrumb :menu="[{ title: 'Авторы', link: '/Авторы' }]" />
    <div class="container pb-16">
      <CommonPageWrapper
        :title="$t('authors')"
        :text="$t('authors_text')"
        class="mt-8"
      >
        <div class="grid gap-5">
          <div v-if="preloader" class="grid gap-5">
            <BlockAuthorsCardShimmer v-for="item in 6" :key="item" />
          </div>
          <nuxt-link
            v-for="(item, i) in copyOfAuthorsData"
            v-else
            :key="i"
            to="authors/1"
          >
            <CardsAuthorsCard :author="item" />
          </nuxt-link>
        </div>
        <CommonButton
          v-if="!preloader"
          :loading="isLoading"
          class="w-full text-blue-600 !bg-[#52618f1a] font-medium leading-125 mt-8"
          @click="loadMore"
        >
          <span class="icon-double rotate-90 mr-[10px] text-xl"></span>
          {{ $t('load_more') }}</CommonButton
        >
        <template #aside>
          <TempAdvetisimentBanner />
        </template>
      </CommonPageWrapper>
    </div>
  </div>
</template>
<script setup lang="ts">
import { authorsData } from '~/data/fakeData'

const isLoading = ref(false)
const preloader = ref(true)
const copyOfAuthorsData = ref([...authorsData])

setTimeout(() => {
  preloader.value = false
})

const loadMore = () => {
  isLoading.value = true
  const additionData = {
    name: 'Жасурбек Жабборов',
    img: '/images/face.png',
    about:
      'Ведущий специалист  Правления Общества слепых Узбекистана  Правления Общества слепых Узбекистана',
  }
  setTimeout(() => {
    isLoading.value = false
    copyOfAuthorsData.value.push(additionData)
  }, 1000)
}
</script>
