<template>
  <div class="grid md:grid-cols-12 gap-8">
    <main class="col-span-9 md:col-span-9">
      <h2 class="page-title">{{ title }}</h2>
      <p
        class="text-slate-500 text-sm font-normal leading-tight mb-8 transition-200 dark:text-white"
      >
        {{ text }}
      </p>
      <slot />
    </main>
    <aside class="col-span-3 md:col-span-3">
      <div class="mt-14 w-full h-full">
        <slot name="aside" />
      </div>
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
