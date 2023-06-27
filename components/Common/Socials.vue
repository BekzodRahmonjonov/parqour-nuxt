<template>
  <div>
    <a
      class="border-[#a2bcde4d] border rounded-md flex items-center justify-center p-1"
      v-for="(item, i) in icons"
      :key="i"
      :href="item.url"
      target="_blank"
    >
      <span
        class="text-blue-200 dark:text-white hover:text-blue-100 cursor-pointer transition-200"
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
