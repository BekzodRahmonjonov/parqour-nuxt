<template>
  <footer class="bg-blue-700">
    <div class="container">
      <div
        class="flex justify-between pb-5 pt-7 sm:pt-10 sm:pb-6 border-b border-solid items-start md:items-center border-blue-600 flex-col md:flex-row gap-4"
      >
        <div class="flex-y-center gap-3 group">
          <NuxtLink to="/" class="flex-y-center space-x-3">
            <img src="/svg/uznews.svg" alt="logo" />
            <div
              class="inline-block px-1.5 rounded-[2px] bg-blue-200 transition-200 group-hover:bg-red"
            >
              <i class="icon-18 text-white text-xs" />
            </div>
          </NuxtLink>
        </div>

        <div
          class="flex sm:items-center items-start sm:flex-row flex-col gap-3 sm:gap-8"
        >
          <NuxtLink
            v-for="(link, index) in menu"
            :key="index"
            :to="link.link"
            class="text-sm sm:text-base leading-5 font-medium text-white transition-200 hover:text-blue-100"
          >
            {{ link.title }}
          </NuxtLink>
        </div>
      </div>

      <div
        class="flex items-start md:items-center justify-between py-5 sm:py-8 flex-col lg:flex-row gap-5"
      >
        <div class="hidden md:block">
          <p
            class="text-sm leading-140 text-white font-normal lg:max-w-[70%] text-left"
          >
            {{ $t('found_mistake_warn_us') }}
          </p>

          <p
            class="inline-block rounded border border-solid border-blue-600 py-1 px-2.5 text-white text-sm leading-140 mt-4"
          >
            Для этого нажмите
            <span class="font-bold text-blue-100 ml-1">CTRL + ENTER</span>
          </p>
        </div>
        <div class="flex items-start md:item-start gap-4 flex-col md:flex-row">
          <div
            v-for="(item, index) in about"
            :key="index"
            class="px-4 py-3 rounded-[5px] border border-solid border-[#4E6293]/[36%]"
          >
            <p class="text-base text-white leading-5 font-medium">
              {{ item?.name }}
            </p>
            <p class="text-xs leading-[14px] font-normal text-blue-100 mt-0.5">
              {{ item?.subtitle }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <CntrlEnter />
    <div class="py-4 border-t border-solid border-blue-600">
      <div
        class="container flex items-start md:items-center justify-between flex-col md:flex-row gap-5"
      >
        <p class="text-sm leading-140 text-blue-100 font-normal">
          © 2015-2023 UzNews.uz
        </p>
        <!--        Social links-->
        <Transition name="fade" mode="out-in">
          <div v-if="$route?.path !== '/'">
            <ul class="flex-y-center gap-3">
              <li v-for="(social, idx) in socials" :key="idx">
                <a
                  v-tooltip="social?.name"
                  :href="social?.link"
                  target="_blank"
                  class="text-white text-base w-9 h-9 rounded-full flex-center hover:text-white transition-200"
                >
                  <i
                    class="text-blue-100 text-2xl hover:text-white"
                    :class="`icon-${social?.icon}`"
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </Transition>
        <!--        Social links-->

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
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const contactModal = ref(true)
const { t } = useI18n()

const socials = computed(() => [
  {
    icon: 'instagram',
    link: '/',
    name: 'Instagram',
  },
  {
    icon: 'telegram',
    link: '/',
    name: 'Telegram',
  },
  {
    icon: 'facebook',
    link: '/',
    name: 'Facebook',
  },
  {
    icon: 'youtube',
    link: '/',
    name: 'Youtube',
  },
  {
    icon: 'vk',
    link: '/',
    name: 'Vkontakt',
  },
  {
    icon: 'twitter',
    link: '/',
    name: 'Twitter',
  },
  {
    icon: 'network',
    link: '/',
    name: 'Network',
  },
])
const menu = [
  {
    title: t('terms_of_use'),
    link: '/terms-of-use',
  },
  {
    title: t('advertising'),
    link: '/advertisings',
  },
  {
    title: t('contacts'),
    link: '/contact',
  },
  {
    title: t('use_of_materials'),
    link: '/use_of_materials',
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
