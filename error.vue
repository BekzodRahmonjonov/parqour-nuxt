<template>
  <div>
    <LayoutHeader ref="header" />
    <div class="flex items-center justify-center h-screen container">
      <div class="flex items-center justify-center flex-col">
        <img src="/images/uz404.png" alt="404" />
        <h2 class="font-bold text-28 text-blue-700 mt-8">
          Страница не найдена
        </h2>
        <p class="leading-130 text-gray-200 text-lg">
          Страница не найдена, перезагрузите страницу или повторите попытку
          позже
        </p>
        <nuxt-link to="/">
          <CommonButton
            text="На главную"
            class="!bg-blue-150 !text-white !py-3 !px-12 !font-medium mt-6"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { NuxtError } from '#app'

interface Props {
  error: NuxtError
}
defineProps<Props>()
</script>
