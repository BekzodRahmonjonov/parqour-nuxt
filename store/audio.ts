import { defineStore } from 'pinia'

function calculateProgress(audioCurrentTime: number, audioTotalTime: number) {
  return (audioCurrentTime / audioTotalTime) * 100
}

function formatTime(time: number) {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)

  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds

  return formattedMinutes + ':' + formattedSeconds
}

export const useAudioStore = defineStore('audio', {
  state: () => ({
    isAudioFixed: false,
    currentTime: '00:00',
    totalDuration: '00:00',
    seekSliderVal: '0',
    isPlaying: false,
    progress: 'linear-gradient(to right, #52618F 0%, #E6E6E6 0%)',
    volumeColor: 'linear-gradient(to right, #52618F 0%, #E6E6E6 0%)',
    volume: '50',
    isMuted: false,
    normalSpeed: true,
    audio: {} as HTMLAudioElement,
  }),

  actions: {
    makeFixed() {
      this.$state.isAudioFixed = true
    },
    makeUnfixed() {
      this.$state.isAudioFixed = false
    },

    trackSeekSliderValue(val: string) {
      this.seekSliderVal = val
    },

    setCurrentTime(time: string) {
      this.currentTime = time
    },

    setTotalDuration(time: string) {
      this.totalDuration = time
    },

    initiateAudio() {
      this.audio = new Audio(
        'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3'
      )

      this.audio.addEventListener('loadedmetadata', this.onLoadedmetadata)
      this.audio.addEventListener('timeupdate', this.onTimeupdate)
    },

    onLoadedmetadata() {
      this.updateColorTrackerVolume((+this.volume / 100) * 100)
      this.totalDuration = formatTime(this.audio.duration)
    },

    onTimeupdate() {
      this.updateColorTracker()

      this.seekSliderVal =
        '' + calculateProgress(this.audio.currentTime, this.audio.duration)
      this.currentTime = formatTime(this.audio.currentTime)
    },

    updateColorTracker() {
      this.progress = `linear-gradient(to right, #52618F ${calculateProgress(
        this.audio.currentTime,
        this.audio.duration
      )}%, #E6E6E6 ${calculateProgress(
        this.audio.currentTime,
        this.audio.duration
      )}%)`
    },

    updateColorTrackerVolume(precent: number) {
      this.volumeColor = `linear-gradient(to right, #52618F ${precent}%, #E6E6E6 ${precent}%)`
    },

    onInputSeekSlider(e: Event) {
      // const formatted = formatTime((e.target.value / 100) * this.audio.duration)
      // this.currentTime = formatted
      this.audio.currentTime = (e.target.value / 100) * this.audio.duration
      this.updateColorTracker()
    },

    onChangeSeekSlider(e) {
      this.audio.currentTime = (e.target.value / 100) * this.audio.duration
    },

    onInputVolume(e: Event) {
      this.audio.volume = e.target.value / 100
      const precent = (e.target.value / e.target.max) * 100
      this.volume = '' + precent

      this.updateColorTrackerVolume(precent)
    },

    setAudioTag(el: HTMLAudioElement) {
      this.audio = el
    },

    pauseAudio() {
      this.audio.pause()
      this.isPlaying = false
    },

    playAudio() {
      this.audio.play()
      this.isPlaying = true
    },

    forward() {
      this.audio.currentTime += 15
    },

    backward() {
      this.audio.currentTime -= 15
    },

    makeFaster() {
      // music.playbackRate = 1.0
      this.audio.playbackRate = 2.0
    },
  },

  getters: {
    getCurrentTime(): string {
      return this.currentTime
    },

    getTotalDuration(): string {
      return this.totalDuration
    },

    getSeekSliderValue(): string {
      return this.seekSliderVal
    },

    getProgress(): string {
      return this.progress
    },

    getVolume(): string {
      return this.volume
    },

    // getProgress(): number {
    //   if (this.audio) {
    //     console.log(this.audio.duration)
    //     // const progress = (this.audio.currentTime / this.audio.duration) * 100
    //     console.log(progress, 'audio')
    //     return progress
    //   }
    // },
  },
})
