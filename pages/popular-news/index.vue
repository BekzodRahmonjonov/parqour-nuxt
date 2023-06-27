<template>
  <div class="container">
    <CommonPageWrapper class="mt-8">
      <CommonDropdown class="bg-[#F5F6F9] py-[10px] px-3 rounded-md">
        <template #head>
          <div
            class="flex items-center gap-[23px] font-medium leading-130 text-blue-700"
          >
            За неделью <span class="icon-chevron-right rotate-90 text-5"></span>
          </div>
        </template>

        <li
          class="p-3 hover:bg-[#F5F6F9] rounded-md font-medium leading-130 text-blue-700"
        >
          За неделью
        </li>
        <li
          class="p-3 hover:bg-[#F5F6F9] rounded-md font-medium leading-130 text-blue-700"
        >
          За все время
        </li>
      </CommonDropdown>

      <CardsSpecialReportsSingle
        v-for="(item, index) in specialReports"
        :key="index"
        :data="item"
        class="min-h-[180px]"
        badge-text="Экономика"
      />

      <template #aside>
        <img src="https://picsum.photos/200/400" class="w-full" alt="" />
      </template>
    </CommonPageWrapper>


  </div>
</template>
<script setup lang="ts">
import { specialReports } from '~/data'
</script>
