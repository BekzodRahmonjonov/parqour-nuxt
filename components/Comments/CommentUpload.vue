<template>
  <div>
    <div class="flex justify-between items-center">
      <h4 class="text-xl leading-130 font-bold text-blue-700">Comments</h4>
      <div>
        <i class="icon-filter text-lg text-blue-600" @click="toggleText"></i>
        <div v-if="showText" class="absolute right-40">hello mother father</div>
      </div>
    </div>
    <div class="relative mt-4">
      <input
        type="text"
        class="relative px-3 py-2.5 rounded w-full bg-blue-200/10 duration-300"
        placeholder="Комментарии..."
      />
      <i class="icon-gallery absolute top-3.5 right-2.5 text-blue-200"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showText = ref(false)

const toggleText = () => {
  showText.value = !showText.value
}
</script>
