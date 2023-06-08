<template>
  <NuxtLink to="/" class="group inline-block">
    <div
      class="p-5 bg-gray-400 w-[521px] rounded-lg text-white relative transition-200 group-hover:-translate-y-1"
    >
      <p class="text-xs leading-20 mb-4">{{ data?.date }}</p>
      <p
        class="max-w-[303px] mb-[6px] font-bold text-base leading-136 line-clamp-2"
      >
        {{ data?.title }}
      </p>
      <p class="mb-5 font-medium text-xs leading-20 text-blue-100">
        {{ data?.author }}
      </p>
      <div
        class="text-xs font-medium leading-14 text-blue-100 flex items-center gap-x-1"
      >
        <i class="icon-eye"></i>
        <span>{{ data?.views }}</span>
      </div>
      <div
        class="absolute-y-center -right-5 rounded-lg w-[202px] h-[140px] overflow-hidden bg-blue-200 blur-[0] group-hover:blur-[14.5px] transition-200"
      ></div>
      <img
        class="absolute-y-center -right-5 rounded-lg w-[202px] h-[140px] object-cover"
        :src="data?.img"
        alt="card-img"
      />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  data: object
}
defineProps<Props>()
</script>
