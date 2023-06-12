<template>
  <div>
    <div>
      <PushMessage />

      <div class="dark:bg-blue-700 transition-200">
        <LayoutHeader ref="header" />
        <div class="pt-[104px] lg:pt-[235.9px]">
          <slot />
        </div>
        <LayoutFooter />
      </div>
      <button
        v-if="windowIsScrolled"
        class="fixed right-8 bottom-8 flex-y-center justify-center text-2xl text-white icon-arrow-left rotate-90 w-12 h-12 transition-200 hover:bg-blue-600 rounded-full bg-blue-100 z-20"
        @click="scrollToTop"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const scroll = useWindowScroll()
const scrollTop = scroll.y
const windowIsScrolled = ref(false)
const header = ref()
function scrollToTop() {
  window.scrollTo(0, 0)
}

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
