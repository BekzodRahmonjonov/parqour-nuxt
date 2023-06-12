<template>
  <div class="pt-8">
    <SectionsLatestNews />
    <SectionsMainNews />
    <SectionsNews class="py-6 lg:py-10" />
    <CommonAdBanner image="/images/advertising/adver.png" />
    <SectionsAuthor class="py-6 lg:py-10" />
    <SectionsReports :data="reportsData" />
    <CommonAdBanner
      image="/images/advertising/yellow.png"
      class="pt-6 lg:pt-10"
    />
    <SectionsPhotoReports class="pt-6 lg:pt-10" />
    <SectionsPodcasts class="py-6 lg:py-10" />
    <SectionsInterviews class="pb-6 lg:pb-10" />
    <CommonAdBanner
      image="/images/advertising/airways.png"
      class="pb-6 lg:pb-10"
    />
    <SectionsColumns class="pb-6 lg:pb-10" />
    <SectionsSocial />
    <SectionsAnalysis class="py-6 lg:py-10" />
  </div>
</template>

<script setup lang="ts">
import { reportsData } from '@/data'
</script>
