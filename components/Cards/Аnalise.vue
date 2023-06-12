<template>
  <article
    class="flex flex-col justify-between h-[362px] w-full lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 rounded p-5 hover:mt-1 hover:cursor-pointer duration-300 hover:shadow-m"
    :class="bgColor"
  >
    <h4
      class="font-semibold text-white pb-3 text-center uppercase border-white/20 border-b-2 text-xs"
    >
      {{ title }}
    </h4>
    <p class="text-xl text-white font-semibold">
      {{ text }}
    </p>
  </article>
</template>

<script setup lang="ts">
interface Props {
  id: number
  title: string
  text: string
  bgColor: string
}

defineProps<Props>()
</script>
