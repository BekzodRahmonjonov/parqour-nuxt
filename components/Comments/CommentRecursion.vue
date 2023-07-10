<template>
  <div>
    <AuthMain :show="show" @close="authModalClose"/>
    <div v-for="(item, ind) in data" :key="ind">
      <CommentsCommentUser
          @childIsOpen="childOpen"
          @itemCommnetChildAdd="itemChildAdd"
          :index="ind"
          class="mt-8"
          :data="item"/>
    </div>
    <div class="flex mb-5">
      <CommonButton @click="authModalClose">Еще</CommonButton>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ItemData {
  last_name: string,
  first_name: string,
  user_img: string,
  comment_text: string,
  comment_child?: ItemData,
  images: string[]
}

interface Prop {
  data?: ItemData
}

defineProps<Prop>()
const show  = ref(false)
const emit = defineEmits(['itemCommnetChildAdd', 'childCommnetOpen'])

function itemChildAdd(item: any) {
  emit('itemCommnetChildAdd', item)
}

function childOpen(prIndex: number, childInd: number) {
  console.log(prIndex, childInd)
  emit('childCommnetOpen', prIndex, childInd)
}
function authModalClose() {
  show.value = !show.value
}
</script>

<style scoped>

</style>
