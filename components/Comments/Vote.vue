<template>
  <div class="flex gap-2 item-center">
   <button>
     <svg
       width="24"
       height="24"
       viewBox="0 0 24 24"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
   >
     <path
         d="M6 9L12 15L18 9"
         stroke="#8A939A"
         stroke-width="2"
         stroke-linecap="round"
         stroke-linejoin="round"
     />
   </svg>
   </button>
    <span class="w-[18px] rounded bg-[#FDE6E4] h-[20px] text-[#EB2B1E] text-center item-center">{{ count }}</span>
 <button>
   <svg
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     xmlns="http://www.w3.org/2000/svg"
 >
   <path
       d="M18 15L12 9L6 15"
       stroke="#8A939A"
       stroke-width="2"
       stroke-linecap="round"
       stroke-linejoin="round"
   />
 </svg>
 </button>
  </div>
</template>
<script setup lang="ts">
const color_left ='red'
const color_right ='blue'
interface Props {
  count: Number
}
defineProps<Props>()
</script>
<style>
</style>
