<template>
  <div class="header__top">
    <div class="flex-center">
      <button
        class="header__burger-btn"
        type="button"
        :class="{ open: isOpen }"
        @click="toggleMenu"
      >
        <span class="header__burger-lines"></span>
      </button>
      <nuxt-link :to="{ path: localePath('/') }" class="header-logo">
        <img :src="headerLogo" alt="Logo" />
      </nuxt-link>
    </div>
    <nav class="header__nav">
      <ul>
        <li class="header__nav-item">
          <nuxt-link :to="{ path: localePath('/') }">{{
            $t('home')
          }}</nuxt-link>
        </li>
        <li class="header__nav-item">
          <nuxt-link :to="{ path: localePath('/solutions') }">{{
            $t('solutions')
          }}</nuxt-link>
        </li>
        <li class="header__nav-item">
          <nuxt-link :to="{ path: localePath('/company') }">{{
            $t('company')
          }}</nuxt-link>
        </li>
        <li class="header__nav-item">
          <nuxt-link :to="{ path: localePath('/contacts') }">{{
            $t('contacts')
          }}</nuxt-link>
        </li>
      </ul>
    </nav>
    <div class="header__buttons">
      <!--
 <button v-if="route.path != '/'"
                class="header__buttons-btn btn-primary">
                Book a demo
            </button> 
-->
      <div
        v-if="langVisibility || currentLang !== 'us'"
        class="header__lang"
        @click="isLang = !isLang"
      >
        <span>{{ activeLang?.value ? activeLang?.value : 'English' }}</span>
        <svg
          class="MuiSvgIcon-root"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
          role="presentation"
        >
          <path
            d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
            fill="#fff"
          ></path>
        </svg>
        <ul v-if="isLang" class="header__lang-list">
          <div>
            <li
              v-for="(item, index) in langList"
              :key="index"
              @click="changeLanguage(item)"
            >
              <span>{{ item.value }}</span>
            </li>
          </div>
        </ul>
      </div>
      <button
        v-if="!route.path.startsWith('/us') || currentLang !== 'us'"
        class="region-button"
        @click="openModalFn"
      >
        <span>{{
          activeRegionTitle ? activeRegionTitle : 'Choose Region'
        }}</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"
            fill="white"
          />
        </svg>
      </button>
      <a
        v-if="route.path != '/'"
        class="mobile-hide"
        href="mailto:hello@parqour.com"
      >
        <button class="header__main-btn btn-primary">
          {{ $t('book-demo') }}
        </button>
      </a>
    </div>
    <div class="burger" :class="{ open: isOpen }">
      <div class="burger-menu">
        <ul class="burger-menu__ul">
          <li class="burger-menu__ul-li" @click="toggleMenu">
            <nuxt-link :to="{ path: localePath('/contacts') }">{{
              $t('home')
            }}</nuxt-link>
          </li>
          <li class="burger-menu__ul-li" @click="toggleMenu">
            <nuxt-link :to="{ path: localePath('/solutions') }">{{
              $t('solutions')
            }}</nuxt-link>
          </li>
          <li class="burger-menu__ul-li" @click="toggleMenu">
            <nuxt-link :to="{ path: localePath('/company') }">{{
              $t('company')
            }}</nuxt-link>
          </li>
          <li class="burger-menu__ul-li" @click="toggleMenu">
            <nuxt-link :to="{ path: localePath('/contacts') }">{{
              $t('contacts')
            }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="burger-bg" @click="toggleMenu"></div>
    </div>
  </div>

  <div v-if="modalVisibility" class="region">
    <div class="region-modal">
      <div
        v-for="(item, index) in modalData"
        :key="index"
        class="region-modal__item"
        @mouseenter="item.active = true"
        @mouseleave="item.active = false"
        @click="setRegion(index, item.title)"
      >
        <div>
          <i>
            <img
              :src="item.icon"
              alt="icon"
              :class="activeRegion == index ? 'hovered' : ''"
            />
          </i>
          <h3>{{ item.title }}</h3>
        </div>
        <svg
          v-if="activeRegion == index"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"
            fill="#157FFF"
          />
        </svg>
      </div>
    </div>
    <div class="region-bg" @click="modalVisibility = false"></div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import headerLogo from '../assets/icons/logo.svg'
import icon1 from '../assets/icons/modal-1.svg'
import icon2 from '../assets/icons/modal-2.svg'
import icon3 from '../assets/icons/modal-3.svg'
import icon4 from '../assets/icons/modal-4.svg'
import icon5 from '../assets/icons/modal-5.svg'

const route = useRoute()
const currentLangKey = ref(false)
const isOpen = ref(false)
const localePath = useLocalePath()

const { setLocaleCookie } = useI18n()
const isLang = ref(false)
const langList = ref([{ key: 'en', value: 'English' }])
const modalData = ref([
  {
    title: 'Central Asia',
    active: false,
    icon: icon1,
  },
  {
    title: 'South East Asia',
    active: false,
    icon: icon2,
  },
  {
    title: 'North America',
    active: false,
    icon: icon3,
  },
  {
    title: 'Europe',
    active: false,
    icon: icon4,
  },
  {
    title: 'Middle east',
    active: false,
    icon: icon5,
  },
])

const activeRegion: any = useCookie('active_region')
const activeRegionTitle = useCookie('active_region_title')
const currentLang = useCookie('i18n_redirected')
const modalVisibility = ref(false)
const modalOpen = ref(false)

if (process.client) {
  const openModalValue = sessionStorage.getItem('open_modal')
  modalOpen.value = openModalValue ? JSON.parse(openModalValue) : false
}

function openModalFn() {
  modalVisibility.value = true
}

function setRegion(region: any, title: any) {
  setLocaleCookie('en')
  if (process.client) {
    sessionStorage.setItem('open_modal', JSON.stringify(true))
  }
  activeRegion.value = region
  activeRegionTitle.value = title
  modalVisibility.value = false
  window.location.reload()
}

const langVisibility = computed(() => {
  if (route.path.startsWith('/us')) {
    return false
  } else {
    return true
  }
})

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  isOpen.value
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'auto')
}

