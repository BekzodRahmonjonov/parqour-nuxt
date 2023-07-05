<template>
  <div class="p-5 rounded-lg bg-white-100">
    <div class="flex flex-col gap-5">
      <h2 class="text-xl font-bold leading-130 text-dark">
        {{ $t('others') }}
      </h2>
      <div class="flex items-center gap-3" v-for="(item, i) in others" :key="i">
        <img
          class="rounded-full h-[57px] w-[57px]"
          src="/images/face.png"
          alt=""
        />
        <p class="text-sm font-semibold leading-140 text-blue-600">
          {{ item?.name }}
        </p>
      </div>
    </div>
    <nuxt-link to="/authors">
      <button
        class="rounded py-2 pl-4 pr-2.5 bg-blue-200 w-full mt-5 group text-white"
      >
        <span
          class="leading-140 text-sm flex items-center justify-between transition-300 group-hover:text-blue-100"
        >
          Все авторы
          <i
            class="arrow-right icon-arrow-right transition-300 group-hover:translate-x-1"
          ></i>
        </span>
      </button>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
interface IOtherAuthors {
  img: string
  name: string
}

interface Props {
  others: IOtherAuthors[]
}
defineProps<Props>()
</script>

<style scoped></style>
