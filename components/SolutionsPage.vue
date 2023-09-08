<template>
    <div class="page">
        <header class="header">
            <div class="container">
                <TheHeader :headerBtn="headerBtn" />
                <main class="header__main">
                    <h3 class="header__main-subtitle">Solutions</h3>
                    <h1 v-if="pages.length && pages[0].title" class="header__main-title">{{ pages[0].title }}</h1>
                    <p v-if="pages.length && pages[0].subtitle" class="header__main-text">{{ pages[0].subtitle }}</p>
                    <a href="mailto:hello@parqour.com">
                        <button class="header__main-btn btn-primary">
                            {{ $t('book-demo') }}
                        </button>
                    </a>
                </main>
            </div>
        </header>

        <SiteContent></SiteContent>

        <TheFooter />

    </div>
</template>

<script setup lang="ts">
import { ref, type Ref, onMounted } from 'vue'
import { usePages } from '@/store/pages'

const pagesStore = usePages()
let { locale } = useI18n()

interface Page {
  content:  any;
  createdAt: any;
  id: any;
  locale: any;
  slug: any;
  subtitle: any;
  title: any;
  updatedAt: any;
}

let headerBtn = true

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth', // Use 'auto' for instant scrolling
    });
}

const pages = computed(() => pagesStore.Pages)
Promise.allSettled([
    pagesStore.getPages({ locale: locale.value }, 'home'),
]);


</script>

<style lang="scss" scoped>
$white-text: #ffffff;
$raleway: 'Raleway', sans-serif;
$primary-color: #00FF91;
$light-text: #222222;

.header {
    background: #0D76F4;
    background-image: url('../assets/image/main-bg.png');
    background-position: right center;
    background-size: contain;
    background-repeat: no-repeat;
    min-height: 380px;

    &__main {
        padding: 60px 0px 70px;
        display: flex;
        flex-direction: column;
        align-items: center;

        &-title {
            font-family: $raleway;
            font-weight: 700;
            font-size: 48px;
            line-height: 56px;
            text-align: center;
            color: $white-text;
            margin-top: 12px;
        }

        &-subtitle {
            font-family: $raleway;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            color: #00FF91;
        }

        &-text {
            font-family: $raleway;
            font-weight: 400;
            font-size: 20px;
            line-height: 28px;
            text-align: center;
            color: $white-text;
            opacity: 0.8;
            margin-top: 24px;
        }

        &-btn {
            display: none;
            color: #0D76F4;
            margin-top: 32px;

            @media (max-width: 992px) {
                display: block;
            }
        }
    }

    &__box {
        margin-top: 64px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;

        &-item {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        &-img {
            width: 64px;
            height: 64px;
            border: 2px solid $primary-color;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &-info {
            display: flex;
            flex-direction: column;
        }

        &-title {
            font-weight: 600;
            font-size: 32px;
            line-height: 36px;
            color: $white-text;
        }

        &-text {
            font-family: $raleway;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: $white-text;
        }
    }
}


.partners {
    margin-top: 300px;
    padding: 20px 12px;

    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
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

        &::before {
            content: '';
            position: absolute;
            left: -65px;
            top: -60px;
            width: 246px;
            height: 246px;
            background-color: $primary-color;
        }

        &::after {
            content: '';
            position: absolute;
            bottom: -30px;
            right: 10px;
            width: 246px;
            height: 246px;
            background-image: url('../assets/image/cutted-square.png');
        }
    }

    &-btn {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        img {
            user-select: none;
        }
    }
}

.whyus {
    margin-top: 100px;
    padding-bottom: 30px;
    display: flex;
    justify-content: space-between;

    &__left {
        width: 46%;

        &-title {
            font-weight: 500;
            font-size: 64px;
            line-height: 67px;
            color: $light-text;
        }

        &-texts {
            margin-top: 36px;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 30px;

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

        &-title {
            font-weight: 500;
            font-size: 51.2px;
            line-height: 54px;
            color: $light-text;
        }

        &-subtitle {
            font-weight: 400;
            font-size: 15px;
            line-height: 27px;
            color: $light-text;
            margin-top: 36px;
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

    &::before {
        content: '';
        position: absolute;
        background-image: url('../assets/image/cutted-square-two.png');
        width: 246px;
        height: 246px;
        background-size: cover;
        left: -20px;
        top: -90px;
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
            right: -40px;
            width: 100%;
            height: 100%;
            padding-top: 110px;
            transform: translateY(-110px);
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

        &.first {
            background-image: url('../assets/image/image-1.jpg');
        }

        &.second {
            background-image: url('../assets/image/image-2.jpg');
        }

        &.third {
            background-image: url('../assets/image/image-3.jpg');
        }

        &.fourth {
            background-image: url('../assets/image/image-4.jpg');
        }


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
            color: #157FFF;
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
            }
        }

        .half__content {
            padding-top: 55px;
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
