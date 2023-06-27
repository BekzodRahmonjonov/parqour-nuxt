<template>
   <div
      class="w-full mb-12 md:w-full rounded-lg text-dark relative transition-200 group-hover:-translate-y-1"
    >
      <h3 class="text-gray-900 text-[24px] font-bold leading-loose"> {{ data?.title }}</h3>
      <p class="fon-text text-slate-700 text-[18px] font-normal leading-relaxed">{{ data?.description }} </p>
      <h4 class="text-gray-900 text-[24px] font-bold leading-loose">Стоимость: {{ data?.price }} </h4>
    </div>
</template>


<script setup lang="ts">
import dayjs from 'dayjs'
// { data?.title }}
import { formatMoneyDecimal } from '../../helpers'

const { locale } = useI18n()

interface Props {
  data: object
}
defineProps<Props>()
</script>
