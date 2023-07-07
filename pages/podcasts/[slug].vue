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
import { useAudioStore } from '~/store/audio'

const audioStore = useAudioStore()
const isFixed = ref(false)
const target = ref(null)

onMounted(() => {
  // audioStore.makeUnfixed()
  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }], observerElement) => {
      console.log('inter', isIntersecting)
      if (!isIntersecting) {
        isFixed.value = true
        audioStore.makeFixed()
      } else {
        isFixed.value = false
        audioStore.makeUnfixed()
      }
    }
  )
})
</script>
