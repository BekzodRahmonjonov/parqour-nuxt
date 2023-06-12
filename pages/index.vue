<template>
  <div class="pt-8 md:pt-16">
    <SectionsLatestNews />
    <SectionsMainNews />
    <SectionsNews class="py-6 lg:py-10" />
    <CommonAdBanner image="/images/ad/ad.png" />
    <SectionsAuthor class="my-6 lg:my-10" />
    <SectionsReports :data="reportsData" />
    <CommonAdBanner image="/images/ad/yellow.png" class="mt-10" />
    <SectionsPhotoReports class="my-10" />
    <SectionsPodcasts class="my-10" />
    <SectionsInterviews class="my-10" />
    <CommonAdBanner image="/images/ad/airways.png" />
    <SectionsColumns class="pb-10" />
    <SectionsSocial class="my-10" />
    <SectionsAnalysis class="my-10" />
  </div>
</template>

<script setup lang="ts">
import { reportsData } from '@/data'
</script>
