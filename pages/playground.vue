<template>
  <div class="relative player-bg-img h-[298px]">
    <div class="player-bg absolute left-0 top-0 h-full w-full">
      <div class="container flex gap-8 py-8">
        <img
          src="/podcast/author.png"
          alt=""
          class="h-[234px] w-[234px] rounded"
        />
        <div class="flex-1">
          <h1 class="text-3xl font-semibold">
            Дело Азата Мифтахова: Как в России шьют дела против анархистов
          </h1>

          <ul class="mt-12 flex items-center">
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>

          <div class="mt-6 flex items-center">
            <img
              v-if="!isPlaying"
              @click="playpauseTrack"
              src="/podcast/play-btn.svg"
              alt=""
            />
            <svg
              @click="playpauseTrack"
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
            </svg>
            {{ currentTime }}
            <input
              id="default-range"
              type="range"
              value="0"
              min="1"
              max="100"
              ref="seekSlider"
              @change="seekTo"
              class="w-[80%] h-2 bg-[#E6E6E6] rounded-lg appearance-none cursor-pointer"
            />
            {{ totalDuration }}
            <input
              id="default-range"
              type="range"
              min="1"
              max="100"
              value="99"
              ref="volume"
              @change="setVolume"
              class="w-[20%] h-2 bg-[#E6E6E6] rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let track_list = [
  {
    name: 'Night Owl',
    artist: 'Broke For Free',
    image:
      'https://images.pexels.com/photos/2264753/pexels-photo-2264753.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250',
    path: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3',
  },
]
const currentTime = ref('00:00')
const totalDuration = ref('00:00')
const seekSlider = ref(null)
const isPlaying = ref(false)
const volume = ref(null)
let trackIndex = 0
let updateTimer
let currentTrack = {} as HTMLAudioElement

onMounted(() => {
  currentTrack = document.createElement('audio')
  loadTrack(trackIndex)
})

function loadTrack(trackIndex: number) {
  currentTrack.src = track_list[trackIndex].path
  currentTrack.load()

  setInterval(seekUpdate, 1000)
}

function resetValues() {
  currentTime.value = '00:00'
  totalDuration.value = '00:00'
}

function playpauseTrack() {
  if (!isPlaying.value) playTrack()
  else pauseTrack()
}

function playTrack() {
  currentTrack.play()
  isPlaying.value = true
}

function pauseTrack() {
  currentTrack.pause()
  isPlaying.value = false
}

function setVolume() {
  console.log(volume.value.value)
  currentTrack.volume = volume.value.value / 100
}

function seekUpdate() {
  let seekPosition = 0

  if (!isNaN(currentTrack.duration)) {
    seekPosition = currentTrack.currentTime * (100 / currentTrack.duration)
    seekSlider.value.value = seekPosition

    // Calculate the time left and the total duration
    let currentMinutes: string | number = Math.floor(
      currentTrack.currentTime / 60
    )
    let currentSeconds: string | number = Math.floor(
      currentTrack.currentTime - currentMinutes * 60
    )
    let durationMinutes: string | number = Math.floor(
      currentTrack.duration / 60
    )
    let durationSeconds: string | number = Math.floor(
      currentTrack.duration - durationMinutes * 60
    )

    // Adding a zero to the single digit time values
    if (currentSeconds < 10) {
      currentSeconds = '0' + currentSeconds
    }
    if (durationSeconds < 10) {
      durationSeconds = '0' + durationSeconds
    }
    if (currentMinutes < 10) {
      currentMinutes = '0' + currentMinutes
    }
    if (durationMinutes < 10) {
      durationMinutes = '0' + durationMinutes
    }

    currentTime.value = currentMinutes + ':' + currentSeconds
    totalDuration.value = durationMinutes + ':' + durationSeconds
  }
}

function seekTo() {
  const seekTo = currentTrack.duration * (seekSlider.value.value / 100)
  currentTrack.currentTime = seekTo
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
</style>
