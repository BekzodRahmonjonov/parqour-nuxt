<template>
  <div>
    <div class="flex justify-between items-center">
      <h4 class="text-xl leading-130 font-bold text-blue-700">Comments</h4>
      <div>
        <i
          class="icon-filter text-lg text-blue-600 cursor-pointer"
          @click="toggleText"
        ></i>
        <div v-if="showText" class="absolute">hello mother father</div>
      </div>
    </div>
    <div class="relative mt-4 border rounded p-4">
      <textarea
        placeholder="Комментарии..."
        class="relative px-3 py-2.5 rounded w-full duration-300 focus:outline-none"
      >
      </textarea>
      <!--      <div class="flex" v-for="(item, ind) in images" :key="ind">-->
      <!--        <img :src="img" alt="this at images">-->
      <!--      </div>-->
      <div class="flex">
        <span class="relative w-13 h-13">
          <span
            class="absolute rounded-full -top-2 -right-2 cursor-pointer bg-slate-700 w-5 h-5 text-center"
            ><i class="icon-close text-white"></i
          ></span>
          <img height="54" width="54" class="rounded" :src="img" alt="" />
        </span>
      </div>
      <div class="relative mt-2">
        <i class="absolute icon-gallery text-blue-200 !cursor-pointer"></i>
        <input
          class="absolute opacity-0 w-4 h-4 !cursor-pointer"
          type="file"
          @change="onFileChanged"
        />
      </div>
    </div>
  </div>
</template>

<!--
image upload qilganda chqiadigan textni designi chizilmagan ekan faqat shu case qoldi
va filter chiuzilmagan qanaqa content chiqishi ?
-->

<script setup lang="ts">
import { lightningcss } from 'tailwindcss/src/oxide/cli/build/deps'
import { ref } from 'vue'

import img from '~/assets/images/comment.jpg'

const showText = ref(false)

const toggleText = () => {
  showText.value = !showText.value
}
const images = ref<File[]>([])
const image = ref<File | null>(null)

function onFileChanged(event: Event) {
  const fileInput = event.target as HTMLInputElement
  const files = fileInput.files
  console.log(files)
  const fileReader = new FileReader()
  if (files && files.length > 0) {
    image.value = files[0]
    // console.log(image.value)
    fileReader.onload = function (event) {
      console.log('salom')
      images.value.push(event.target.result)
    }
    console.log(images.value)
    fileReader.readAsDataURL(image.value)
  } else {
    image.value = null
  }
}
</script>
