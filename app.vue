<template>
  <div>
    <SectionsAudioPlayer class="mt-[132px]" v-show="isPodcastPage" />
    <SectionsMiniAudio />
    <NuxtLayout>
      <Transition name="fade" mode="out-in">
        <div :key="$route.path">
          <NuxtPage />
          <SectionsAudioPlayer
            :fixed="audioStore.isAudioFixed"
            v-if="audioStore.isAudioFixed"
          />
        </div>
      </Transition>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { useHomeStore } from '~/store/index'
import { useTheme } from '~/store/theme'
import { useAudioStore } from '~/store/audio'

const router = useRoute()
const isPodcastPage = computed(
  () => router.fullPath.length > 9 && router.fullPath.includes('/podcasts')
)

const homeStore = useHomeStore()
const themeStore = useTheme()
const audioStore = useAudioStore()

homeStore.nuxtServerInit()
themeStore.initTheme()
</script>
