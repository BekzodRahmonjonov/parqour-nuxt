<template>
  <div
    class="py-2.5 border-b-[0.5px] border-solid border-blue-200/10 z-40 relative"
  >
    <div class="container flex-y-center justify-between">
      <div class="relative flex-y-center space-x-7 z-10">
        <button class="group flex-y-center" @click="handleMenu">
          <span
            v-if="!menuTrigger"
            class="icon-hamburger text-[28px] text-blue-200 transition-200 group-hover:text-blue-100 cursor-pointer z-40"
          />
          <span
            v-else
            class="icon-close text-[28px] text-blue-200 transition-200 group-hover:text-blue-100 cursor-pointer z-40"
          />
        </button>
        <NavigationWrapper :navigations="navigationData" />
      </div>
      <LayoutHeaderLogo class="flex lg:hidden" />
      <div class="lg:w-full lg:max-w-[376px]">
        <Search />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { navigationData } from '~/data/index'

const menuTrigger = ref(false)
const emit = defineEmits<{
  (e: 'handleShowMenu'): void
}>()
const handleMenu = () => {
  menuTrigger.value = !menuTrigger.value
  emit('handleShowMenu')
}
</script>
