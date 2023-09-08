<template>
    <div class="page">
        <header class="header">
            <div class="container">
                <TheHeader :headerBtn="headerBtn" />
                <main class="header__main">
                    <h3 class="header__main-subtitle">Contacts</h3>
                    <h1 v-if="pages.length && pages[0].title" class="header__main-title">{{ pages[0].title }}</h1>
                    <p v-if="pages.length && pages[0].subtitle" class="header__main-text">{{ pages[0].subtitle }}</p>
                    <a href="mailto:hello@parqour.com">
                        <button class="header__main-btn btn-primary">
                            {{ $t('book-demo') }}
                        </button>
                    </a>
                </main>
                <div class="header__map">
                    <div class="header__locations bg-image">
                        <div v-for="(item, index) in contacts" :key="index" >

                        <div class="header__locations-item">
                            <div class="header__locations-cord" :class="item.flag_icon">
                                <span></span>

                            </div>
                            <div class="header__locations-clue" :class="item.flag_icon">
                                <img 
                                    v-if="item.flag_icon == 'indonesia'" 
                                    src="../assets/image/flags/indonesia.png"
                                    alt="indonesia flag"
                                >
                                <img 
                                    v-else-if="item.flag_icon == 'kazakhstan'" 
                                    src="../assets/image/flags/kazakhstan.png"
                                    alt="kazakhstan flag"
                                >
                                <img 
                                    v-else-if="item.flag_icon == 'switzerland'" 
                                    src="../assets/image/flags/switzerland.png"
                                    alt="switzerland flag"
                                >
                                <img 
                                    v-else-if="item.flag_icon == 'uae'" 
                                    src="../assets/image/flags/uae.png"
                                    alt="uae flag"
                                >
                                <img 
                                    v-else-if="item.flag_icon == 'uk'" 
                                    src="../assets/image/flags/uk.png"
                                    alt="uk flag"
                                >
                                <img 
                                    v-else-if="item.flag_icon == 'us'" 
                                    src="../assets/image/flags/us.png"
                                    alt="us flag"
                                >
                                <img 
                                    v-else-if="item.flag_icon == 'uzbekistan'" 
                                    src="../assets/image/flags/uzbekistan.png"
                                    alt="uzbekistan flag"
                                >
                                <img 
                                    v-else-if="item.flag_icon == 'vietnam'" 
                                    src="../assets/image/flags/vietnam.png"
                                    alt="vietnam flag"
                                >
                                <h3 class="header__locations-name">{{ item.country }}</h3>
                                <p class="header__locations-text">{{ item.address }}</p>
                                <h4 class="header__locations-phone">{{ item.phone }}</h4>
                                <div class="triangle"></div>
                            </div>
                        </div>
                        </div>
                        <!-- <span>{{ item }}</span></div> -->
                    </div>
                </div>
            </div>
        </header>

        <div class="contacts">
            <div class="container">
                <div 
                    v-for="(item, index) in contacts" 
                    :key="index" 
                    class="contacts__item">
                    <div class="contacts__item-flag">
                        <img 
                            v-if="item.flag_icon == 'indonesia'" 
                            src="../assets/image/flags/indonesia.png"
                            alt="indonesia flag"
                        >
                        <img 
                            v-else-if="item.flag_icon == 'kazakhstan'" 
                            src="../assets/image/flags/kazakhstan.png"
                            alt="kazakhstan flag"
                        >
                        <img 
                            v-else-if="item.flag_icon == 'switzerland'" 
                            src="../assets/image/flags/switzerland.png"
                            alt="switzerland flag"
                        >
                        <img 
                            v-else-if="item.flag_icon == 'uae'" 
                            src="../assets/image/flags/uae.png"
                            alt="uae flag"
                        >
                        <img 
                            v-else-if="item.flag_icon == 'uk'" 
                            src="../assets/image/flags/uk.png"
                            alt="uk flag"
                        >
                        <img 
                            v-else-if="item.flag_icon == 'us'" 
                            src="../assets/image/flags/us.png"
                            alt="us flag"
                        >
                        <img 
                            v-else-if="item.flag_icon == 'uzbekistan'" 
                            src="../assets/image/flags/uzbekistan.png"
                            alt="uzbekistan flag"
                        >
                        <img 
                            v-else-if="item.flag_icon == 'vietnam'" 
                            src="../assets/image/flags/vietnam.png"
                            alt="vietnam flag"
                        >
                    </div>
                    <h3 class="contacts__item-name">{{ item.country }}</h3>
                    <h4 class="contacts__item-phone">{{ item.phone }}</h4>
                    <p class="contacts__item-text">{{ item.address }}</p>
                </div>
            </div>
        </div>

        <TheFooter />

    </div>
</template>

