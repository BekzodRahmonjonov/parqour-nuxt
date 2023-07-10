<template>
  <div class="main_container">
    <div
      class="px-6 py-4 border border-[#52618f33] bg-[#F8FAFC] rounded-lg flex justify-between items-center"
    >
      <div class="flex gap-4 items-center">
        <i class="icon-telegram text-white"></i>
        <p class="w-[350px] text-dark leading-130">
          Подписывайтесь на наш
          <nuxt-link to="/" class="text-[#00B7EE]">Telegram</nuxt-link>, чтобы
          быть в курсе последними новостями
        </p>
      </div>
      <button
        class="telegram px-5 py-2.5 rounded-lg font-medium text-sm text-white h-min w-min"
      >
        Перейти
      </button>
    </div>
  </div>
</template>

<style scoped>
.main_container {
  width: 681px;
  margin: 0 auto;
}
i {
  background: linear-gradient(271deg, #00759f 0%, #00b7ed 100%);
  padding: 16px;
  border-radius: 20px;
  font-size: 32px;
}
.telegram {
  background: linear-gradient(271deg, #00759f 0%, #00b7ed 100%);
}
.youtube {
  background: linear-gradient(271deg, #d50404 0%, #f80404 100%);
}
.instagram {
  background: linear-gradient(271deg, #842e96 0%, #fa0da4 100%);
}
</style>
