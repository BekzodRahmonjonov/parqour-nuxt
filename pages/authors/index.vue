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
          <nuxt-link
            to="authors/1"
            v-for="(item, i) in copyOfAuthorsData"
            :key="i"
          >
            <CardsAuthorsCard :author="item" />
          </nuxt-link>
        </div>
        <CommonButton
          @click="loadMore"
          :loading="isLoading"
          class="w-full text-blue-600 !bg-[#52618f1a] font-medium leading-125 mt-8 dark:text-white"
        >
          <span class="icon-double rotate-90 mr-[10px] text-xl"></span>
          {{ $t('load_more') }}</CommonButton
        >
        <template #aside>
          <img src="https://picsum.photos/200/400" class="w-full" alt="" />
        </template>
      </CommonPageWrapper>
    </div>
  </div>
</template>
<script setup lang="ts">
import { authorsData } from '~/data/fakeData'
const isLoading = ref(false)
const copyOfAuthorsData = ref([...authorsData])

const loadMore = () => {
  isLoading.value = true
  const additionData = {
    name: 'Жасурбек Жабборов',
    img: '/images/face.png',
    about:
      'Ведущий специалист организационно-социального отдела Центрального Правления Общества слепых Узбекистана',
  }
  setTimeout(() => {
    isLoading.value = false
    copyOfAuthorsData.value.push(additionData)
  }, 1000)
}
</script>
