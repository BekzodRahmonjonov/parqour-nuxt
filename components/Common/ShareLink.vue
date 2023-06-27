<template>
  <div class="flex-y-center gap-3">
    <p>{{ $t('share') }}:</p>
    <div class="flex-y-center gap-4">
      <div
        v-for="(item, idx) in socialShareData"
        :key="idx"
        v-tooltip="item.name"
        class="border border-gray-100 rounded-full w-[50px] h-[48px] flex-center bg-white transition-200 hover:bg-blue-600 hover:border-blue-600 group cursor-pointer"
        @click="share(item.icon, 'Share Component')"
      >
        <i
          class="text-2xl opacity-50 group-hover:text-white group-hover:opacity-100 transition-200"
          :class="`icon-${item.icon}`"
        ></i>
      </div>
      <CopyUrl />
    </div>
    <button
      class="ml-auto py-2 px-4 border border-gray-300 rounded-[2px] text-gray-200 font-medium leading-140 hover:bg-blue-600 hover:border-blue-600 transition-200 hover:text-white"
      @click="onClick"
    >
      {{ $t('write_to_us') }}
    </button>
  </div>
</template>

<script setup lang="ts">
import CopyUrl from '~/components/Common/CopyUrl.vue'
import { socialShareData } from '~/data'
import { share } from '~/utils'

interface Emits {
  (e: 'click'): void
}

const emit = defineEmits<Emits>()

const onClick = () => {
  emit('click')
}
</script>
