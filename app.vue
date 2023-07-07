<template>
  <NuxtLayout>
    <Transition name="fade" mode="out-in">
      <div :key="$route.path">
        <NuxtPage />
        <SectionsAudioPlayer
          v-if="audioStore.isAudioFixed"
          :fixed="audioStore.isAudioFixed"
        />
      </div>
    </Transition>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { useAudioStore } from '~/store/audio'
import { useHomeStore } from '~/store/index'
import { useTheme } from '~/store/theme'

const homeStore = useHomeStore()
const themeStore = useTheme()
const audioStore = useAudioStore()

homeStore.nuxtServerInit()
themeStore.initTheme()
</script>
