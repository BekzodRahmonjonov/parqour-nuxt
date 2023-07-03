<template>
  <div class="w-full flex items-center justify-end z-40">
    <SelectSearchWrapper
      :search="search"
      :search-trigger="searchTrigger"
      :search-content="authorsData"
      @handle-update-search="handleUpdateSearch"
      @clear="clear"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { authorsData } from '~/data/fakeData'

const search = ref('')
const searchTrigger = ref(false)

const handleShowSearch = () => {
  search.value = ''
  searchTrigger.value = !searchTrigger.value
}
const clear = () => {
  search.value = ''
}
const handleUpdateSearch = (value: string) => {
  search.value = value
}
</script>
