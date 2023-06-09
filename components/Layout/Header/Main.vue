<template>
  <div class="py-3 border-b-[0.5px] border-solid border-blue-200/10">
    <div class="container flex-y-center justify-between">
      <div class="flex-y-center space-x-5">
        <LayoutHeaderSalary />
        <LayoutHeaderTime :date="new Date()" />
      </div>
      <NuxtLink to="/">
        <img
          src="/svg/uznews.svg"
          alt="uznews logo"
          class="block dark:hidden"
        />
        <img
          src="/svg/uznews-white.svg"
          alt="uznews logo"
          class="hidden dark:block"
        />
      </NuxtLink>
      <div class="flex-y-center space-x-3">
        <LayoutHeaderLegal :salary="970000" type="МПОТ" currency="UZS" />
        <LayoutHeaderLegal :salary="330000" type="БРВ" currency="UZS" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
