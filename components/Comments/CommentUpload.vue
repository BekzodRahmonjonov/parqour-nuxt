<template>
  <div>
    <div class="flex justify-between items-center">
      <h4 class="text-xl leading-130 font-bold text-blue-700">Comments</h4>
      <div>
        <i
          class="icon-filter text-lg text-blue-600 cursor-pointer"
          @click="toggleText"
        ></i>
        <div v-if="showText" class="absolute right-40">hello mother father</div>
      </div>
    </div>
    <div class="relative mt-4">
      <textarea
        placeholder="Комментарии..."
        class="relative px-3 py-2.5 rounded w-full bg-blue-200/10 duration-300"
      >
      </textarea>
      <i
        class="icon-gallery absolute top-3.5 right-2.5 text-blue-200 !cursor-pointer"
      ></i>
      <input
        class="absolute top-3.5 right-2.5 opacity-0 w-4 h-4 !cursor-pointer"
        type="file"
        @change="onFileChanged"
      />
    </div>
  </div>
</template>

<!--
image upload qilganda chqiadigan textni designi chizilmagan ekan faqat shu case qoldi
va filter chiuzilmagan qanaqa content chiqishi ? 
-->

<script setup lang="ts">
import { ref } from 'vue'

const showText = ref(false)

const toggleText = () => {
  showText.value = !showText.value
}

const image = ref<File | null>(null)

function onFileChanged(event: Event) {
  const fileInput = event.target as HTMLInputElement
  const files = fileInput.files
  if (files && files.length > 0) {
    image.value = files[0]
  } else {
    image.value = null
  }
}
</script>
