<template>
  <div class="container w-full">
    <button
      class="left-0 border border-solid border-blue-100 mb-3 rounded-lg w-full z-[12] px-4 py-2.5 flex lg:hidden justify-between gap-4 transition-200 dark:bg-blue-100/[16%] dark:border-transparent"
      :class="{ 'bg-blue-200 ': isOpen }"
      @click="isOpen = !isOpen"
    >
      <div class="flex-y-center gap-2">
        <i class="icon-bell text-blue-100 text-2xl" />
        <p
          class="text-base leading-130 font-medium text-blue-200 transition-200 dark:text-blue-100"
          :class="{ '!text-blue-100': isOpen }"
        >
          {{ $t('lenta_news') }}
        </p>
      </div>
      <i
        class="icon-double text-blue-100 text-2xl transition-200"
        :class="{ 'rotate-180': isOpen }"
      />
    </button>
    <button
      class="absolute top-[268px] left-0 border group border-solid border-blue-100 hover:border-blue-200 dark:hover:border-blue-100 rounded-r-lg z-[12] border-l-[0px] p-4 hidden lg:flex flex-col gap-4 transition-200 bg-white dark:bg-blue-100/[16%] dark:border-transparent"
      :class="{ 'bg-blue-200 ': isOpen }"
      @click="isOpen = !isOpen"
    >
      <i
        class="icon-bell text-blue-100 text-2xl transition-200 group-hover:text-blue-200 dark:group-hover:text-blue-100"
      />
      <p
        class="text-base leading-130 font-medium text-blue-200 vertical-text transition-200 dark:text-blue-100"
        :class="{ '!text-blue-100': isOpen }"
      >
        {{ $t('lenta_news') }}
      </p>
      <i
        class="icon-double text-blue-100 text-2xl transition-200"
        :class="{ 'rotate-180': isOpen }"
      />
    </button>
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="absolute right-0 top-[170px] lg:top-[282px] z-[12] w-full"
      >
        <div class="container w-full">
          <button
            class="flex-center w-8 md:w-12 h-8 md:h-12 rounded-full bg-blue-900 ml-auto hover:bg-blue-200 transition-200 group active:scale-95"
            @click="isOpen = false"
          >
            <i class="icon-close text-white text-lg md:text-[32px]" />
          </button>
        </div>
      </div>
    </Transition>
    <Transition name="fade">
      <button
        v-if="isOpen"
        class="flex-center w-12 h-12 bg-[#F0F4FA] dark:bg-opacity-10 hover:hover:bg-blue-200 transition-200 group -rotate-90 rounded-full absolute z-[12] bottom-16 right-8 active:scale-95"
        @click="toTop"
      >
        <i
          class="icon-arrow-right text-blue-100 group-hover:text-white transition-200 text-xl"
        />
      </button>
    </Transition>
    <Transition name="fade">
      <div
        v-if="isOpen"
        id="news-content"
        class="fixed inset-0 bg-white z-[31] h-screen overflow-y-scroll transition-200 pt-16 md:pt-[150px] dark:bg-blue-700"
      >
        <div class="w-full max-w-[990px] mx-auto px-4 pt-4">
          <div>
            <div class="flex-center w-full">
              <CommonDate :date="new Date()" />
            </div>

            <div class="w-full flex flex-col gap-8 mt-8">
              <CardsLatest
                v-for="(card, index) in arrNews"
                :key="index"
                v-bind="{ card }"
                class="last:border-b-[0px]"
              />

              <Transition name="fade">
                <div v-if="loading" class="flex-center py-10">
                  <div class="dots" />
                </div>
              </Transition>
              <div v-if="isNotMore" ref="target" />
              <div
                v-if="!isNotMore && !loading && !isNextMonth"
                class="flex-center pb-6"
              >
                <CommonButton
                  icon
                  variant="secondary"
                  :text="$t('fetch_next_month')"
                  @click="nextMonth"
                >
                  <template #icon>
                    <i
                      class="icon-double text-blue-900 rotate-90 mr-1 dark:text-white transition-200"
                    />
                  </template>
                </CommonButton>
              </div>
            </div>

            <button
              class="absolute top-[268px] right-0 border group border-solid border-blue-100 hover:border-blue-200 dark:hover:border-blue-100 rounded-l-lg z-[12] border-r-[0px] p-4 hidden lg:flex flex-col gap-4 transition-200 bg-white dark:bg-blue-100/[16%] dark:border-transparent"
              :class="{ 'bg-blue-200 ': isOpen }"
              @click="isOpen = !isOpen"
            >
              <i
                class="icon-bell text-blue-200 text-2xl transition-200 group-hover:text-blue-200 dark:group-hover:text-blue-100"
              />
              <p
                class="text-base leading-130 font-medium text-blue-200 group-hover:text-blue-200 vertical-text transition-200 dark:text-blue-100"
              >
                {{ $t('lenta_close') }}
              </p>
              <i
                class="icon-close text-blue-200 group-hover:text-blue-200 dark:group-hover:text-blue-100 text-2xl transition-200"
                :class="{ 'rotate-180': isOpen }"
              />
            </button>

            <div v-if="isNextMonth" class="mt-8">
              <div class="flex-center w-full">
                <CommonDate :date="new Date()" />
              </div>
              <div class="w-full flex flex-col gap-8">
                <CardsLatest
                  v-for="(card, index) in arrNews"
                  :key="index"
                  v-bind="{ card }"
                  class="last:border-b-[0px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { latestData } from '~/data'

const arrNews = ref([...latestData])

const isOpen = ref(false)
const loading = ref(false)
const isNotMore = ref(true)
const isNextMonth = ref(false)

watch(
  () => isOpen.value,
  () => {
    const body = document.body
    if (isOpen.value) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = 'auto'
    }
  }
)

function toTop() {
  const element = document.querySelector('#news-content') as HTMLDivElement
  element.scroll({ top: 0, behavior: 'smooth' })
}

const target = ref(null)
const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      loadMore()
    }
  }
)

function loadMore() {
  loading.value = true
  setTimeout(() => {
    arrNews.value = [...arrNews.value, ...latestData]
    isNotMore.value = false
    loading.value = false
  }, 1000)
}

function nextMonth() {
  loading.value = true
  setTimeout(() => {
    isNextMonth.value = true
    loading.value = false
  }, 1000)
}
</script>

<style scoped>
.vertical-text {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

.dots {
  width: 40px;
  height: 19.2px;
  background: radial-gradient(circle closest-side, #a2bcde 90%, #0000) 0% 50%,
    radial-gradient(circle closest-side, #a2bcde 90%, #0000) 50% 50%,
    radial-gradient(circle closest-side, #a2bcde 90%, #0000) 100% 50%;
  background-size: calc(100% / 3) 9.6px;
  background-repeat: no-repeat;
  animation: dots-7ar3yq 1s infinite linear;
}

@keyframes dots-7ar3yq {
  20% {
    background-position: 0% 0%, 50% 50%, 100% 50%;
  }

  40% {
    background-position: 0% 100%, 50% 0%, 100% 50%;
  }

  60% {
    background-position: 0% 50%, 50% 100%, 100% 0%;
  }

  80% {
    background-position: 0% 50%, 50% 50%, 100% 100%;
  }
}
</style>
