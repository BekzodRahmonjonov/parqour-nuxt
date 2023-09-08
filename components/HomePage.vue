<template>
    <div class="page">

        <header class="header">
            <div class="container">
                <TheHeader />
                <main class="header__main">
                    <h1 v-if="pages.length && pages[0]?.title" class="header__main-title">
                        {{ pages[0]?.title }}
                        <!-- Shift your parking operation into top gear. -->
                    </h1>
                    <h3 v-if="pages.length && pages[0]?.subtitle" class="header__main-subtitle">
                        <!-- Parqour is a software platform that simplifies parking operations and improves the customer
                        experience.
                        It
                        offers real-time data, automated plate recognition, and contactless payments. -->
                        {{ pages[0]?.subtitle }}
                    </h3>
                    <a href="mailto:hello@parqour.com">
                        <button class="header__main-btn btn-primary">
                            {{ $t('book-demo') }}
                        </button>
                    </a>
                    <div class="header__box">
                        <!-- <span>{{ stateStat }}</span> -->
                        <div v-if="stateStat?.countries" class="header__box-item">
                            <div class="header__box-img">
                                <img src="../assets/icons/planet.svg"
                                    alt="planet">
                            </div>
                            <div class="header__box-info">
                                <h3 class="header__box-title">{{ stateStat.countries }}</h3>
                                <p class="header__box-text">{{ $t('countries') }}</p>
                            </div>
                        </div>
                        <div v-if="stateStat?.parking_area" class="header__box-item">
                            <div class="header__box-img">
                                <img src="../assets/icons/parking.svg"
                                    alt="planet">
                            </div>
                            <div class="header__box-info">
                                <h3 class="header__box-title">+{{ stateStat.parking_area }}</h3>
                                <p class="header__box-text">{{ $t('parking-areas') }}</p>
                            </div>
                        </div>
                        <div v-if="stateStat?.detected_vehicles" class="header__box-item">
                            <div class="header__box-img">
                                <img src="../assets/icons/car.svg"
                                    alt="planet">
                            </div>
                            <div class="header__box-info">
                                <h3 class="header__box-title">+{{ stateStat.detected_vehicles }}M</h3>
                                <p class="header__box-text">{{ $t('vehicles-detected') }}</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </header>

        <div class="main-banner container">
            <img src="../assets/image/banner-bg.jpg"
                alt="banner">
        </div>

        <SiteContent></SiteContent>

        <section class="answers">
            <div class="answers-wrapper">
            <h1 class="answers-title">{{ $t('frequently-asked-questions') }}</h1>
            <div class="answers__content">
                <ul class="akkordeon__list">
                <li v-for="(item, index) in faqs" :key="index" :class="{ active: item.active }" class="akkordeon__item">
                    <div @click="changeActive(item)" :class="{ active: item.active }" class="akkordeon__item-head">
                        <h3>{{ item.question }}</h3>
                    </div>
                    <div :class="{ active: item.active }" class="akkordeon__item-content">
                    <p v-html="formatContent(item.answer)" class="akkordeon__item-text"></p>
                    </div>
                </li>
                </ul>
            </div>
            </div>
        </section>

        <section class="blue__banner">
            <div class="container">
                <h1 class="blue__banner-title">
                    {{ $t('ready-to-get-started') }}
                </h1>
                <a href="mailto:hello@parqour.com">
                    <button class="blue__banner-btn btn-primary">{{ $t('book-demo') }}</button>
                </a>
            </div>
        </section>

        <section class="about">
            <div class="about-bg"></div>
            <div class="container">
                <div class="about__content">
                    <div class="about__content-img">
                        <img src="../assets/icons/logo-icon.svg"
                            alt="logo">
                    </div>
                    <h1 class="about__content-title">
                        {{ $t('about-us') }}
                    </h1>
                    <p class="about__content-text">{{ $t('about-us-text-1') }}</p>
                    <p class="about__content-text">{{ $t('about-us-text-2') }}</p>
                    <p class="about__content-text">{{ $t('about-us-text-3') }}</p>
                </div>
            </div>
        </section>


        <TheFooter />
    </div>
</template>

<script setup lang="ts">
let { locale } = useI18n()
import { useHomeStore } from '@/store'
import { usePages } from '@/store/pages'
import { useFaqs } from '@/store/faqs'

const homeStore = useHomeStore()
const pagesStore = usePages()
const faqsStore = useFaqs()

interface Item {
    active: boolean;
}

const changeActive = (item: Item) => {
    item.active = !item.active
}
const formatContent = (content: any) => {
  return content.replace(/\n/g, "<br>");
};


