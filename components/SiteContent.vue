<template>
  <div
    v-if="!route.path.includes('solutions')"
    @click="openVideo"
    :class="{ active: isOpenVideo }"
    class="filter"
  ></div>
  <div v-if="!route.path.includes('solutions')" class="partners container">
    <Swiper
      :modules="[SwiperAutoplay, SwiperNavigation]"
      :slides-per-view="4"
      :effect="'creative'"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
    >
      <SwiperSlide v-for="(item, index) in partners" :key="index">
        <img :src="imgUrl + item.logo.url" alt="company" />
      </SwiperSlide>
    </Swiper>
  </div>

  <section v-if="!route.path.includes('solutions')" class="video">
    <h1 class="video-title">
      {{ $t('meet-the-solution-title') }}
    </h1>
    <div class="video-box">
      <img src="../assets/image/video-image.jpg" alt="video imaage" />
      <a @click="openVideo" class="video-btn">
        <img draggable="false" src="../assets/image/play-btn.png" alt="play" />
      </a>
    </div>
    <div :class="{ active: isOpenVideo }" class="video__item">
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/ccqqaSQm6dc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </section>

  <section v-if="!route.path.includes('solutions')" class="whyus container">
    <div class="whyus__left">
      <h2 class="whyus__left-title">Why Parqour?</h2>
      <div class="whyus__left-texts">
        <p>{{ $t('why-parqour-text-1') }}</p>
        <p>{{ $t('why-parqour-text-2') }}</p>
        <p>{{ $t('why-parqour-text-3') }}</p>
      </div>
      <ul class="whyus__facts">
        <li class="whyus__facts-item">{{ $t('why-parqour-text-4') }}</li>
        <li class="whyus__facts-item">
          {{ $t('why-parqour-text-5') }}
          <p>{{ $t('why-parqour-text-5-sub') }}</p>
        </li>
        <div class="whyus__facts-item">
          {{ $t('why-parqour-text-6') }}
          <p>{{ $t('why-parqour-text-6-sub') }}</p>
        </div>
        <div class="whyus__facts-item">
          {{ $t('why-parqour-text-7') }}
          <p>{{ $t('why-parqour-text-7-sub') }}</p>
        </div>
        <div class="whyus__facts-item">
          {{ $t('why-parqour-text-8') }}
        </div>
        <div class="whyus__facts-item">
          {{ $t('why-parqour-text-9') }}
        </div>
        <div class="whyus__facts-item">
          {{ $t('why-parqour-text-10') }}
          <p>{{ $t('why-parqour-text-10-sub') }}</p>
        </div>
      </ul>
    </div>
    <div class="whyus__right">
      <h1 class="whyus__right-title">{{ $t('how-does-it-work') }}</h1>
      <h4 class="whyus__right-subtitle">
        {{ $t('how-does-it-work-text') }}
      </h4>
      <ul class="whyus__list">
        <li class="whyus__list-item">
          <h3 class="whyus__list-title">
            {{ $t('how-does-it-work-title') }}
          </h3>
          <p class="whyus__list-text">
            {{ $t('how-does-it-work-title-sub') }}
          </p>
        </li>
        <li class="whyus__list-item">
          <h3 class="whyus__list-title">
            {{ $t('how-does-it-work-title-1') }}
          </h3>
          <p class="whyus__list-text">
            {{ $t('how-does-it-work-title-1-sub') }}
          </p>
        </li>
        <li class="whyus__list-item">
          <h3 class="whyus__list-title">
            {{ $t('how-does-it-work-title-2') }}
          </h3>
          <p class="whyus__list-text">
            {{ $t('how-does-it-work-title-2-sub') }}
          </p>
        </li>
      </ul>
    </div>
  </section>

  <section v-if="!route.path.includes('solutions')" class="slider">
    <div class="container">
      <div class="slider__head">
        <div class="slider__head-img">
          <img src="../assets/icons/logo-icon.svg" alt="logo" />
        </div>
        <div class="slider__head-title">
          {{ $t('get-all-in-one-with-parqour') }}
        </div>
      </div>

      <div class="slider__content">
        <Swiper
          :modules="[SwiperAutoplay, SwiperNavigation]"
          :breakpoints="{
            400: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3,
            },
          }"
          :effect="'creative'"
          :spaceBetween="40"
          :navigation="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
        >
          <SwiperSlide v-for="(item, index) in adventages" :key="index">
            <div class="slider__content-item">
              <img
                class="slider__content-icon"
                :src="imgUrl + item.icon?.url"
                alt="slider icon"
              />
              <h3 class="slider__content-title">{{ item.title }}</h3>
              <p class="slider__content-text">{{ item.description }}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>

  <section
    v-if="route.path.includes('solutions')"
    class="half"
    :class="index % 2 != 0 ? 'right-side' : ''"
    v-for="(item, index) in solutions"
    :key="index"
  >
    <div
      class="half-bg"
      :style="{ 'background-image': `url(${imgUrl + item.image?.url})` }"
    ></div>
    <div class="container">
      <div class="half-wrapper">
        <div class="half__content" v-html="item.content"></div>
      </div>
    </div>
  </section>

  <!-- <section class="half right-side">
        <div class="half-bg second"></div>
        <div class="container">
            <div class="half-wrapper">
                <div class="half__content">
                    <h1 class="half__content-title">
                        Parqour for
                        gateless parking
                    </h1>
                    <p class="half__content-text">
                        <b> Entry </b> – The system automatically captures the license plate and starts the billing session. No tickets are needed.
                    </p>
                    <p class="half__content-text">
                        <b> Payment</b> – First-time visitors scan a QR code. A mobile web session starts, where they register by entering their license plate and choose a payment method (bank card, Apple Pay, Google Pay).
                    </p>
                    <p class="half__content-text">
                        <b> Exit</b>– Registered drivers are charged automatically for the duration of their stay.
                    </p>
                    <p class="half__content-message">Returning drivers can enter and exit seamlessly, the system charges them automatically on exit.</p>
                    <a href="mailto:hello@parqour.com">
                        <button class="half__content-btn btn-primary">
                            Learn More
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section class="half">
        <div class="half-bg third"></div>
        <div class="container">
            <div class="half-wrapper">
                <div class="half__content">
                    <h1 class="half__content-title">
                        Parqour for valet parking
                    </h1>
                    <p class="half__content-text">
                        <b>Entry</b> - A camera automatically captures the license plate. Easy driver registration and communications via SMS.
                    </p>
                    <p class="half__content-text">
                        <b>Payment</b> One-touch payment via a mobile web page (Apple Pay and Google Pay compatible) 
                    </p>
                    <p class="half__content-text">
                        <b>Exit</b> - The license plate is recorded and the session ends. 
                    </p>
                    <p class="half__content-message">Parqour makes financial flows transparent and enhances the control of operations from one platform.</p>
                    <a href="mailto:hello@parqour.com">
                        <button class="half__content-btn btn-primary">
                            Learn More
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section class="half right-side">
        <div class="half-bg fourth"></div>
        <div class="container">
            <div class="half-wrapper">
                <div class="half__content py">
                    <h1 class="half__content-title">
                        Parking validation and permit management
                    </h1>
                    <h4 class="half__content-message">Parking validation</h4>
                    <p class="half__content-text">
                        <b>Use cases:</b> parking validation for hotels, restaurants, shopping malls, fitness clubs, hospital visitors, etc.
                    <ul class="half__content-options green-square">
                        <li>
                            <p><b>Via a web-based dashboard:</b> Receptionists or administrators can validate the parking session by entering the license plate in the system. Access periods can be parameterized.</p>
                        </li>
                        <li>
                            <p><b>Using promo codes:</b> receptionists or administrators distribute promo codes, which guests can easily use after scanning a QR code.</p>
                        </li>
                    </ul>
                    </p>
                    
                    <div class="half__content-message">Permit management:</div>
                    <p class="half__content-text">
                        <b> Use cases:</b> employee and tenant parking, monthly permit management. 
                    </p>

                    <p class="half__content-text">
                        Parqour offers seamless access to authorized users and to drivers with a reservation made via third-party platforms. No need for hang tags, RFID cards or barcode scanning. 
                    </p>
                    <p class="half__content-text">
                        <b>Entry:</b> The system checks the license plate and permit status
                    </p>
                    <p class="half__content-text">
                        <b>Exit:</b> All entry and exit events are logged and displayed in a report 
                    </p>
                    <p class="half__content-text">Parqour integrates with all major reservation platforms (SpotHero, ParkMobile, Honk, PayByPhone etc.)</p>

                    <a href="mailto:hello@parqour.com">
                        <button class="half__content-btn btn-primary">
                            Learn More
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </section> -->
</template>

