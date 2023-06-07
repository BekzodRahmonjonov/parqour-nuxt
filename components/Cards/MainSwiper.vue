<template>
  <div class="w-full h-[466px] rounded-lg relative overflow-hidden">
    <img
      src="/images/news/president.png"
      alt="news"
      class="w-full h-full object-cover"
    />
    <div class="linear-bg-news absolute w-full h-full inset-0" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.linear-bg-news {
  background: linear-gradient(
    180deg,
    rgba(57, 68, 102, 0) 0%,
    rgba(28, 34, 52, 0.92) 70.19%
  );
}
</style>
