<template>
    <div class="page">
        <header class="header">
            <div class="container">
                <TheHeader :headerBtn="headerBtn" />
                <main class="header__main">
                    <h3 class="header__main-subtitle">{{ $t('company') }}</h3>
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

        <div class="main-banner container">
            <img src="../assets/image/banner-new.jpg"
                alt="banner">
        </div>

        <section v-if="pages.length && pages[0].content" class="company" v-html="pages[0].content"></section>
            <!-- <div class="company-text">
                Parqour has its roots in Central Asia, where it started business operations in 2020
                under the name of Smart Parking Technology.
                <br><br>
                At that time SmArt.Point, the largest co-working In Almaty, Kazakhstan, needed to address space availability
                and management issues with the parking at its premises.
            </div>
            <div class="company-text line">
                Instead of acquiring expensive traditional parking equipment, Amirkhan Omarov – SmArt.Point’s 
                <br><br>
                general manager and Smart Parking Technology’s co-founder – decided to test the company’s plate-recognition
                solution.
            </div>

            <div class="company-bg">
                <img src="../assets/image/company-bg.jpg"
                    alt="bg">
            </div>

            <div class="company-text center">
                The test proved successful, triggering a variety of clients in Kazakhstan to adopt the technology. The
                company rebranded to Parqour and began developing beyond its native market – in Central Asia, the Middle
                East and Eastern Europe. More than 150 parking owners and operators in these markets adopted Parqour
                solutions in less than two years.
            </div>
            <div class="company-text center">
                In early 2022 the company started expanding further in the USA and Western Europe, moving Its headquarters
                to New York, creating offices in the UK, Switzerland, and hiring an international team of business
                developers and advisors. 
            </div>
            <div class="company-text center">
                As of early 2023, Parqour has a team of 120+ professionals including 50+ engineers working on computer
                vision, artificial intelligence, big data, machine learning, software development, IoT, hardware
                engineering.
            </div>
            <div class="company-text center">
                The company operates in 25 countries across North America, Europe, Middle East, Central Asia and South-East
                Asia, serving more than 300 clients. 
            </div>

            <div class="company-bg">
                <img src="../assets/image/company-bg2.jpg"
                    alt="bg">
            </div>

            <div class="company-text center">
                Parqour is seen as one of the most promising tech companies born in Central Asia – the place where
                algorithms and algebra were invented by medieval mathematician Al-Khwarazmi. The company’s technological
                advances and commercial potential have attracted attention from prominent investors from the region, the USA
                and other countries. 
                <br><br>
                Globally-connected businessman Amirkhan Omarov boasts more than 20 years of industrial, managerial and
                entrepreneurial experience – including several successful launches and exits – in the real estate, proptech,
                software development and beverage distribution industries. His expertise spans from asset management, to
                strategy, to digitalization and corporate innovation. His corporate and consulting background include Ernst
                & Young, McKinsey & Co, Mercury Properties). He currently lives between Central Asia and the USA.
            </div> -->


        <TheFooter />
    </div>
</template>

<script setup lang="ts">
let { locale } = useI18n()

import { usePages } from '@/store/pages'
const pagesStore = usePages()



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
    pagesStore.getPages({
        populate: 'content',
        locale: locale.value
    }, 'company'),
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
    min-height: 660px;

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
        transform: translateY(-47%);
    }

    @media (max-width: 768px) {
        margin-bottom: 130px;
    }


    @media (max-width: 576px) {
        margin-top: 30px;
        height: 400px;
        margin-bottom: 0px;

        img {
            height: 100%;
            position: static;
            object-fit: cover;
            transform: translateY(-0%);
            object-position: right;
        }
    }
}

.company {
    max-width: 744px;
    margin: auto;
    width: 100%;
    padding: 50px 12px;

    &-text {
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        color: #475467;

        &.center {
            margin-top: 18px;
            font-weight: 400;
            font-size: 18px;
            line-height: 28px;
        }
    }

    .line {
        // width: 100%;
        // margin: 32px 0px;
        // margin-top: 32px;
        // padding-top: 32px;
        // border-top: 1px solid #EAECF0;
        // font-weight: 400;
        // font-size: 18px;
        // line-height: 28px;
    }

    &-bg {
        margin-top: 48px;
        border-radius: 16px;
        margin-bottom: 48px;

        img {
            width: 100%;
            object-fit: cover;
        }
    }
}
</style>
