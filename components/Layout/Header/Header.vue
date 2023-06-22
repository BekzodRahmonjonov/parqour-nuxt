<template>
  <header class="fixed top-0 left-0 w-full z-40">
    <div class="relative z-30 !shadow-sm">
      <CollapseTransition :duration="300" easing="linear" dimension="height">
        <div v-if="!windowIsScrolled" class="hidden lg:block">
          <LayoutHeaderActions />
        </div>
      </CollapseTransition>
      <div class="transition-200 bg-white dark:bg-blue-600">
        <!--        <LayoutHeaderMain class="hidden lg:block" />-->
        <LayoutHeaderNavigation @handleShowMenu="showMenu" />
      </div>
      <CollapseTransition
        v-if="false"
        :duration="300"
        easing="linear"
        dimension="height"
      >
        <div v-if="!windowIsScrolled">
          <LayoutHeaderBreakingNews />
        </div>
      </CollapseTransition>
    </div>
    <Transition name="fade-bottom" mode="in-out">
      <LayoutHeaderMenu v-if="menuTrigger" />
    </Transition>
  </header>
</template>

<script setup lang="ts">
import CollapseTransition from '@ivanv/vue-collapse-transition/src/CollapseTransition.vue'
import { useWindowScroll } from '@vueuse/core'

const menuTrigger = ref(false)

const showMenu = () => {
  menuTrigger.value = !menuTrigger.value
}

watch(
  () => menuTrigger?.value,
  (value) => {
    const body = document.body
    if (value) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = 'auto'
    }
  }
)

const scroll = useWindowScroll()
const scrollTop = scroll.y
const windowIsScrolled = ref(false)

watch(
  () => scrollTop,
  (value) => {
    if (value.value > 150) {
      windowIsScrolled.value = true
    } else {
      windowIsScrolled.value = false
    }
  },
  { deep: true }
)
</script>

<style scoped></style>
