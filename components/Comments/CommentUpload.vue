<template>
  <div>
    <div class="flex justify-between items-center" v-if="!isChild">
      <h4 class="text-xl leading-130 font-bold text-blue-700">Comments</h4>
        <div>
          <i
              class="icon-filter text-lg text-blue-600 cursor-pointer"
              @click="toggleText"
          ></i>
          <div v-if="showText" class="absolute">hello mother father</div>
        </div>
    </div>
    <div class="relative mt-4 duration-700" :class="{'border border-[#E5E7EE] p-4 rounded':isFocus}">
    <div class="relative rounded p-4">
      <textarea
          placeholder="Комментарии..."
          class="relative px-3 rounded w-full focus:outline-none"
          :class="{'bg-blue-200/10': !isFocus, 'border border-red-400': isCommentEmpty}"
          v-model="comment"
          @focus="InputFocus"
          @blur="InputBlur"
      >
      </textarea>

      <span v-if="!isFocus">
        <i
          class="icon-gallery absolute top-7 right-5 text-blue-200 !cursor-pointer"
      ></i>
      <input
          class="absolute top-3.5 right-2.5 opacity-0 w-4 h-4 !cursor-pointer"
          type="file"
          @change="onFileChanged"
      /></span>

      <div class="flex gap-1.5 transition duration-700 ease-in-out" v-if="isFocus">
        <div class="relative w-13 h-13" v-for="(item, ind) in images" :key="ind">
          <span @click="itemImageRemove(ind)"
                class="absolute rounded-full -top-2 -right-2 cursor-pointer bg-blue-600 w-5 h-5 text-center item-center">
            <i class="icon-close text-white text-xs" @mousedown.prevent></i></span>
          <img width="52" height="52" class="rounded w-13 h-13 " :src="item" alt="">
        </div>
      </div>
      <div class="flex justify-between" v-if="isFocus">
        <div class="mt-2 mb-4 cursor-pointer">
          <i

              class="absolute icon-gallery text-blue-200 cursor-pointer"
          ></i>
          <input
              @mousedown.prevent
              class="absolute  opacity-0 w-4 h-4 cursor-pointer"
              type="file"
              @change="onFileChanged"
          />
        </div>
        <div class="w-1/2 gap-2 flex justify-end">
          <button @click="cancel" @mousedown.prevent class="cursor-pointer rounded px-3 py-1.5 hover:bg-red-600 hover:text-white duration-700">
            Отменить
          </button>
          <button @mousedown.prevent
                  @click="onSubmit"
                  class="rounded bg-[#48A4E3] hover:bg-cyan-300 text-white px-3 py-1.5 cursor-pointer duration-700">Отправить
          </button>
        </div>
      </div>
      <!--      <div class="flex" v-for="(item, ind) in images" :key="ind">-->
      <!--        <img :src="img" alt="this at images">-->
      <!--      </div>-->
<!--      <div class="flex">-->
<!--        <span class="relative w-13 h-13">-->
<!--          <span-->
<!--            class="absolute rounded-full -top-2 -right-2 cursor-pointer bg-slate-700 w-5 h-5 text-center"-->
<!--            ><i class="icon-close text-white"></i-->
<!--          ></span>-->
<!--          <img height="54" width="54" class="rounded" :src="img" alt="" />-->
<!--        </span>-->
<!--      </div>-->
<!--      <div class="relative mt-2">-->
<!--        <i class="absolute icon-gallery text-blue-200 !cursor-pointer"></i>-->
<!--        <input-->
<!--          class="absolute opacity-0 w-4 h-4 !cursor-pointer"-->
<!--          type="file"-->
<!--          @change="onFileChanged"-->
<!--        />-->
<!--      </div>-->
    </div>
    </div>
  </div>
</template>

<!--
image upload qilganda chqiadigan textni designi chizilmagan ekan faqat shu case qoldi
va filter chiuzilmagan qanaqa content chiqishi ?
-->

<script setup lang="ts">
import img from '~/assets/images/comment.jpg'
interface Props {
  isChild?: Boolean
}
const emit = defineEmits(['ItemCommnetAdd'])
defineProps<Props>()
const comment = ref<String>('')
const isCommentEmpty = ref<Boolean>(false)
const showText = ref(false)
const isFocus = ref<Boolean>(false)
const images = ref<File[]>([]);
const image = ref<File | null>(null)
const toggleText = () => {
  showText.value = !showText.value
}
// function onFileChanged(event: Event) {
//   const fileInput = event.target as HTMLInputElement
//   const files = fileInput.files
//   const fileReader = new FileReader();
//   if (files && files.length > 0) {
//     image.value = files[0];
//     fileReader.onload = function (event:any) {
//       images.value.push(event.target.result)
//     };
//     fileReader.readAsDataURL(image.value);
// const images = ref<File[]>([])
// const image = ref<File | null>(null)

function onFileChanged(event: Event) {
  const fileInput = event.target as HTMLInputElement
  const files = fileInput.files
  console.log(files)
  const fileReader = new FileReader()
  if (files && files.length > 0) {
    image.value = files[0]
    fileReader.onload = function (event) {
      images.value.push(event.target.result)
    }
    fileReader.readAsDataURL(image.value)
  } else {
    image.value = null
  }
}
function itemImageRemove(index: number) {
  images.value = images.value.filter((el, ind) => ind !== index)
}
function InputFocus(event: Event) {
  isFocus.value = true;
  isCommentEmpty.value = false
}
function InputBlur(event: Event) {
  isFocus.value = false;
  isCommentEmpty.value = false
}
function onSubmit () {
  let _data  = {
    last_name: 'Eljahon',
    first_name: "Normo'minov",
    comment_text: comment.value,
    user_img:img,
    images,
    time: "30 минут назад",
  }
  if(comment.value) {
  emit('ItemCommnetAdd', _data)
    comment.value = ''
  } else {
    isCommentEmpty.value = true
  }
}
function cancel () {
  isCommentEmpty.value = false
}
</script>
