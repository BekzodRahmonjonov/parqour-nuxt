<template>
  <div
    class="bg-white-100 py-[10px] dark:bg-blue-700 transition-200 border-b-[0.5px] border-solid border-blue-200/10"
  >
    <div class="container flex-y-center justify-between">
      <CommonThemeTrigger />
      <div class="flex-y-center space-x-3">
        <LanguageSwitcher />
        <hr class="relative h-6 w-px bg-blue-100/20 border-0" />
        <div class="flex-y-center space-x-3">
          <NuxtLink to="/">
            <CommonButton variant="secondary">
              <span
                class="relative text-blue-200 inline-block icon-plus text-lg font-medium mr-2 leading-20 transition-200 dark:text-blue-100"
              />
              <span
                class="text-sm font-medium leading-20 transition-200 dark:text-white"
              >
                {{ $t('news') }}
              </span>
            </CommonButton>
          </NuxtLink>
          <NuxtLink to="/">
            <CommonButton>
              <span
                class="relative inline-block icon-login text-lg font-medium mr-2 leading-20"
              />
              <span class="text-sm font-medium leading-20">
                {{ $t('login') }}
              </span>
            </CommonButton>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
