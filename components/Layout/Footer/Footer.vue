<template>
  <footer class="bg-blue-700">
    <div class="container">
      <div
        class="flex-center-between pt-10 pb-6 border-b border-solid border-blue-600 flex-col md:flex-row gap-4"
      >
        <div class="flex-y-center gap-3">
          <NuxtLink to="/">
            <img src="/svg/uznews.svg" alt="logo" />
          </NuxtLink>

          <div class="px-1.5 rounded-[2px] bg-blue-200">
            <i class="icon-18 text-white text-xs" />
          </div>
        </div>

        <div :key="index" class="flex-y-center gap-8">
          <NuxtLink
            v-for="(link, index) in menu"
            to="/"
            class="text-base leading-5 font-medium text-white transition-200 hover:text-blue-100"
          >
            {{ link.title }}
          </NuxtLink>
        </div>
      </div>

      <div class="flex-center-between py-8 flex-col lg:flex-row gap-5">
        <div>
          <p
            class="text-sm leading-140 text-white font-normal lg:max-w-[70%] text-center"
          >
            {{ $t('found_mistake_warn_us') }}
          </p>

          <p
            class="rounded border border-solid border-blue-600 py-1 px-2.5 text-white text-sm leading-140 mt-4"
          >
            Для этого нажмите
            <span class="font-bold text-blue-100 ml-1">CTRL + ENTER</span>
          </p>
        </div>
        <div class="flex-y-center gap-4 flex-col md:flex-row">
          <div
            v-for="(item, index) in about"
            :key="index"
            class="px-4 py-3 rounded-[5px] border border-solid border-[#4E6293]/[36%]"
          >
            <p class="text-base text-white leading-5 font-medium">
              {{ item?.name }}
            </p>
            <p class="text-xs leading-[14px] font-normal text-blue-100">
              {{ item?.subtitle }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="py-4 border-t border-solid border-blue-600">
      <div
        class="container flex-center-between flex-col md:flex-row gap-5 flex-col-reverse"
      >
        <p class="text-sm leading-140 text-blue-100 font-normal">
          © 2015-2023 UzNews.uz
        </p>
        <div class="flex-y-center gap-2">
          <p class="text-sm leading-140 text-blue-100 font-normal">
            Developed with love by:
          </p>
          <CommonUicLogo main-color="#fff" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n()

const menu = [
  {
    title: t('ad_for_site'),
  },
  {
    title: t('contact'),
  },
  {
    title: t('using_contents'),
  },
]

const about = [
  {
    name: 'Юсупов Б.Д.',
    subtitle: 'Главный редактор',
  },
  {
    name: 'ЧП «News Media Group»',
    subtitle: 'Учредитель',
  },
  {
    name: '№ 1070 от 12.08.2015г.',
    subtitle: 'Свидетельство о регистрации электронного СМИ',
  },
]
</script>

<style scoped></style>
