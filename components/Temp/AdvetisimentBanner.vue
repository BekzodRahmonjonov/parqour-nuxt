<template>
  <div class="grid gap-6">
    <img
      v-for="(item, idx) in items"
      :key="idx"
      class="w-[274px]"
      :src="item.img"
      alt="advert"
    />
  </div>
</template>
<script setup lang="ts">
const items = [
  {
    id: '0',
    img: '/temp/advert-img1.png',
  },
  {
    id: '1',
    img: '/temp/advert-img2.png',
  },
]
</script>

<style></style>
