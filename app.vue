<template>
  <div>
    <SectionsAudioPlayer v-show="isPodcastPage" class="mt-[132px]" />

    <SectionsMiniAudio v-show="!isPodcastPage && audioStore.isPlaying" />

    <NuxtLayout>
      <NuxtPage />
      <SectionsAudioPlayer
        v-if="audioStore.isAudioFixed"
        :fixed="audioStore.isAudioFixed"
      />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { useHomeStore } from '~/store'
import { useAudioStore } from '~/store/audio'
import { useTheme } from '~/store/theme'

const router = useRoute()

const { nuxtServerInit } = useHomeStore()
const { initTheme } = useTheme()

const audioStore = useAudioStore()

const isPodcastPage = computed(
  () => router.fullPath.length > 9 && router.fullPath.includes('/podcasts')
)

nuxtServerInit()
initTheme()
</script>