const stateStat = computed(() => homeStore.Stat)
const pages = computed(() => pagesStore.Pages)
const faqs = computed(() => faqsStore.Faqs)
Promise.allSettled([
    pagesStore.getPages({ locale: locale.value }, 'home'),
    homeStore.getStat({ locale: locale.value }),
    faqsStore.getFaq({ locale: locale.value })
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
    min-height: 850px;

    @media (max-width: 640px) {
        min-height: 950px;
    }

    @media (max-width: 576px) {
        min-height: 870px;
    }

    &__main {
        max-width: 710px;
        margin: 30px auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        &-title {
            font-family: $raleway;
            font-weight: 700;
            font-size: 56px;
            line-height: 64px;
            text-align: center;
            color: $white-text;

            @media (max-width: 510px) {
                font-size: 40px;
                line-height: 50px;
            }
        }

        &-subtitle {
            margin-top: 24px;
            font-family: $raleway;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            color: #FFFFFF;
        }

        &-btn {
            color: #0D76F4;
            margin-top: 32px;
        }
    }

    &__box {
        margin-top: 64px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;

        @media (max-width: 640px) {
            flex-direction: column;
            row-gap: 20px;
            align-items: flex-start;
        }

        @media (max-width: 576px) {
            row-gap: 30px;
        }


        &-item {
            display: flex;
            align-items: center;
            gap: 16px;

            @media (max-width: 640px) {
                gap: 50px;
            }

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

.main-banner {
    position: relative;
    z-index: 2;
    margin-bottom: 300px;

    img {
        padding: 0px 12px;
        left: 0;
        width: 100%;
        border-radius: 24px;
        position: absolute;
        transform: translateY(-50%);
    }

    @media (max-width: 992px) {
        img {
            height: 400px;
            object-fit: cover;
        }
    }

    @media (max-width: 768px) {
        img {
            padding: 0px;
            transform: translateY(-30%);
        }
    }


    @media (max-width: 576px) {
        margin-top: 30px;
        height: 400px;
        margin-bottom: 30px;

        img {
            height: 100%;
            position: static;
            transform: translateY(-0%);
            object-position: right;
        }
    }
}

.answers {
    background: #F6F6F6;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        background-image: url('../assets/image/cutted-square.png');
        width: 246px;
        height: 246px;
        background-position: center;
        background-size: contain;
        bottom: -80px;
        right: 0;

        @media (max-width: 992px) {
            width: 80px;
            height: 80px;
            bottom: 0px;
            right: -10px;
        }
    }

    .answers-wrapper {
        padding: 90px 12px 85px;
        max-width: 756px;
        width: 100%;
        margin: auto;
    }

    &-title {
        font-weight: 500;
        font-size: 44px;
        line-height: 67px;
        text-align: center;
        color: $light-text;
    }

    &__content {
        margin-top: 55px;
    }

    .akkordeon {
        &__list {
            display: flex;
            flex-direction: column;
        }

        &__item {
            position: relative;

            &::after {
                position: absolute;
                content: '';
                top: 0;
                left: -1562.5rem;
                width: 50000px;
                height: 100%;
                transition: .3s all;
                background-color: $primary-color;
                opacity: 0;
            }

            &.active {

                &::after {
                    opacity: 1;
                    transition: .3s all;
                }


            }

            &-head {
                position: relative;
                z-index: 1;
                cursor: pointer;
                padding: 22px 0px 24px;
                border-bottom: 1px solid #979797;
                position: relative;
                display: flex;
                align-items: center;

                h3 {
                    font-weight: 400;
                    font-size: 23px;
                    line-height: 25px;
                    color: $light-text;

                    @media (max-width: 576px) {
                        font-size: 18px;
                        line-height: 22px;
                    }
                }

                &.active {
                    border-bottom: none;

                    &::after {
                        transition: .3s all;
                        transform: rotate(90deg);
                    }
                }

                &::after {
                    content: "";
                    background-image: url('../assets/icons/arrow.svg');
                    background-position: center;
                    background-size: cover;
                    position: absolute;
                    right: 20px;
                    width: 6px;
                    height: 12px;
                    object-fit: contain;
                    transition: .3s all;

                }

            }

            &-content {
                position: relative;
                z-index: 1;
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.3s;

                &.active {
                    transition: max-height .6s;
                    max-height: 500px;
                }
            }

            &-text {
                padding: 30px 0px 40px;
            }
        }
    }
}

.blue__banner {
    padding: 120px 0px 80px;
    position: relative;

    &::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        z-index: -1;
        width: calc(100% - 246px);
        height: 100%;
        background-color: #157FFF;
        background-image: url('../assets/image/bg-image.png');
        background-position: center right;
        background-size: auto 100%;
        background-repeat: no-repeat;

        @media (max-width: 992px) {
            width: 100%;
        }
    }

    &-title {
        font-weight: 500;
        font-size: 64px;
        line-height: 67px;
        color: $white-text;

        @media (max-width: 576px) {
            font-size: 36px;
            line-height: 40px;
        }
    }

    &-btn {
        margin-top: 26px;
        color: #157FFF;
    }
}

.about {
    padding: 80px 0px;
    position: relative;

    &-bg {
        background-image: url('../assets/image/about-bg.jpg');
        position: absolute;
        height: 100%;
        top: 0;
        right: 0;
        z-index: 0;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        width: calc(100% - ((100% - 1170px) / 2));
    }

    &__content {
        position: relative;
        z-index: 1;
        padding: 0px 80px;

        @media (max-width: 576px) {
            padding: 0px;
        }

        &-title {
            margin-top: 70px;
            font-weight: 500;
            font-size: 64px;
            line-height: 67px;
            color: $white-text;
        }

        &-text {
            margin-top: 36px;
            font-weight: 400;
            font-size: 15px;
            line-height: 27px;
            color: $white-text;
        }
    }
}
</style>


<style lang="scss">
$primary-color: #00FF91;

.btn-primary {
    background: $primary-color;
    border-radius: 4px;
    padding: 11px 24px 12px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    cursor: pointer;
    transition: .3s all;

    &:hover {
        transition: .3s all;
        background-color: #aeffdc;
    }
}
</style>