<template>
  <div class="rounded-md bg-gray-150 w-full h-full relative">
    <img src="https://picsum.photos/300/400"
         alt="podcast_image"
         class="w-full object-cover rounded-md aspect-auto relative z-0"
    >
    <div class="absolute z-10 w-full h-full podcast-overlay top-0 rounded-md p-4 flex flex-col justify-between items-end">
      <div class="bg-blue-700/40 px-2.5 py-1.5 rounded w-fit flex-center">
        <span class="text-white text-xs font-medium leading-130">Podcast</span>
        <span class="w-1 h-1 rounded-full bg-gray-100 mx-1.5"></span>
        <i class="icon-videocamera text-white"></i>
      </div>
      <div class="w-full">
        <div></div>
        <p class="text-white line-clamp-2 text-base font-medium leading-130">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus enim fugiat iusto magni neque nihil quae qui reprehenderit voluptatum! Fuga?</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style>
  .podcast-overlay {
    background: linear-gradient(0deg, rgba(25, 31, 46, 0.9) -9.97%, rgba(25, 31, 46, 0) 108.11%);
  }
</style>