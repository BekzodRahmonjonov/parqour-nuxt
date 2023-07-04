<template>
  <div class="relative z-20">
    <a
      class="rounded-md flex group transition-200 items-center justify-center"
      v-for="(item, i) in icons"
      :key="i"
      :href="item.url"
      target="_blank"
    >
      <span
        class="text-blue-200 rounded-md dark:text-blue-100 border-[#a2bcde4d] hover:border-blue-150 border dark:hover:text-white hover:text-white hover:bg-blue-150 p-1 cursor-pointer transition-200"
        :class="item.icon"
      ></span>
    </a>
  </div>
</template>

<script setup lang="ts">
const icons = [
  {
    url: '/',
    icon: 'icon-instagram',
  },
  {
    url: '/',
    icon: 'icon-telegram',
  },
  {
    url: '/',
    icon: 'icon-facebook',
  },
  {
    url: '/',
    icon: 'icon-twitter',
  },
]
</script>

<style scoped></style>
