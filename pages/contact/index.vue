<template>
  <CommonBreadcrumb :menu="menu" class="mb-8" />
  <div class="py-8 md:py-16">
    <div class="container">
      <p class="page-title mb-4 md:mb-6">{{ $t('contacts') }}</p>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-x-8 gap-y-5"
      >
        <div class="contact__card">
          <div class="contact__card_symbol">
            <i class="icon-mail symbol-icon"></i>
          </div>
          <p class="contact__card_title">
            {{ $t('mail_for_contacts') }}
          </p>
          <a :href="'mailto:' + contactData.email" class="contact__card_link">{{
            contactData.email
          }}</a>
        </div>
        <div class="contact__card">
          <div class="contact__card_symbol">
            <i class="icon-phone symbol-icon"></i>
          </div>
          <p class="contact__card_title">
            {{ $t('phone_reduction') }}
          </p>
          <a :href="'tel:' + contactData.phone" class="contact__card_link">{{
            contactData.phone
          }}</a>
        </div>
        <div class="contact__card">
          <div class="contact__card_symbol">
            <i class="icon-message symbol-icon"></i>
          </div>
          <p class="contact__card_title">
            {{ $t('for_advertising') }}
          </p>
          <div class="flex items-center gap-x-2 mb-[10px]">
            <a
              :href="'tel:' + contactData.telegramNumbers?.first"
              target="_blank"
              class="contact__card_link"
              >{{ contactData.telegramNumbers?.first }}</a
            >
            <span class="w-[1px] h-[14px] inline-block bg-white/40"></span>
            <a
              href="#"
              class="group flex-y-center transition-200 hover:gap-2 gap-1 text-white text-sm lg:text-base leading-130 font-semibold hover:text-blue-300"
              >Telegram
              <i
                class="icon-chevron-right text-white group-hover:text-blue-300"
              ></i
            ></a>
          </div>
          <div class="flex items-center gap-x-2">
            <a
              :href="'tel:' + contactData.telegramNumbers?.second"
              target="_blank"
              class="contact__card_link"
              >{{ contactData.telegramNumbers?.second }}</a
            >
            <span class="w-[1px] h-[14px] inline-block bg-white/40"></span>
            <a
              href="#"
              class="group flex-y-center transition-200 hover:gap-2 gap-1 hover:text-blue-300 text-white text-sm lg:text-base leading-130 font-semibold"
              >Telegram
              <i
                class="icon-chevron-right text-white group-hover:text-blue-300"
              ></i
            ></a>
          </div>
        </div>
        <div class="contact__card">
          <div class="contact__card_symbol">
            <i class="icon-telegram symbol-icon text-2xl lg:!text-3xl"></i>
          </div>
          <p class="contact__card_title">
            {{ $t('channels_telegram') }}
          </p>
          <div class="flex items-center gap-x-2 mb-[10px]">
            <a
              :href="'https://' + contactData.telegramChannels?.first"
              target="_blank"
              class="group flex-y-center transition-200 hover:gap-2 gap-1 text-white text-sm lg:text-base leading-130 font-semibold hover:text-blue-300"
              >{{ contactData.telegramChannels?.first }}
              <i
                class="icon-chevron-right text-white group-hover:text-blue-300"
              ></i
            ></a>
          </div>
          <div class="flex items-center gap-x-2">
            <a
              :href="'https://' + contactData.telegramChannels?.second"
              target="_blank"
              class="group flex-y-center transition-200 hover:gap-2 gap-1 text-white text-sm lg:text-base leading-130 font-semibold hover:text-blue-300"
              >{{ contactData.telegramChannels?.second }}
              <i
                class="icon-chevron-right text-white group-hover:text-blue-300"
              ></i
            ></a>
          </div>
        </div>
        <div class="contact__card">
          <div class="contact__card_symbol">
            <i class="icon-instagram symbol-icon text-2xl lg:!text-3xl"></i>
          </div>
          <p class="contact__card_title">
            {{ $t('channels_instagram') }}
          </p>
          <div class="flex items-center gap-x-2 mb-[10px]">
            <a
              :href="'https://' + contactData.instagram"
              target="_blank"
              class="group flex-y-center transition-200 hover:gap-2 gap-1 text-white text-sm lg:text-base leading-130 font-semibold hover:text-blue-300"
              >{{ contactData.instagram }}
              <i
                class="icon-chevron-right text-white group-hover:text-blue-300"
              ></i
            ></a>
          </div>
        </div>
        <div class="contact__card">
          <div class="contact__card_symbol">
            <i class="icon-facebook symbol-icon text-2xl lg:!text-3xl"></i>
          </div>
          <p class="contact__card_title">
            {{ $t('channels_facebook') }}
          </p>
          <div class="flex items-center gap-x-2 mb-[10px]">
            <a
              :href="'https://' + contactData.facebook"
              target="_blank"
              class="group flex-y-center transition-200 hover:gap-2 gap-1 text-white text-sm lg:text-base leading-130 font-semibold hover:text-blue-300"
              >{{ contactData.facebook }}
              <i
                class="icon-chevron-right text-white group-hover:text-blue-300"
              ></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { contactData } from '~/data'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const menu = [{ title: t('contacts'), link: '/contact' }]
</script>

<style scoped>
.contact__card {
  @apply bg-blue-700 dark:bg-dark-200 dark:hover:bg-blue-600 cursor-pointer hover:bg-blue-600 rounded-xl p-4 lg:p-5 flex flex-col items-start transition-all;
}
.contact__card:hover .contact__card_symbol {
  transition: all 0.15s ease-in-out;
  background: #52618f;
}
.contact__card_symbol {
  @apply w-12 lg:w-[72px] h-12 lg:h-[72px] flex items-center justify-center rounded-lg bg-blue-600 mb-4 lg:mb-7;
}

.symbol-icon {
  @apply text-2xl lg:text-[40px] text-white;
}

.contact__card_title {
  @apply mb-4 text-white text-xl lg:text-2xl font-bold leading-130;
}

.contact__card_link {
  @apply font-semibold text-sm lg:text-base leading-130 text-white duration-200 transition-all hover:text-blue-300;
}
</style>