const cookieLocale = useCookie('i18n_redirected')
const activeLang = ref()
const router = useRouter()

const changeLanguage = (item: any) => {
  if (item.key === 'ru') {
    window.location.href = 'https://parqour.kz'
  } else {
    setLocaleCookie(item.key)
    router.go(0)
  }
}
onMounted(() => {
  if (process.client) {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        const apiKey = 'cee73a4c7bfb4f568729ef6eaf4f5c3a'
        fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
        )
          .then((response) => response.json())
          .then((data) => {
            const countryCode =
              data.results[0].components.country_code.toUpperCase()

            if (countryCode === 'US') {
              setLocaleCookie('us')
              router.push(
                `${
                  route.fullPath.startsWith('/us')
                    ? route.fullPath
                    : `/us` + route.fullPath
                }`
              )
              console.log('User is in the USA')
            } else {
              if (route.fullPath.startsWith('/us')) {
                router.push(route.fullPath.slice(3))
              }
              setLocaleCookie('en')
              console.log('User is not in the USA')
            }
          })
          .catch((error) => console.error('Error:', error))
      })
    } else {
      console.log('Geolocation is not supported by this browser.')
    }
  }

  if (process.client && !modalOpen.value) {
    console.log(modalOpen.value, 'Modallllllłłłłłłłłłłłłłłł')

    openModalFn()
  }

  if (activeRegion.value == 0) {
    langList.value.push({
      key: 'ru',
      value: 'Russion',
    })
  }

  // if (route.path.startsWith('/us')) {
  //     setLocaleCookie('us')
  // }

  // if (!route.path.startsWith('/us')) {
  //     modalVisibility.value = true
  // }

  if (process.client) {
    const localLang = cookieLocale.value || 'en'
    activeLang.value = langList.value.find((el) => el.key === localLang)
  }
})
</script>

