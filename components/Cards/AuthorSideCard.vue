<template>
  <div class="px-8 pt-[108px] pb-7 bg-img border border-[#52618f33] rounded-lg">
    <div class="flex items-center justify-between flex-wrap">
      <div class="flex gap-7">
        <div class="w-[140px] h-[140px]">
          <img
            :src="author.img"
            class="rounded-full border-2 border-blue-100"
            alt=""
          />
        </div>

        <div class="flex flex-col self-end gap-4">
          <div>
            <h2 class="titleXL">{{ author.name }}</h2>
            <span class="textSM">{{ author.aboutUser }}</span>
          </div>

          <CommonSocials class="flex items-center gap-2" />
        </div>
      </div>

      <div class="flex items-center gap-5">
        <div class="flex flex-col items-center justify-center">
          <span class="text-2xl font-bold text-blue-700 dark:text-white">
            {{ author.reads }}
          </span>
          <p class="textSM !text-[12px]">читали</p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <span class="text-2xl font-bold text-blue-700 dark:text-white">
            {{ author.articles }}
          </span>
          <p class="textSM !text-[12px]">статьи</p>
        </div>
      </div>
    </div>
    <p class="mt-7 textSM !text-blue-600 dark:!text-white">
      {{ author.fullInfo }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface ISingleAuthorSide {
  img: string
  name: string
  aboutUser: string
  reads: string
  articles: number
  fullInfo: string
}

interface Props {
  author: ISingleAuthorSide
}

defineProps<Props>()
</script>

<style scoped>
.bg-img {
  background-image: url('/images/author/profile-bg.png');
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 100% 140px;
}

.dark .bg-img {
  background-image: url('/images/dark-bg-author.png');
}
</style>
