<template>
  <div
    class="p-3 !pl-[202px] flex flex-col gap-2 h-[180px] sm:p-5 bg-[#F5F5F8] w-full md:w-full rounded-lg text-dark relative transition-200 group-hover:-translate-y-1"
  >
    <div class="!absolute absolute-y-center -left-5 rounded-lg">
      <BlockPreloader :loading="true" width="202px" height="140px" />
    </div>

    <BlockPreloader :loading="true" width="100px" height="16px" />
    <BlockPreloader :loading="true" width="600px" height="24px" />
    <BlockPreloader :loading="true" width="240px" height="24px" />
    <BlockPreloader :loading="true" width="100px" height="16px" />
    <BlockPreloader :loading="true" width="100px" height="16px" />
    <!-- no need to set :loading="true" just loading -->
  </div>
</template>