<script setup lang="ts">
import { ref, type Ref, onMounted } from 'vue'

// import { Swiper, SwiperSlide } from 'swiper/vue';
// import { Navigation, Autoplay } from 'swiper/vue/navigation';
// const modules = [Autoplay, Navigation];

import { useRoute } from 'vue-router'
import { useSolutios } from '@/store/solutions'
import { usePartners } from '@/store/partners'
import { useAdventages } from '@/store/adventages'
let { locale } = useI18n()
const route = useRoute()
const solutionsStore = useSolutios()
const partnersStore = usePartners()
const adventagesStore = useAdventages()
const imgUrl = import.meta.env.VITE_BASE_URL_IMG as string

interface Partner {
  createdAt: string
  id: number
  logo: {
    id: any
    name: any
    alternativeText: any
    caption: any
    width: any
    createdAt: any
    formats: any
    ext: any
    hash: any
    height: any
    mime: any
    previewUrl: any
    provider: any
    provider_metadata: any
    size: any
    updatedAt: any
    url: any
  }
  name: any
  updatedAt: any
}

interface Adventage {
  createdAt: any
  description: any
  icon: {
    alternativeText: any
    caption: any
    createdAt: any
    ext: any
    formats: any
    hash: any
    height: any
    id: any
    mime: any
    name: any
    previewUrl: any
    provider: any
    provider_metadata: any
    size: any
    updatedAt: any
    url: any
    width: any
  }
  id: any
  locale: any
  title: any
  updatedAt: any
}

