<template>
  <div>
    <div v-for="(item, ind) in data" :key="ind">
              <CommentsCommentUser
               @childIsOpen="childOpen"
              @itemCommnetChildAdd="itemChildAdd"
             :index="ind"
          class="mt-8" :data="item"/>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ItemData {
  last_name: String,
  first_name: String,
  user_img: String,
  comment_text: String,
  comment_child?: ItemData,
  images: String[]
}

interface Prop {
  data?: ItemData
}

defineProps<Prop>()
const emit = defineEmits(['itemCommnetChildAdd', 'childCommnetOpen'])

function itemChildAdd(item: any) {
  emit('itemCommnetChildAdd', item)
}
function childOpen (prIndex:number, childInd: number){
  console.log(prIndex, childInd)
  emit('childCommnetOpen', prIndex,childInd)
}
</script>

<style scoped>

</style>
