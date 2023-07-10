<template>
  <div class="mt-8" ref="content">
    <div>
      <h1></h1>
      <client-only>
        <article
          v-html="dataContent[0].text"
          class="mx-auto my-10 text-dark-200 text-lg font-normal leading-relaxed max-w-[682px] transition-200 dark:text-white single-content"
        ></article>
      </client-only>

      <pre>{{ dataDetail.title }}</pre>
    </div>
    <template>
      <img src="https://picsum.photos/200/400" class="w-full" alt="" />
    </template>
  </div>
</template>
<script setup lang="ts">
import { singleData } from '~/data/fakeData'
import { useAudioStore } from '~/store/audio'

const audioStore = useAudioStore()
const isFixed = ref(true)
const target = ref(null)
const route = useRoute()

console.log(route.params.slug, 'SLUG')

const dataDetail = ref({})
const dataContent = ref({})

const podcastDetail = useApi().$get(`news/PodcastDetail/${route.params.slug}/`)
const podcastContent = useApi().$get(
  `news/PodcastContentItem/${route.params.slug}/`
)

Promise.all([podcastDetail, podcastContent]).then((res) => {
  console.log(res[1].results)
  console.log(res[0].title, 'TITLE')

  dataDetail.value = res[0]
  dataContent.value = res[1].results
})

// onMounted(() => {
//   // audioStore.makeUnfixed()
//   const { stop } = useIntersectionObserver(
//     target,
//     ([{ isIntersecting }], observerElement) => {
//       console.log('inter', isIntersecting)
//       if (!isIntersecting) {
//         isFixed.value = true
//         audioStore.makeFixed()
//       } else {
//         isFixed.value = false
//         audioStore.makeUnfixed()
//       }
//     }
//   )
// })
</script>
