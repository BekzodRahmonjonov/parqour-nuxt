<template>
  <div class="w-[274px] h-[250px] rounded-lg bg-white-100 p-4">
    <div class="flex flex-col gap-3">
      <BlockPreloader loading width="100%" height="23px" />
      <div class="flex flex-col gap-1">
        <BlockPreloader loading width="100%" height="16px" />
        <BlockPreloader loading width="100%" height="16px" />
        <BlockPreloader loading width="100%" height="16px" />
        <BlockPreloader loading width="50%" height="16px" />
      </div>
    </div>

    <BlockPreloader loading width="100%" height="1px" />

    <div class="flex gap-2">
      <BlockPreloader loading width="44px" height="44px" borderRadius="100%" />
      <div class="flex flex-col">
        <BlockPreloader loading width="124px" height="16px" />
        <div></div>
      </div>
    </div>
  </div>
</template>
