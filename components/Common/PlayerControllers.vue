<template>
  <div class="flex items-center gap-4">
    <button
      @click="audioStore.makeFaster()"
      class="btn icon-multiplier-1x"
    ></button>
    <button @click="audioStore.backward()" class="btn icon-time-back"></button>
    <button
      @click="audioStore.forward()"
      class="btn icon-time-forvard"
    ></button>
    <button class="btn icon-download-stroke"></button>
  </div>
</template>

<script setup lang="ts">
import { useAudioStore } from '~/store/audio'

const audioStore = useAudioStore()
</script>

<style scoped>
.btn {
  @apply p-2 rounded-md text-white bg-[#0000004d] text-2xl cursor-pointer transition duration-200 ease-out hover:text-opacity-50;
}
</style>
