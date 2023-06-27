<template>
  <div
    class="p-3 flex items-center rounded-lg gap-2 h-[132px] sm:p-5 bg-[#F5F5F8] w-full md:w-full text-dark relative transition-200"
  >
    <div class="rounded-full">
      <BlockPreloader loading width="92px" height="92px" borderRadius="100%" />
    </div>
    <div class="flex flex-col gap-2">
      <BlockPreloader loading width="240px" height="24px" />
      <BlockPreloader loading width="100px" height="16px" />
    </div>
  </div>
</template>
