<template>
  <div>
    <CommonBreadcrumb :menu="menu" />
    <div class="grid grid-cols-12 gap-8 mt-8 container">
      <div class="col-span-9">
        <CardsAuthorSideCard :author="authorSideData" />
      </div>
      <aside class="col-span-3">
        <div class="mt-14 w-full h-full">
          <img src="https://picsum.photos/200/400" class="w-full" alt="" />
        </div>
      </aside>
    </div>
  </div>
</template>
<script setup lang="ts">
import { authorSideData } from '~/data/fakeData'

const menu = [
  { title: 'Авторы', link: '/authors/1' },
  { title: 'Шахзод Юлдошбоев', link: '/' },
]
</script>
