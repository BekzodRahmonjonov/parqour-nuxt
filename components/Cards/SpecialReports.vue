<template>
  <NuxtLink
    :to="'/special-reports/' + `${data?.id}`"
    class="group inline-block w-full pr-5 md:pr-0"
  >
    <div
      class="p-3 sm:p-5 bg-[#a2bcde29] w-full md:w-[521px] rounded-lg text-white relative transition-200 group-hover:-translate-y-1"
    >
      <p class="text-xs leading-20 mb-2 sm:mb-4">
        {{ dayjs(data?.date).locale(locale).format('DD MMM YYYY, HH:mm') }}
      </p>
      <p
        class="max-w-[183px] sm:max-w-[267px] md:max-w-[303px] mb-1 sm:mb-[6px] font-medium sm:font-bold text-sm sm:text-base leading-136 line-clamp-2"
      >
        {{ data?.title }}
      </p>
      <p class="mb-3 sm:mb-5 sm:font-medium text-xs leading-20 text-blue-100">
        {{ data?.author }}
      </p>
      <div
        class="text-xs font-medium leading-14 text-blue-100 flex items-center gap-x-1"
      >
        <i class="icon-eye"></i>
        <span>{{ formatMoneyDecimal(data?.views) }}</span>
      </div>
      <div
        class="absolute-y-center -right-5 rounded-lg w-[138px] h-[96px] sm:w-[202px] sm:h-[140px] overflow-hidden bg-blue-200 blur-[0] group-hover:blur-[14.5px] transition-200"
      ></div>
      <img
        class="absolute-y-center -right-5 rounded-lg w-[138px] h-[96px] sm:w-[202px] sm:h-[140px] object-cover"
        :src="data?.img"
        alt="card-img"
      />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'

import { formatMoneyDecimal } from '../../helpers'

const { locale } = useI18n()

interface Props {
  data: object
}
defineProps<Props>()
</script>
