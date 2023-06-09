<template>
  <div class="w-full flex items-center">
    <SearchWrapper
      :search="search"
      :search-trigger="searchTrigger"
      :search-content="!searchContent"
      @handleUpdateSearch="handleUpdateSearch"
      @clear="clear"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { searchContent } from '~/data/index'

const search = ref('')
const searchTrigger = ref(true)

const handleShowSearch = () => {
  search.value = ''
  searchTrigger.value = !searchTrigger.value
}
const clear = () => {
  search.value = ''
}
const handleUpdateSearch = async (value: string) => {
  search.value = value
}
</script>

<style scoped>
.fade-enter-active {
  animation: Fade 0.2s ease;
}
.fade-leave-active {
  animation: Fade 0.2s ease reverse;
}

@keyframes Fade {
  from {
    transform: translateY(-5px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.slideDown-enter-active {
  animation: slideDown 0.2s linear;
}
.slideDown-leave-active {
  animation: slideDown 0.2s linear reverse;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* slightly transparent fallback */
.backdrop-blur {
  background-color: rgba(7, 9, 28, 0.12);
}

/* if backdrop support: very transparent and blurred */
@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .backdrop-blur {
    background-color: rgba(7, 9, 28, 0.12);
    -webkit-backdrop-filter: blur(30px);
    backdrop-filter: blur(30px);
  }
}
</style>
