<template>
  <div class="pt-16">
    <SectionsMainNews />
    <SectionsNews class="my-6 lg:my-10" />
    <CommonAdBanner image="/images/ad/ad.png" />
    <SectionsAuthor class="my-6 lg:my-10" />
    <SectionsReports :data="reportsData" />
    <SectionsPodcasts class="py-14"/>
  </div>
</template>

<script setup lang="ts">
import {  reportsData } from '@/data'
</script>
