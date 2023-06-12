<template>
  <div>
    <PushMessage />
    <div class="dark:bg-blue-700 transition-200">
      <LayoutHeader />
      <div class="pt-[104px] lg:pt-[235.9px]">
        <slot />
      </div>
      <LayoutFooter />
    </div>
  </div>
</template>
<script setup lang="ts"></script>
