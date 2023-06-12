<template>
  <div
    class="relative flex flex-col justify-between h-[362px] w-full lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 rounded hover:-translate-y-2 hover:cursor-pointer duration-300 hover:shadow-m border-2 border-transparent hover:border-[#A2BCDE]"
  >
    <img
      :src="bg"
      alt=""
      class="absolute inset-0 w-full h-full object-cover z-0"
    />
    <span
      class="absolute bg-[#191F2E] bg-opacity-60 inset-0 w-full h-full z-1"
    ></span>
    <article class="flex flex-col justify-between h-full p-5 z-10">
      <h4
        class="font-semibold text-white pb-3 text-center uppercase border-white/20 border-b-2 text-xs"
      >
        {{ title }}
      </h4>
      <p class="text-xl text-white font-semibold">
        {{ text }}
      </p>
    </article>
  </div>
</template>

<script setup lang="ts">
interface Props {
  id: number
  title: string
  text: string
  bg: string
}

defineProps<Props>()
</script>
