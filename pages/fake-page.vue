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
          :value="item.value"
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
    value: 'all',
  },
  {
    id: 2,
    name: 'Новости',
    value: 'news',
  },
  {
    id: 3,
    name: 'Статьи',
    value: 'articles',
  },
  {
    id: 4,
    name: 'Фоторепортажи',
    value: 'photo-reports',
  },
  {
    id: 5,
    name: 'Спецрепортажи',
    value: 'special-reports',
  },
  {
    id: 6,
    name: 'Колонки',
    value: 'columns',
  },
  {
    id: 7,
    name: 'Разборы',
    value: 'analysis',
  },
]
</script>
