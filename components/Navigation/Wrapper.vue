<template>
  <div class="flex-y-center">
    <NavigationLink
      v-for="(link, index) of navigations"
      :key="index"
      :link="link"
    />
  </div>
</template>

<script setup lang="ts">
import { INavigation } from '~/types'

interface Props {
  navigations: INavigation[]
}
defineProps<Props>()
</script>

<style scoped></style>
