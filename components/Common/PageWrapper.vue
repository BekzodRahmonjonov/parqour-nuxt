<template>
  <div class="grid grid-cols-12 gap-8">
    <main class="col-span-9">
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
      <slot />
    </main>
    <aside class="col-span-3">
      <slot name="aside" />
    </aside>
  </div>
</template>
<script setup lang="ts">
interface Props {
  title: string
  text: string
}
defineProps<Props>()
</script>
