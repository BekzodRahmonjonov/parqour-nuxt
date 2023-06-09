<template>
  <div class="pt-16">
    <SectionsLatestNews />
    <SectionsMainNews />
    <SectionsNews class="py-6 lg:py-10" />
    <CommonAdBanner image="/images/ad/ad.png" />
    <SectionsAuthor class="my-6 lg:my-10" />
    <SectionsReports :data="reportsData" />
    <SectionsPodcasts class="my-10"/>
    <SectionsInterviews class="py-10" />
  </div>
</template>

<script setup lang="ts">
import { reportsData } from '@/data'
</script>
