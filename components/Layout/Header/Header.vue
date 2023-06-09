<template>
  <header class="fixed top-0 left-0 w-full z-40">
    <div class="relative z-30 !shadow-sm">
      <LayoutHeaderActions />
      <div class="transition-200 bg-white dark:bg-blue-600">
        <LayoutHeaderMain />
        <LayoutHeaderNavigation @handleShowMenu="showMenu" />
      </div>
      <LayoutHeaderBreakingNews />
    </div>
    <Transition name="fade-bottom" mode="in-out">
      <LayoutHeaderMenu v-if="menuTrigger" />
    </Transition>
  </header>
</template>

<script setup lang="ts">
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
</script>

<style scoped></style>
