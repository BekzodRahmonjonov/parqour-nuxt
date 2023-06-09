<template>
  <div class="py-3 border-b-[0.5px] border-solid border-blue-200/10">
    <div class="container flex-y-center justify-between">
      <div class="flex-y-center space-x-7">
        <button class="group flex-y-center">
          <span
            class="icon-hamburger text-[28px] text-blue-200 transition-200 group-hover:text-blue-100"
          />
        </button>
        <NavigationWrapper :navigations="navigationData" />
      </div>
      <div class="w-full max-w-[376px]">
        <Search />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { navigationData } from '~/data/index'
</script>

<style scoped></style>
