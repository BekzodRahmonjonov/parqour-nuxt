<template>
  <!-- COMMENT SECTION -->
  <div class="container">
    <div class="mt-4">
      <CommentsCommentUpload @ItemCommnetAdd="itemCommnetAdd" />
      <CommentsCommentRecursion
        :data="news_comment_list"
        @itemCommnetChildAdd="itemCommnetChildAdd"
        @childCommnetOpen="childCommnetOpen"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import img from '~/assets/images/user.jpg'
import { useNewsStore } from "~/store/news";
const { newsCommnetList} = useNewsStore();
// eslint-disable-next-line camelcase
const news_comment_list = computed(() => newsCommnetList);
const show = ref<Boolean>(false)
function onSubmit() {}
function childUploadCloce(array: any) {
  return array.map((el: any) => {
    return {
      ...el,
      isOpen: false,
    }
  })
}
function itemCommnetChildAdd(item: any) {
  console.log(item)
  const { id, _data } = item
  for (let i = 0; i < dataCommnets.value.length; i++) {
    if (dataCommnets.value[i].id === id) {
      dataCommnets.value[i].comment_child.push({ ..._data, user_img: img })
      dataCommnets.value[i].comment_child = childUploadCloce(
        dataCommnets.value[i].comment_child
      )
    }
  }
}
function itemCommnetAdd(item: any) {
  console.log(item);
}
function childCommnetOpen(perentInd: number, childInd: number) {
  console.log(perentInd, childInd)
  dataCommnets.value[perentInd].comment_child = dataCommnets.value[
    perentInd
    ].comment_child.map((el, ind) => {
    if (childInd === ind) {
      return {
        ...el,
        isOpen: true,
      }
    } else return el
  })
  console.log(dataCommnets.value[perentInd].comment_child)
}
</script>
