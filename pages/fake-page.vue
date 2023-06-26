<template>
  <div class="py-16">
    <ModalContactModal :show="contactModal" @close="contactModal = false" />
    <div class="container">
      <CommonShareLink class="mb-4" @click="contactModal = true" />
      <div class="flex items-center gap-3">
        <CommonCategoryButton
          v-for="(item, idx) in categories"
          :key="idx"
          :text="item.name"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const contactModal = ref(false)

const categories = [
  {
    id: 1,
    name: 'Все',
    slug: 'all',
  },
  {
    id: 2,
    name: 'Новости',
    slug: 'news',
  },
  {
    id: 3,
    name: 'Статьи',
    slug: 'articles',
  },
  {
    id: 4,
    name: 'Фоторепортажи',
    slug: 'photo-reports',
  },
  {
    id: 5,
    name: 'Спецрепортажи',
    slug: 'special-reports',
  },
  {
    id: 6,
    name: 'Колонки',
    slug: 'columns',
  },
  {
    id: 7,
    name: 'Разборы',
    slug: 'analysis',
  },
]
</script>
