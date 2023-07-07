<template>
  <div>
    <!--user image and lastname and firstname   -->
    <div>
      <div class="flex w-full justify-between">
        <div class="w-1/2 flex gap-2">
          <img class="rounded-full blok mt-2" width="33" height="33" :src="data.user_img" alt="">
          <div>
            <b>{{ data.last_name }} {{ data.first_name }}</b>
            <p class="text-[#919299]">{{ data.time }}</p>
          </div>
        </div>
        <div>
          <CommentsVote :count="data.comment_child.length"/>
        </div>
      </div>
      <p>{{ data.comment_text }}</p>
      <button @click="onSubmit" class="text-[#919299]">Ответить....</button>
      <br>
      <button class="text-[#48A4E3]">4 ответа</button>
      <CommentsCommentChildUpload
          @ItemCommnetChildAdd="childCommnetAdd"
          :index="data.id" v-if="isChildTextOpen"/>
      <div v-show="isFocus">
        <div class="ml-5" v-for="(item , ind) in data.comment_child " :key="ind">
          <div class="flex w-full justify-between">
            <div class="w-1/2 flex gap-2">
              <img class="rounded-full blok mt-2" width="33" height="33" :src="item.user_img" alt="">
              <div>
                <b>{{ item.last_name }} {{ item.first_name }}</b>
                <p class="text-[#919299]">{{ item.time }}</p>
              </div>
            </div>
            <div>
              <CommentsVote/>
            </div>
          </div>
          <p>{{ item.comment_text }}</p>
          <button @click="childonSubmit(ind)" class="text-[#919299]">Ответить....</button>
          <CommentsCommentChildUpload
              @ItemCommnetChildAdd="childCommnetAdd"
              :index="data.id" v-if="item.isOpen"/>
        </div>
      </div>

    </div>
  </div>
</template>
<script setup lang="ts">
import img from '~/assets/images/user.jpg'
import CommentUpload from "~/components/Comments/CommentUpload.vue";
import {addExtension} from "@rollup/pluginutils";

interface itemData {
  user_img: String,
  last_name: String,
  first_name: String,
  comment_text: String,
  commnet_child: itemData,
  time: String,
  images: String[],
}

interface Prop {
  data?: itemData,
  index: Number
}

const props = defineProps<Prop>();
const isFocus = ref<Boolean>(false);
const isChildTextOpen = ref<Boolean>(false);
const ischildCommnet = ref<Boolean>(false)

function onSubmit() {
  if (props.data?.comment_child.length) {
    isFocus.value = !isFocus.value
  } else {
    isChildTextOpen.value = !isChildTextOpen.value
  }
  // console.log(props.data?.comment_child)

}

const emit = defineEmits(['itemCommnetChildAdd', 'childIsOpen'])

function childonSubmit(item: number) {
  emit('childIsOpen', props.index, item)
}

function childCommnetAdd(item: any) {
  console.log(item, props.index)
  emit('itemCommnetChildAdd', item)
  ischildCommnet.value = false;
  isChildTextOpen.value = false;
}
</script>

<style scoped>

</style>
