<template>
  <div>
    <LayoutHeader ref="header" />
    <div class="flex items-center justify-center h-screen container">
      <div class="flex items-center justify-center flex-col">
        <img src="/images/uz404.png" alt="404" class="pointer-events-none" />
        <h2 class="font-bold text-28 text-blue-700 mt-8">
          {{ $t('not_found') }}
        </h2>
        <p class="leading-130 text-gray-200 text-lg">
          {{ $t('not_found_detail') }}
        </p>
        <nuxt-link to="/">
          <CommonButton
            :text="$t('back_to_main')"
            class="!bg-blue-150 !text-white !py-3 !px-12 !font-medium mt-6"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { NuxtError } from '#app'
import { useHomeStore } from '~/store/index'
import { useTheme } from '~/store/theme'

const homeStore = useHomeStore()
const themeStore = useTheme()

homeStore.nuxtServerInit()
themeStore.initTheme()

interface Props {
  error: NuxtError
}
defineProps<Props>()
</script>
