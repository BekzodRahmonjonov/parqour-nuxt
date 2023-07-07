<template>
  <nuxt-link
    class="py-5 rounded-lg bg-white-100 hover-effect dark:bg-dark-200 group dark:hover:!bg-blue-600 transition-200"
    :to="localePath('/news/' + news?.slug)"
  >
    <div class="flex gap-0.5">
      <img
        class="w-[202px] -translate-x-4 rounded-lg object-cover transition-300 group-hover:-translate-y-1"
        :src="news?.img"
        alt=""
      />
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-4">
          <span
            class="border hover:text-dark-200 transition-200 border-[#A2BCDE] dark:text-blue-100 rounded-lg leading-20 py-1 px-2.5 font-medium text-[12px] text-[#52618F]"
            >{{ news?.badge }}</span
          >
          <p class="text-dark text-xs leading-20 dark:text-blue-100">
            {{ news?.publishedTime }}
          </p>
        </div>
        <div>
          <h1
            class="text-base font-semibold text-blue-600 leading-140 dark:text-white dark:group-hover:text-blue-100 transition-200"
          >
            {{ news?.title }}
          </h1>
          <p class="text-xs leading-138 dark:text-white-100 text-blue-700">
            {{ news?.description }}
          </p>
        </div>
        <span
          class="mt-2 text-blue-200 text-xs font-medium flex items-center gap-1 dark:text-white"
        >
          <i class="icon-eye text-sm"></i> {{ news?.views }}</span
        >
      </div>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
interface INews {
  img: string
  slug: string
  badge: string
  publishedTime: string
  title: string
  description: string
  views: number
}

interface Props {
  news: INews
}

defineProps<Props>()
</script>

<style scoped>
.hover-effect:hover {
  background: white;
  box-shadow: 0px 12px 24px 0px rgba(82, 97, 143, 0.12);
}
</style>
