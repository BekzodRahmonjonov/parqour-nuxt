<template>
  <div class="container">
    <CommonPageWrapper class="mt-8">
      <button
        class="text-sm font-medium leading-126 text-white p-2 rounded-[30px] bg-blue-200"
      >
        Все
      </button>
      <CommonDropdown class="bg-[#F5F6F9] py-[10px] px-3 rounded-md">
        <template #head>
          <div
            class="flex items-center gap-[23px] font-medium leading-130 text-blue-700"
          >
            {{ sort[activeSortI] }}
            <span class="icon-chevron-right rotate-90 text-5"></span>
          </div>
        </template>
        <li
          v-for="(item, i) in sort"
          :key="i"
          @click="onClick(i)"
          class="p-3 hover:bg-[#F5F6F9] rounded-md font-medium leading-130 text-blue-700 transition-300"
        >
          {{ item }}
        </li>
      </CommonDropdown>

      <CardsSpecialReportsSingle
        v-for="(item, index) in specialReports"
        :key="index"
        :data="item"
        class="min-h-[180px]"
        badgeText="Экономика"
      />

      <template #aside>
        <img src="https://picsum.photos/200/400" class="w-full" alt="" />
      </template>
    </CommonPageWrapper>
  </div>
</template>
<script setup lang="ts">
import { specialReports } from '~/data'

const sort = ref(['За неделью', 'За все время'])
const activeSortI = ref(0)

const onClick = (index: number) => {
  activeSortI.value = index
}
</script>
