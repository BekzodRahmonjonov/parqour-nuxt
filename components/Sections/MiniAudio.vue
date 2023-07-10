<template>
  <div class="fixed left-0 bottom-0 player-bg-img h-[88px] z-50 w-full">
    <div class="player-bg absolute left-0 top-0 h-full w-full">
      <div class="flex items-center container h-full gap-5">
        <CommonPlayerControllers />
        <div class="flex items-center gap-3 max-w-[824px] w-full">
          <img
            v-if="!audioStore.isPlaying"
            class="cursor-pointer w-8 h-8"
            src="/podcast/play-btn.svg"
            alt=""
            @click="audioStore.playAudio()"
          />
          <svg
            v-else
            class="w-10 h-8 fill-white cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            @click="audioStore.pauseAudio()"
          >
            <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
          </svg>
          <span class="text-white text-[13px] leading-120">
            {{ audioStore.getCurrentTime }}
          </span>
          <input
            type="range"
            :value="audioStore.getSeekSliderValue"
            ref="seekSlider"
            min="1"
            max="100"
            class="h-1 w-full rounded-sm appearance-none cursor-pointer transition-300"
            @input="onInput"
            @change="onChange"
          />
          <span class="text-white text-[13px] leading-120">
            {{ audioStore.getTotalDuration }}
          </span>
        </div>

        <div class="flex items-center gap-2">
          <span class="icon-volume text-white text-32"></span>
          <input
            id="default-range"
            ref="volume"
            type="range"
            :value="audioStore.getVolume"
            min="1"
            max="100"
            class="h-1 w-full volume rounded-sm appearance-none cursor-pointer transition-300"
            @input="onInputVolume"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAudioStore } from '~/store/audio'

const audioStore = useAudioStore()
const seekSlider = ref(null)
const volume = ref(null)
console.log(audioStore.progress)

const onInput = (e: Event) => {
  audioStore.onInputSeekSlider(e)
}

const onChange = (e: Event) => {
  console.log('CHANGED')

  // audioStore.onChangeSeekSlider(e)
}

const onInputVolume = (e: Event) => {
  audioStore.onInputVolume(e)
}

onMounted(() => {
  const bg = computed(() => audioStore.progress)
  const volumeBg = computed(() => audioStore.volumeColor)
  watch(bg, () => {
    seekSlider.value.style.background = bg.value
  })

  watch(volumeBg, () => {
    volume.value.style.background = volumeBg.value
  })
})
</script>

<style scoped>
input[type='range'] {
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  background: #e6e6e6;
}

/* Thumb: webkit */
input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  visibility: hidden;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #52618f;
  border: 2px solid #fff;
  cursor: pointer;
  opacity: 0;
  transition: 0.2s all ease;
}

input[type='range']:hover::-webkit-slider-thumb {
  visibility: visible;
  opacity: 1;
}

input[type='range'].volume::-webkit-slider-thumb {
  width: 15px;
  height: 15px;
}

input[type='range'].volum::-webkit-slider-thumb {
  width: 15px;
  height: 15px;
}

/* Thumb: Firefox */
input[type='range']::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #52618f;
  border: 2px solid #fff;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.player-bg {
  background: rgba(27, 27, 27, 0.7);
  backdrop-filter: blur(12.5px);
}

.player-bg-img {
  background-image: url(/podcast/p-bg.png);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