<style lang="scss" scoped>
$white-text: #ffffff;
$raleway: 'Raleway', sans-serif;
$primary-color: #00ff91;
$light-text: #222222;
$blue: #0d76f4;

@media screen and (min-width: 1200px) {
  .header__top {
    height: 110px;
  }
}

.header {
  .hovered {
    filter: invert(100%);
  }
  .region {
    position: fixed;
    z-index: 5;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    &-bg {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(34, 34, 34, 0.5);
    }
    &-modal {
      position: absolute;
      max-width: 334px;
      width: 100%;
      padding: 0 24px;
      background: #ffffff;
      z-index: 5;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 8px;
      &__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 24px 0;
        cursor: pointer;
        & > div {
          display: flex;
          align-items: center;
        }
        i {
          width: 40px;
          height: 40px;
        }
        h3 {
          color: #475467;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 32px;
          margin-left: 20px;
        }
      }
    }
  }
  .region-button {
    border-radius: 4px;
    background: #3c91f6;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    span {
      color: #fff;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
    }
  }
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
  &-logo {
    height: 32px;
  }
  &__nav {
    // position: absolute;
    // left: 50%;
    // transform: translateX(-50%);
    display: flex;

    @media (max-width: 992px) {
      display: none;
    }

    ul {
      display: flex;
      align-items: center;
      gap: 56px;
    }

    &-item {
      a {
        font-family: $raleway;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: $white-text;
        transition: 0.3s all;

        &:hover {
          color: $primary-color;
          transition: 0.3s all;
          text-decoration: 2px solid underline;
        }
      }
    }
  }

  &__top {
    padding: 32px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }

  &__burger {
    &-btn {
      width: 47px;
      height: 47px;
      background-color: $primary-color;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      cursor: pointer;
      display: none;

      @media (max-width: 992px) {
        display: flex;
      }
    }

    &-lines {
      width: 20px;
      height: 2px;
      background-color: $blue;
      position: relative;

      &::before,
      &::after {
        content: '';
        display: block;
        width: 20px;
        height: 2px;
        background-color: $blue;
      }

      &::before {
        position: absolute;
        bottom: 8px;
      }

      &::after {
        position: absolute;
        top: 8px;
      }
    }
  }

  &__buttons {
    display: flex;
    gap: 16px;
    align-items: center;

    &-btn {
      color: $light-text;

      @media (max-width: 992px) {
        display: none;
      }
    }
  }
  &__lang {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 8px;
    cursor: pointer;
    svg {
      width: 20px;
      height: 20px;
    }
    span {
      font-family: 'Raleway';
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #ffffff;
    }
    &-list {
      position: absolute;
      top: 40px;
      left: 42%;
      transform: translate(-50%, 0);
      background-color: #fff;
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 10px 24px;
      border-radius: 8px;
      margin: 4px 0;
      li {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        span {
          color: #393939;
        }
        & > img,
        svg {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
}

.burger {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  pointer-events: none;

  &.open {
    display: block;
    pointer-events: all;

    .burger-menu {
      transform: translateX(0);
      transition: transform 0.4s;
    }

    .burger-bg {
      opacity: 1;
      transition: opacity 0.2s;
    }
  }

  &-menu {
    position: absolute;
    left: 0px;
    top: 0;
    padding: 100px 0 80px;
    height: 100%;
    background: white;
    z-index: 1;
    transform: translateX(-100%);
    display: flex;
    flex-direction: column;
    transition: transform 0.4s;

    &__ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      list-style: none;
      min-width: 300px;

      &-li {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          background-color: $blue;

          a {
            color: $white-text;
          }
        }

        a {
          width: 100%;
          height: 100%;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          color: $light-text;
          text-align: center;
          padding: 10px 20px;
        }
      }
    }
  }

  &-bg {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    backdrop-filter: blur(2px);
    transition: opacity 0.2s;
  }
}

@media screen and (max-width: 992px) {
  .mobile-hide {
    display: none;
  }
}
</style>
