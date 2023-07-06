<template>
  <div class="mt-8" ref="content">
    <SectionsAudioPlayer ref="target" />
    <SectionsAudioPlayer :fixed="isFixed" v-if="isFixed" />
    <CommonSinglePageWrapper class="container mt-8" :single="singleData">
      <template #aside>
        <img src="https://picsum.photos/200/400" class="w-full" alt="" />
      </template>
    </CommonSinglePageWrapper>
  </div>
</template>
<script setup lang="ts">
import { singleData } from '~/data/fakeData'

const isFixed = ref(false)
const target = ref(null)

onMounted(() => {
  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }], observerElement) => {
      console.log('inter', isIntersecting)
      if (!isIntersecting) {
        isFixed.value = true
      } else {
        isFixed.value = false
      }
    }
  )
})
</script>
