<template>
  <div class="container md:w-[784px] mt-8 mb-16">
    <h1 class="text-slate-700 text-[36px] font-bold leading-10 mb-5">
      {{ terms.terms_title }}
    </h1>
    <p class="fon-text text-slate-700 !font-ibm text-[18px]">
      {{ terms.terms_text }}
    </p>

    <CommonCommentary />
  </div>
</template>

<script setup lang="ts">
const terms = {
  terms_title: 'Условия пользование',
  terms_text:
    'Спустя почти 70 лет после победы над фашистским злом и самим богом войны Диана Принс (Галь Гадот) ходит на работу в Смитсоновский институт, где разбирается с археологическими древностями, а в свободное время спасает детей в торговом центре и, возможно, помогает старушкам перейти дорогу. Жизнь мисс Принс печальна и одинока: потеряв на великой войне своего  первого и единственного возлюбленного, летчика Стива (Крис Пайн), она так никого и не смогла полюбить — ужинает одна, все друзья и подруги остались в прошлом, интересных занятий у нее просто нет. ',
}
</script>
<style>
.fon-text {
  font-family: 'IBM Plex Serif', serif;
  width: 784px;
  color: #2c3752;
  font-size: 18px;
  font-family: IBM Plex Serif;
  font-weight: 400;
  line-height: 27px;
  word-wrap: break-word;
}
</style>
