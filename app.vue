<template>
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
</template>
<script setup lang="ts">
import { useHomeStore } from '~/store/index'
import { useTheme } from '~/store/theme'
import { useAudioStore } from '~/store/audio'

const homeStore = useHomeStore()
const themeStore = useTheme()
const audioStore = useAudioStore()

homeStore.nuxtServerInit()
themeStore.initTheme()
</script>
