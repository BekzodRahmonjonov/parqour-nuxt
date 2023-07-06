<template>
  <div class="py-16 pb-40">
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
      <div class="max-w-[274px] my-6">
        <FormSelect
          :options="options"
          search
          :placeholder="$t('all_authors')"
          @handle-search="(e: string) => search = e"
        />
      </div>
      <div class="max-w-[886px]">
        <PhotoReportSlider :images="images" />
      </div>
      <div class="mt-20">
        <CommonLikeDislike />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PhotoReportSlider from '~/components/Slider/PhotoReportSlider.vue'

const contactModal = ref(false)
const search = ref('')
const categories = ref([
  {
    id: 1,
    name: 'все',
    value: 'all',
  },
  {
    id: 2,
    name: 'новости',
    value: 'news',
  },
  {
    id: 3,
    name: 'статьи',
    value: 'articles',
  },
  {
    id: 4,
    name: 'фоторепортажи',
    value: 'photo-reports',
  },
  {
    id: 5,
    name: 'спецрепортажи',
    value: 'special-reports',
  },
  {
    id: 6,
    name: 'колонки',
    value: 'columns',
  },
  {
    id: 7,
    name: 'разборы',
    value: 'analysis',
  },
])
const options = computed(() => {
  const list = ref()
  if (search.value) {
    list.value = categories.value.filter((el: any) =>
      el.name.includes(search.value)
    )
  } else {
    list.value = categories.value
  }
  return list.value
})
const images = [
  {
    id: 1,
    title: 'Brand 1',
    default:
      'https://toshkent-parfum.uicgroup.tech/media/manufacturers/saint.svg',
  },
  {
    id: 2,
    title: 'Brand 2',
    default:
      'http://toshkent-parfum.uicgroup.tech/media/manufacturers/channel.svg',
  },
]

const handleSearch = (e: string) => {
  categories.value.filter((el: any) => el.value.includes(e))
}
</script>