<script setup lang="ts">
import { usePages } from '@/store/pages'
import { useContacts } from '@/store/contacts';
const pagesStore = usePages()
const contactsStore = useContacts()
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

interface Contact {
  address: any;
  country: any;
  createdAt: any;
  flag_icon: any;
  id: any;
  order: any;
  phone: any;
  updatedAt: any;
}

let headerBtn = true;


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

const pages = computed(() => pagesStore.Pages)
const contacts = computed(() => contactsStore.Contacts)
Promise.allSettled([
    pagesStore.getPages({
        populate: 'content',
        locale: locale.value
    }, 'contacts'),
    contactsStore.getContacts({
        locale: locale.value
    })
]);

</script>

<style lang="scss" scoped>
$white-text: #ffffff;
$raleway: 'Raleway', sans-serif;
$primary-color: #00FF91;
$light-text: #222222;


.bg-image {
    background-image: url('@/assets/image/locations.png');
    background-repeat: no-repeat;
}
.header {
    background: #0D76F4;
    min-height: 300px;
    padding-bottom: 14px;

    &__main {
        padding: 0;
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

            @media (max-width: 576px) {
                font-size: 36px;
                line-height: 40px;
            }
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

    &__map {
        width: 100%;
        height: 486px;
        max-width: 1024px;
        margin: auto;
        display: flex;
        justify-content: center;
        // padding-bottom: 80px;
        position: relative;
        transform: scale(0.8);

        @media (max-width:992px) {
            display: none;
        }
    }

    &__locations {
        position: absolute;
        width: 100%;
        height: 486px;

        .us {
            left: 16%;
            top: 41%
        }

        .uzbekistan {
            left: 66%;
            top: 36%;
        }

        .kazakhstan {
            left: 69%;
            top: 32%;

            .triangle {

                &::after {
                    bottom: -34px;
                }
            }
        }

        .uk {
            left: 47%;
            top: 28%;
        }

        .switzerland {
            left: 50%;
            top: 34%;

            .triangle {

                &::after {
                    bottom: -34px;
                }
            }
        }

        .uae {
            left: 62.5%;
            top: 49%;

            .triangle {

                &::after {
                    bottom: -34px;
                }
            }
        }

        .vietnam {
            left: 76%;
            top: 55%;
        }

        .indonesia {
            left: 78%;
            top: 62%;
        }

        &-cord {
            position: absolute;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 1;

            span {
                position: absolute;
                z-index: 2;
                background: $primary-color;
                border-radius: 28px;
                width: 8px;
                height: 8px;
                box-shadow: 0px 0px 7px 4px $primary-color;
            }

            &:hover {
                &+.header__locations-clue {
                    opacity: 1;
                    visibility: visible;
                    transition: .3s;
                }
            }
        }

        &-clue {
            z-index: 999;
            transition: .3s;
            transition-delay: .1s;
            opacity: 0;
            visibility: hidden;
            transform: translate(-47%, -115%);
            position: absolute;
            width: 230px;
            min-height: 140px;
            background-color: $white-text;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 12px 16px;

            img {
                width: 20px;
                height: 20px;
                object-fit: cover;
            }

            .triangle {
                width: 100%;
                position: relative;

                &::after {
                    content: '';
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    bottom: -18px;
                    border-top: solid 8px white;
                    border-left: solid 8px transparent;
                    border-right: solid 8px transparent;
                }
            }
        }

        &-name {
            font-weight: 600;
            font-size: 12px;
            line-height: 18px;
            text-align: center;
            color: $light-text;
            margin-top: 8px;
        }

        &-text {
            font-weight: 400;
            font-size: 12px;
            line-height: 18px;
            text-align: center;
            color: #475467;
            margin-top: 4px;
        }

        &-phone {
            font-weight: 400;
            font-size: 12px;
            line-height: 18px;
            text-align: center;
            color: #0D76F4;
            margin-top: 16px;
        }
    }
}

.contacts {
    padding: 96px 0px 50px;

    .container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 32px;

        @media (max-width: 992px) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: 992px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 576px) {
            grid-template-columns: 1fr;
        }
    }

    &__item {
        background: #F9FAFB;
        border-radius: 16px;
        padding: 44px 30px;
        min-height: 230px;

        position: relative;

        &-flag {
            position: absolute;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 0;
            background: #EBF4FF;
            border: 8px solid #F5F9FF;
            border-radius: 28px;
            width: 48px;
            height: 48px;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 24px;
                height: 24px;
                object-fit: cover;
            }
        }

        &-name {
            font-weight: 600;
            font-size: 20px;
            line-height: 30px;
            text-align: center;
            color: #101828;
        }

        &-phone {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            color: #475467;
            margin-top: 8px;
        }

        &-text {
            margin-top: 20px;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            color: #157FFF;
            text-align: center;
        }
    }
}
</style>