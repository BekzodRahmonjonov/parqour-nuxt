<template>
  <div
    class="relative player-bg-img h-[298px]"
    :class="{
      '!fixed left-0 bottom-0 right-0 h-[88px] transition-all duration-300 z-20':
        fixed,
    }"
  >
    <div class="player-bg absolute left-0 top-0 h-full w-full">
      <div class="container flex gap-8 py-8">
        <img
          v-if="!fixed"
          src="/podcast/author.png"
          alt=""
          class="h-[234px] w-[234px] rounded border border-white"
        />

        <div class="flex-1" :class="{ 'flex items-center gap-6': fixed }">
          <h1
            v-if="!fixed"
            class="text-32 font-semibold text-white leading-140"
          >
            Дело Азата Мифтахова: Как в России шьют дела против анархистов
          </h1>

          <ul class="mt-12 flex items-center gap-4" :class="{ '!mt-0': fixed }">
            <li
              v-for="(item, i) in playerActions"
              :key="i"
              :class="item.icon"
              class="p-2 rounded-md text-white bg-[#0000004d] text-2xl cursor-pointer transition-300 ease-out hover:text-opacity-50"
              @click="onClick(item.handler)"
            ></li>
          </ul>

          <div
            class="mt-6 flex items-center"
            :class="{ 'w-full !mt-0': fixed }"
          >
            <img
              v-if="!isPlaying"
              class="cursor-pointer w-8 h-8"
              src="/podcast/play-btn.svg"
              alt=""
              @click="playpauseTrack"
            />
            <svg
              v-else
              class="w-10 h-8 fill-white cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              @click="playpauseTrack"
            >
              <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
            </svg>
            <span class="text-white text-[13px] uppercase ml-2 mr-3">
              {{ currentTime }}
            </span>

            <input
              id="default-range"
              ref="seekSlider"
              type="range"
              value="0"
              min="1"
              max="100"
              class="w-[90%] h-1 rounded-sm appearance-none cursor-pointer transition-300"
              @input="onUpdate"
            />
            <span class="text-white text-[13px] uppercase ml-3 mr-6">
              {{ totalDuration }}
            </span>
            <span
              v-if="!isMuted"
              @click="mute"
              class="icon-volume text-white text-32 mr-2 w-10 cursor-pointer"
            ></span>
            <span v-else class="icon-icon-muted text-2xl w-10 mr-2"></span>
            <input
              id="default-range"
              ref="volume"
              type="range"
              min="1"
              max="100"
              value="50"
              class="w-[10%] h-1 rounded-sm appearance-none cursor-pointer volum"
              @input="setVolume"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const currentTime = ref('00:00')
const totalDuration = ref('00:00')
const seekSlider = ref({} as HTMLInputElement)
const isPlaying = ref(false)
const volume = ref(null)
const isMuted = ref(false)
let music = {} as HTMLAudioElement
const normalSpeed = ref(true)

interface Props {
  fixed?: boolean
}

defineProps<Props>()

const updateColorTracker = (progress: number, element: HTMLInputElement) => {
  element.style.background = `linear-gradient(to right, #52618F ${progress}%, #E6E6E6 ${progress}%)`
  element.style.transition = '0.3s ease-in-out'
}

const calculateProgress = () => {
  return (music.currentTime / music.duration) * 100
}

const onUpdate = (e: Event) => {
  music.currentTime = (e.target.value / 100) * music.duration
  updateColorTracker(calculateProgress(), seekSlider.value)
}

const onTimeupdate = () => {
  const progress = (music.currentTime / music.duration) * 100
  updateColorTracker(calculateProgress(), seekSlider.value)

  seekSlider.value.value = '' + (music.currentTime / music.duration) * 100
  const formattedTime = formatTime(music.currentTime)
  currentTime.value = formattedTime
}

const onLoadedmetadata = () => {
  totalDuration.value = formatTime(music.duration)
}

onMounted(() => {
  const precent = (volume.value.value / volume.value.max) * 100
  updateColorTracker(precent, volume.value)

  music = new Audio(
    'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3'
  )

  music.addEventListener('loadedmetadata', onLoadedmetadata)
  music.addEventListener('timeupdate', onTimeupdate)
})

onBeforeUnmount(() => {
  music.removeEventListener('loadedmetadata', onLoadedmetadata)
  music.removeEventListener('timeupdate', onTimeupdate)
})

function formatTime(time: number) {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)

  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds

  return formattedMinutes + ':' + formattedSeconds
}

const playerActions = [
  {
    icon: 'icon-multiplier-1x',
    handler: makeFaster,
  },
  {
    icon: 'icon-time-back',
    handler: back,
  },
  {
    icon: 'icon-time-forvard',
    handler: forwardAudio,
  },
  {
    icon: 'icon-download-stroke',
    handler: download,
  },
]

function makeFaster() {
  if (normalSpeed) {
    music.playbackRate = 1.0
  } else {
    music.playbackRate = 2.0
  }
}
function back() {
  music.currentTime -= 15
}

function forwardAudio() {
  music.currentTime += 15
}
function download() {}

const onClick = (handler: () => {}) => {
  handler()
}

function playpauseTrack() {
  if (!isPlaying.value) playTrack()
  else pauseTrack()
}

function mute() {
  isMuted.value = true
  music.volume = 0
  volume.value.value = 0
  const precent = (volume.value.value / volume.value.max) * 100
  updateColorTracker(precent, volume.value)
}

function playTrack() {
  music.play()
  isPlaying.value = true
}

function pauseTrack() {
  music.pause()
  isPlaying.value = false
}

function setVolume(e) {
  isMuted.value = false
  music.volume = volume.value.value / 100
  const precent = (e.target.value / e.target.max) * 100
  updateColorTracker(precent, volume.value)
}
</script>

<style scoped>
.player-bg-img {
  background-image: url(/podcast/p-bg.png);
  background-repeat: no-repeat;
  background-size: cover;
}

.player-bg {
  background: rgba(27, 27, 27, 0.7);
  backdrop-filter: blur(12.5px);
}

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
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #52618f;
  border: 2px solid #fff;
  cursor: pointer;
  transition: 0.2s ease-in-out;
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
</style>
