<template>
  <div class="pt-[84px] pb-16">
    <div class="container">
      <p class="page-title mb-6">{{ $t('contacts') }}</p>
      <div class="grid grid-cols-3 gap-x-8 gap-y-5">
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const contactData = {
  email: 'info@uznews.uz',
  phone: '+998 99 888 67 65',
  telegramNumbers: {
    first: '+998 94 649 57 77',
    second: '+998 99 813 69 99',
  },
  telegramChannels: {
    first: 't.me/uznews',
    second: 't.me/uznews',
  },
  instagram: 'instagram.com/uznews',
  facebook: 'facebook.com/uznews.uz',
}
</script>

<style scoped>
.contact__card {
  @apply bg-blue-700 rounded-xl p-5 flex flex-col items-start;
}

.contact__card_symbol {
  @apply w-[72px] h-[72px] flex items-center justify-center rounded-lg bg-blue-600 mb-7;
}

.symbol-icon {
  @apply text-[40px] text-white;
}

.contact__card_title {
  @apply mb-4 text-white text-2xl font-bold leading-130;
}

.contact__card_link {
  @apply font-semibold text-base leading-130 text-white duration-200 transition-all hover:text-blue-300;
}
</style>
