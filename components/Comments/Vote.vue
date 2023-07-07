<template>
  <div class="flex gap-2 item-center group">
    <button @click="Disliked" class="opacity-0 rounded-full group-hover:opacity-100 cursor-pointer transition-200 p-1"
            :class="{'hover:bg-[#FDE6E4]':num < 0, 'hover:bg-[#f2f2f6]': num>=0}"
    >
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
            :style="{'stroke': num < 0 ? '#EB2B1E' : '#8A939A'}"
            stroke-linejoin="round"
        />
      </svg>
    </button>
    <span
        class="w-[18px] rounded h-5 text-center item-center count-n mt-1.5 transition-200"
        :class="{'bg-[#FDE6E4] text-[#EB2B1E]': num<0,'bg-[#EAF5EA] text-[#4CAF50]':num>0, ' text-[#8a939a] bg-[#f2f2f6]':num===0}"
    >{{ num }}</span>
    <button @click="liked"
            class="rounded-full cursor-pointer transition-200 p-1 opacity-0 rounded-full group-hover:opacity-100"
            :class="{'hover:bg-[#f2f2f6]':num<=0, 'hover:bg-[#EAF5EA]':num>0}">
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
            :style="{'stroke': num > 0 ? '#4CAF50' : '#8A939A'}"
            stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>
<script setup lang="ts">
interface Props {
  count: Number
}
defineProps<Props>()
const num = ref<number>(0)

function liked() {
  num.value++;
}

function Disliked() {
  num.value--;
}
</script>
<style scoped>
.count-n {
  transition: all 0.4s ease;
}
</style>