interface SlotuinItem {
  content: string
  createdAt: string
  id: number
  image: {
    alternativeText: any
    caption: any
    createdAt: any
    ext: any
    formats: any
    hash: any
    height: any
    id: any
    mime: any
    name: any
    previewUrl: any
    provider: any
    provider_metadata: any // You can replace 'any' with a specific type if available
    size: any
    updatedAt: any
    url: any
    width: any
  }
  link: any
  locale: any
  order: any
  title: any
  updatedAt: any
}

const isOpenVideo = ref(false)
// let partners = ref([]) as Ref<Partner[]>
// let adventages = ref([]) as Ref<Adventage[]>

const openVideo = () => {
  isOpenVideo.value = !isOpenVideo.value
}

const solutions = computed(() => solutionsStore.Solutions)
const partners = computed(() => partnersStore.Partners)
const adventages = computed(() => adventagesStore.Adventages)
Promise.allSettled([
  solutionsStore.getSolutios({
    populate: 'image',
    sort: 'order:asc',
    locale: locale.value,
  }),
  partnersStore.getPartners({
    populate: 'logo',
    locale: locale.value,
  }),
  adventagesStore.getAdventages({
    populate: 'icon',
    locale: locale.value,
  }),
])
</script>

<style lang="scss" scoped>
.py {
  padding-top: 100px !important;
  padding-bottom: 100px !important;
}
@media screen and (max-width: 768px) {
  .py {
    padding-top: 60px !important;
    padding-bottom: 60px !important;
  }
}

.green-square {
  li {
    padding-left: 10px;
    &::before {
      content: '';
      display: flex;
      position: relative;
      width: 13px;
      height: 13px;
      background-color: #00ff91;
      left: -30px;
      top: 20px;
    }
  }
}

.filter {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: vh;
  z-index: 10;
  background: #000;
  opacity: 0;
  visibility: hidden;
  transition: 0.2s all;

  &.active {
    transition: 0.2s all;
    opacity: 0.5;
    visibility: visible;
  }
}

$white-text: #ffffff;
$raleway: 'Raleway', sans-serif;
$primary-color: #00ff91;
$light-text: #222222;

.partners {
  padding: 20px 12px;

  .swiper {
    width: 100%;
    height: 120px;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    height: 100%;
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.video {
  max-width: 965px;
  margin: auto;
  width: 100%;
  margin-top: 40px;

  &-title {
    font-weight: 500;
    font-size: 45px;
    line-height: 67px;
    max-width: 610px;
    margin: auto;
    text-align: center;
    color: $light-text;
  }

  &-box {
    margin-top: 90px;
    position: relative;
    display: flex;
    justify-content: center;

    &::before {
      content: '';
      position: absolute;
      left: -65px;
      top: -60px;
      width: 246px;
      height: 246px;
      background-color: $primary-color;

      @media (max-width: 992px) {
        width: 80px;
        height: 80px;
        left: 5px;
        top: -40px;
      }

      @media (max-width: 500px) {
        width: 60px;
        height: 60px;
        left: 0px;
        top: -25px;
      }
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -30px;
      right: -30px;
      width: 246px;
      height: 246px;
      background-image: url('../assets/image/cutted-square.png');

      @media (max-width: 992px) {
        width: 100px;
        height: 110px;
        right: 20px;
        bottom: -15px;
        background-position: center;
        background-size: cover;
      }

      @media (max-width: 500px) {
        width: 60px;
        height: 60px;
        right: 10px;
        bottom: -10px;
      }
    }

    img {
      width: 90%;
    }
  }

  &-btn {
    cursor: pointer;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      user-select: none;

      @media (max-width: 576px) {
        width: 50px;
        height: 50px;
      }
    }
  }

  &__item {
    border: 2px solid $primary-color;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -70%);
    padding: 10px;
    background-color: $primary-color;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s all;
    z-index: 11;
    max-width: 580px;
    width: 95%;

    &.active {
      opacity: 1;
      visibility: visible;
      transition: 0.3s all;
      transform: translate(-50%, -50%);
    }

    video {
      width: 100% !important;
      height: 100% !important;
    }
  }
}

.whyus {
  margin-top: 100px;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 650px) {
    flex-direction: column;
    row-gap: 40px;
  }

  &__left {
    width: 46%;

    @media (max-width: 650px) {
      width: 100%;
    }

    &-title {
      font-weight: 500;
      font-size: 64px;
      line-height: 67px;
      color: $light-text;

      @media (max-width: 992px) {
        font-weight: 500;
        font-size: 51px;
        line-height: 54px;
      }

      @media (max-width: 500px) {
        font-size: 38px;
      }
    }

    &-texts {
      margin-top: 36px;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 30px;

      @media (max-width: 500px) {
        margin-top: 16px;
      }

      p {
        font-weight: 400;
        font-size: 15px;
        line-height: 27px;
        color: $light-text;
      }
    }
  }

  &__facts {
    margin-top: 35px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;

    &-item {
      font-weight: 400;
      font-size: 15px;
      line-height: 18px;
      color: $light-text;
      padding-left: 30px;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        width: 13px;
        height: 13px;
        background-color: $primary-color;
        left: 0;
        top: 2px;
      }
    }

    p {
      font-weight: 400;
      font-size: 9px;
      line-height: 17px;
    }
  }

  &__right {
    width: 45%;

    @media (max-width: 650px) {
      width: 100%;
    }

    &-title {
      font-weight: 500;
      font-size: 51px;
      line-height: 54px;
      color: $light-text;

      @media (max-width: 500px) {
        font-size: 38px;
      }

      @media (max-width: 500px) {
        margin-top: 16px;
      }
    }

    &-subtitle {
      font-weight: 400;
      font-size: 15px;
      line-height: 27px;
      color: $light-text;
      margin-top: 36px;

      @media (max-width: 500px) {
        margin-top: 16px;
      }
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    position: relative;

    &::before,
    &::after {
      position: absolute;
      content: '';
      z-index: 0;
      width: 15px;
      height: 15px;
      background-color: $primary-color;
    }

    &::before {
      top: -30px;
      left: -1px;
    }

    &::after {
      left: -16px;
      top: -15px;
    }

    &-item {
      padding: 16px;
    }

    &-item:not(:last-child) {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    &-title {
      font-weight: 400;
      font-size: 24px;
      line-height: 36px;
      color: $light-text;
    }

    &-text {
      font-weight: 400;
      font-size: 15px;
      line-height: 27px;
      color: $light-text;
    }
  }
}

.slider {
  margin-top: 100px;
  background: $light-text;
  padding: 20px;
  padding-bottom: 0px;
  position: relative;

  @media (max-width: 576px) {
    padding: 20px 0px 0px 0px;
  }

  &::before {
    content: '';
    position: absolute;
    background-image: url('../assets/image/cutted-square-two.png');
    width: 246px;
    height: 246px;
    background-size: cover;
    left: -20px;
    top: -90px;

    @media (max-width: 576px) {
      width: 130px;
      height: 130px;
      top: -25px;
    }
  }

  &::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: $primary-color;
    right: 0;
    top: -40px;
  }

  &__head {
    padding-left: 36px;
    padding-top: 40px;

    &-title {
      margin-top: 12px;
      font-weight: 500;
      font-size: 44px;
      line-height: 67px;
      color: $white-text;
    }
  }

  &__content {
    margin-top: 70px;

    .swiper {
      position: relative;
      right: -36px;
      width: 100%;
      height: 100%;
      padding-top: 110px;
      margin-top: -110px;
      padding-bottom: 80px;

      @media (max-width: 1100px) {
        right: 0;
      }

      @media (max-width: 850px) {
        padding-top: 60px;
        margin-top: -60px;
      }
    }

    .swiper-slide {
      background: $white-text;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      display: flex;
      justify-content: center;
      min-height: 410px;
    }

    &-item {
      width: 100%;
      height: 100%;
      padding: 32px 36px;
    }

    &-icon {
      width: 63px;
      height: 63px;
      object-fit: contain;
    }

    &-title {
      margin-top: 60px;
      font-weight: 400;
      font-size: 24px;
      line-height: 36px;
      color: $light-text;
    }

    &-text {
      margin-top: 16px;
      font-weight: 400;
      font-size: 15px;
      line-height: 27px;
      color: $light-text;
    }
  }
}

.half {
  position: relative;
  width: 100%;
  min-height: 810px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  &-bg {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 0;
    width: 50%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 768px) {
      width: 100%;
      position: relative;
      min-height: 500px;
    }

    // &.first {
    //     background-image: url('../assets/image/image-1.jpg');
    // }

    // &.second {
    //     background-image: url('../assets/image/image-2.jpg');
    // }

    // &.third {
    //     background-image: url('../assets/image/image-3.jpg');
    // }

    // &.fourth {
    //     background-image: url('../assets/image/image-4.jpg');
    // }

    &::after {
      position: absolute;
      content: '';
      bottom: 0;
      right: 0;
      z-index: 0;
      width: 40px;
      height: 40px;
      background-color: $primary-color;
    }
  }

  &-wrapper {
    width: 100%;
    display: flex;
    min-height: 800px;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 576px) {
      min-height: auto;
      padding: 30px 0px;
    }
  }

  &__content {
    width: 50%;
    padding: 36px 50px;

    &-title {
      font-weight: 500;
      font-size: 64px;
      line-height: 67px;
      color: $light-text;
    }

    p {
      margin-top: 28px;
      font-weight: 500;
      font-size: 15px;
      line-height: 27px;
      color: $light-text;

      b {
        font-weight: 700;
      }
    }

    &-options {
      margin-top: 25px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 100%;
      padding-left: 30px;

      p {
        margin-top: 0px;
      }
    }

    .options__items {
      margin-top: 8px;
      padding-left: 30px;

      h3 {
        margin-top: 2px;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: $light-text;
      }
    }

    &-message {
      margin-top: 30px;
      font-weight: 700;
      font-size: 15px;
      line-height: 27px;
      color: $light-text;
    }

    &-btn {
      margin-top: 30px;
      color: #157fff;
    }

    @media (max-width: 992px) {
      padding-left: 25px;

      &-title {
        font-size: 40px;
        line-height: 46px;
      }
    }

    @media (max-width: 768px) {
      width: 100%;
    }

    @media (max-width: 576px) {
      padding: 12px;
    }
  }

  &.right-side {
    position: relative;

    &::after {
      content: '';
      width: 40px;
      height: 40px;
      background-color: $primary-color;
      position: absolute;
      left: 0;
      bottom: 0;
    }

    .half-wrapper {
      justify-content: flex-start;
    }

    .half-bg {
      left: auto;
      right: 0;

      &:after {
        top: 0;
        left: 0;
        width: 246px;
        height: 246px;
        background-color: transparent;
        background-size: cover;
        background-image: url('../assets/image/cutted-square-two.png');

        @media (max-width: 576px) {
          width: 100px;
          height: 100px;
        }
      }
    }

    .half__content {
      padding-top: 55px;
      padding-bottom: 60px;
    }
  }

  &:last-child {
    min-height: 1000px;

    .half-wrapper {
      min-height: 1000px;
      align-items: flex-start;
    }

    .half__content {
      padding-top: 20px;
      padding-left: 0;
    }
  }
}
</style>

<style lang="scss">
.swiper-button-next::after,
.swiper-button-prev::after {
  content: '';
  width: 16px;
  height: 24px;
  object-fit: contain;
  background-image: url('../assets/icons/slider-arrow.svg');
}

.swiper-button-prev::after {
  transform: rotate(180deg);
}

.swiper-button-prev {
  top: 12px;
  right: 80px;
  left: auto;
}

.swiper-button-next {
  top: 12px;
  right: 40px;
  left: auto;
}
</style>
