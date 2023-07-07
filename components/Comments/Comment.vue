<!--<template>-->
<!--  <div class="komment__wrapper">-->
<!--    <div-->
<!--        class="komment mb-[28px] relative has-children"-->
<!--    >-->
<!--      <div  class="komment__arc"></div>-->
<!--      <div class="komment__header flex items-center justify-between mb-[12px]">-->
<!--        <div class="flex items-start gap-[10px]">-->
<!--          <nuxt-link-->
<!--              class="komment__title"-->
<!--          >-->
<!--            <img-->
<!--                alt="user img"-->
<!--                :src="info.author.avatar_url"-->
<!--                width="32"-->
<!--                height="32"-->
<!--                class="rounded-full"-->
<!--            />-->
<!--          </nuxt-link>-->
<!--          <div>-->
<!--            <nuxt-link-->
<!--                class="komment__title flex items-center gap-[4px]"-->
<!--            >-->
<!--              <span>-->
<!--                {{ info.author.name }}-->
<!--              </span>-->
<!--              <svg-->
<!--                  v-if="info.author.is_verified"-->
<!--                  width="16"-->
<!--                  height="17"-->
<!--                  viewBox="0 0 16 17"-->
<!--                  fill="none"-->
<!--                  xmlns="http://www.w3.org/2000/svg"-->
<!--              >-->
<!--                <path-->
<!--                    fill-rule="evenodd"-->
<!--                    clip-rule="evenodd"-->
<!--                    d="M10.864 6.90362L7.81865 10.9036C7.69332 11.0683 7.49932 11.1656 7.29265 11.167H7.28798C7.08332 11.167 6.88998 11.0723 6.76332 10.911L5.14198 8.83962C4.91532 8.55028 4.96598 8.13095 5.25598 7.90428C5.54532 7.67695 5.96532 7.72762 6.19198 8.01828L7.28065 9.40895L9.80332 6.09628C10.026 5.80362 10.444 5.74628 10.738 5.96962C11.0307 6.19295 11.0873 6.61095 10.864 6.90362ZM8.00065 1.83362C4.31865 1.83362 1.33398 4.81828 1.33398 8.50029C1.33398 12.1816 4.31865 15.167 8.00065 15.167C11.6827 15.167 14.6673 12.1816 14.6673 8.50029C14.6673 4.81828 11.6827 1.83362 8.00065 1.83362Z"-->
<!--                    fill="#2BA0EC"-->
<!--                />-->
<!--                <mask-->
<!--                    id="mask0_5046_152"-->
<!--                    style="mask-type: alpha"-->
<!--                    maskUnits="userSpaceOnUse"-->
<!--                    x="1"-->
<!--                    y="1"-->
<!--                    width="14"-->
<!--                    height="15"-->
<!--                >-->
<!--                  <path-->
<!--                      fill-rule="evenodd"-->
<!--                      clip-rule="evenodd"-->
<!--                      d="M10.864 6.90362L7.81865 10.9036C7.69332 11.0683 7.49932 11.1656 7.29265 11.167H7.28798C7.08332 11.167 6.88998 11.0723 6.76332 10.911L5.14198 8.83962C4.91532 8.55028 4.96598 8.13095 5.25598 7.90428C5.54532 7.67695 5.96532 7.72762 6.19198 8.01828L7.28065 9.40895L9.80332 6.09628C10.026 5.80362 10.444 5.74628 10.738 5.96962C11.0307 6.19295 11.0873 6.61095 10.864 6.90362ZM8.00065 1.83362C4.31865 1.83362 1.33398 4.81828 1.33398 8.50029C1.33398 12.1816 4.31865 15.167 8.00065 15.167C11.6827 15.167 14.6673 12.1816 14.6673 8.50029C14.6673 4.81828 11.6827 1.83362 8.00065 1.83362Z"-->
<!--                      fill="white"-->
<!--                  />-->
<!--                </mask>-->
<!--                <g mask="url(#mask0_5046_152)"></g>-->
<!--              </svg>-->
<!--            </nuxt-link>-->
<!--            <p v-if="info.commented_date" class="komment__when">-->
<!--              {{ $removeDateWords($mjs(info.commented_date)) }}-->
<!--            </p>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div>-->
<!--          <Vote-->
<!--              :info="info"-->
<!--              :hoverable="true"-->
<!--              class="e:!hidden"-->
<!--              v-bind="{-->
<!--              isLiked: isLiked,-->
<!--              isDisliked: isDisliked,-->
<!--              likeAPI: 'article/comments/like/',-->
<!--              dislikeAPI: 'article/comments/dislike/',-->
<!--              isComment: true,-->
<!--            }"-->
<!--          />-->
<!--        </div>-->
<!--      </div>-->
<!--      <div-->
<!--          class="komment__content font-medium text-base -[140%] text-txt-color0 mb-[12px]"-->
<!--      >-->
<!--        <p v-html="wrapWithLink($preventXXS(info.content))"></p>-->
<!--        <div v-if="info.images.length" class="mt-[5px]">-->
<!--          <div-->
<!--              v-for="(image, index) in info.images"-->
<!--              :key="index"-->
<!--              class="mb-[12px] komment__image max-w-[325px] max-h-[300px] overflow-hidden"-->
<!--          >-->
<!--            <img alt="user img" :src="image" height="100%" />-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div-->
<!--          class="flex items-center justify-between mb-[12px] g:flex-wrap g:gap-[10px]"-->
<!--      >-->
<!--        <div v-if="$auth.loggedIn" class="flex items-center">-->
<!--          <p-->
<!--              class="mr-[12px] komment__answer hover:text-[#346eb8] font-medium text-sm -[17px] text-txt-color3 cursor-pointer transition duration-200 ease-in"-->
<!--              @click="handleShowReply"-->
<!--          >-->
<!--            {{ $t('answer') }}-->
<!--          </p>-->
<!--          <v-menu-->
<!--              offset-y-->
<!--              :nudge-bottom="8"-->
<!--              content-class="posta__dots-menu"-->
<!--              min-width="160"-->
<!--          >-->
<!--            <template #activator="{ on, attrs }">-->
<!--              <div class="komment__dots" v-bind="attrs" v-on="on">-->
<!--                <svg-->
<!--                    width="16"-->
<!--                    height="17"-->
<!--                    viewBox="0 0 16 17"-->
<!--                    fill="none"-->
<!--                    xmlns="http://www.w3.org/2000/svg"-->
<!--                >-->
<!--                  <path-->
<!--                      d="M11.7334 8.50003C11.7334 7.61629 12.4497 6.90002 13.3334 6.90002C14.2171 6.90002 14.9334 7.61629 14.9334 8.50003C14.9334 9.38376 14.2171 10.1 13.3334 10.1C12.4497 10.1 11.7334 9.38376 11.7334 8.50003Z"-->
<!--                      fill="#8A939A"-->
<!--                  />-->
<!--                  <path-->
<!--                      d="M6.40039 8.50003C6.40039 7.61629 7.11666 6.90002 8.00039 6.90002C8.88412 6.90002 9.60039 7.61629 9.60039 8.50003C9.60039 9.38376 8.88412 10.1 8.00039 10.1C7.11666 10.1 6.40039 9.38376 6.40039 8.50003Z"-->
<!--                      fill="#8A939A"-->
<!--                  />-->
<!--                  <path-->
<!--                      d="M2.66641 6.90002C1.78267 6.90002 1.06641 7.61629 1.06641 8.50003C1.06641 9.38376 1.78267 10.1 2.66641 10.1C3.55014 10.1 4.26641 9.38376 4.26641 8.50003C4.26641 7.61629 3.55014 6.90002 2.66641 6.90002Z"-->
<!--                      fill="#8A939A"-->
<!--                  />-->
<!--                </svg>-->
<!--              </div>-->
<!--            </template>-->
<!--            <v-list class="!py-[4px]">-->
<!--              <v-list-item v-if="info.author.is_request_user" @click="deleteIt">-->
<!--                <v-list-item-title>{{ $t('delete') }}</v-list-item-title>-->
<!--              </v-list-item>-->
<!--              <v-list-item v-else @click="report">-->
<!--                <v-list-item-title>{{ $t('report') }}</v-list-item-title>-->
<!--              </v-list-item>-->
<!--            </v-list>-->
<!--          </v-menu>-->
<!--        </div>-->
<!--        <div>-->
<!--          <Vote-->
<!--              :info="info"-->
<!--              :hoverable="true"-->
<!--              class="!hidden e:!flex"-->
<!--              v-bind="{-->
<!--              isLiked: isLiked,-->
<!--              isDisliked: isDisliked,-->
<!--              likeAPI: 'article/comments/like/',-->
<!--              dislikeAPI: 'article/comments/dislike/',-->
<!--              isComment: true,-->
<!--            }"-->
<!--          />-->
<!--        </div>-->
<!--      </div>-->

<!--&lt;!&ndash;      <ReplyComment&ndash;&gt;-->
<!--&lt;!&ndash;          v-if="showTextarea && info.id === replyCommetID"&ndash;&gt;-->
<!--&lt;!&ndash;          :parent="info.id"&ndash;&gt;-->
<!--&lt;!&ndash;          @cancel="showTextarea = false"&ndash;&gt;-->
<!--&lt;!&ndash;      />&ndash;&gt;-->
<!--    </div>-->
<!--    <div-->
<!--        v-if="info.children.length"-->
<!--        class="komment__other pl-[20px]"-->
<!--        :class="{ 'has-border': info.children.length > 1 }"-->
<!--    >-->
<!--&lt;!&ndash;      <template v-for="(item, index) in info.children">&ndash;&gt;-->
<!--&lt;!&ndash;        <Comment&ndash;&gt;-->
<!--&lt;!&ndash;            :key="index"&ndash;&gt;-->
<!--&lt;!&ndash;            :info="item"&ndash;&gt;-->
<!--&lt;!&ndash;            v-bind="{&ndash;&gt;-->
<!--&lt;!&ndash;            isLiked: item.is_liked,&ndash;&gt;-->
<!--&lt;!&ndash;            isDisliked: item.is_disliked,&ndash;&gt;-->
<!--&lt;!&ndash;          }"&ndash;&gt;-->
<!--&lt;!&ndash;        />&ndash;&gt;-->
<!--&lt;!&ndash;      </template>&ndash;&gt;-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--// import Vote from '../actions/Vote.vue'-->
<!--// import ReplyComment from '../form/ReplyComment.vue'-->
<!--import Comment from './Comment.vue'-->
<!--export default {-->
<!--  name: 'Comment',-->
<!--  // components: {-->
<!--  //   Comment,-->
<!--  //   ReplyComment,-->
<!--  //   Vote,-->
<!--  // },-->
<!--  props: {-->
<!--    info: {-->
<!--      type: Object,-->
<!--      default: () => {},-->
<!--    },-->
<!--    images: {-->
<!--      type: Array,-->
<!--      default: () => [],-->
<!--    },-->
<!--    isMine: {-->
<!--      type: Boolean,-->
<!--    },-->
<!--    coverUrl: {-->
<!--      type: String,-->
<!--      default: 'https://picsum.photos/200',-->
<!--    },-->
<!--    content: {-->
<!--      type: String,-->
<!--      default: '',-->
<!--    },-->
<!--    author: {-->
<!--      type: String,-->
<!--      default: '',-->
<!--    },-->
<!--    parent: {-->
<!--      type: [String, Number],-->
<!--      default: '',-->
<!--    },-->
<!--    when: {-->
<!--      type: String,-->
<!--      default: '',-->
<!--    },-->
<!--    reply: {-->
<!--      type: Array,-->
<!--      default: () => [],-->
<!--    },-->
<!--    hasArce: {-->
<!--      type: Boolean,-->
<!--      default: false,-->
<!--    },-->
<!--    id: {-->
<!--      type: Number,-->
<!--      default: 0,-->
<!--    },-->
<!--    isVerified: {-->
<!--      type: Boolean,-->
<!--      default: false,-->
<!--    },-->
<!--    link: {-->
<!--      type: String,-->
<!--      default: '',-->
<!--    },-->
<!--    score: {-->
<!--      type: Number,-->
<!--      default: 0,-->
<!--    },-->
<!--    isLiked: {-->
<!--      type: Boolean,-->
<!--      default: false,-->
<!--    },-->
<!--    isDisliked: {-->
<!--      type: Boolean,-->
<!--      default: false,-->
<!--    },-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      showTextarea: false,-->
<!--    }-->
<!--  },-->
<!--  computed: {-->
<!--    ...mapState({-->
<!--      replyCommetID: (state) => state.replyComment,-->
<!--    }),-->
<!--  },-->
<!--  methods: {-->
<!--    wrapWithLink(text) {-->
<!--      const regex = /(^|\s)@(\w+)/g-->
<!--      const replace = (match, p1, p2) => {-->
<!--        return `${p1}<a class='user&#45;&#45;link' href="/${p2}">@${p2}</a>`-->
<!--      }-->
<!--      return text.toString().replace(regex, replace)-->
<!--    },-->
<!--    handleShowReply() {-->
<!--      if (this.$auth.loggedIn) {-->
<!--        this.showTextarea = true-->
<!--        this.$store.commit('setReplyCommentId', this.info.id)-->
<!--      } else {-->
<!--        this.$router.push({-->
<!--          path: '/auth/login',-->
<!--        })-->
<!--      }-->
<!--    },-->
<!--    report() {-->
<!--      this.$store.commit('reports/SET_COMMENT_ID', this.info.id)-->
<!--      this.$modal('reportComment')-->
<!--    },-->
<!--    deleteIt() {-->
<!--      this.$axios-->
<!--          .delete(`article/comments/delete/${this.info.id}`)-->
<!--          .then(() => {-->
<!--            this.$root.$emit('fetchComments')-->
<!--          })-->
<!--          .catch(() => {})-->
<!--    },-->
<!--  },-->
<!--}-->
<!--</script>-->
<!--<style lang="scss">-->
<!--.komment {-->
<!--  &:hover .vote__down-vote,-->
<!--  &:hover .vote__up-vote {-->
<!--    opacity: 1;-->
<!--  }-->
<!--}-->

<!--.komment {-->
<!--  &__other {-->
<!--    &.has-border {-->
<!--      border-left: 1px solid #d1d5d9;-->
<!--    }-->

<!--    .komment__wrapper:last-child {-->
<!--      box-shadow: calc(20px * -1 - 1px) 0 0 0 #fff;-->
<!--    }-->
<!--  }-->

<!--  &__arc {-->
<!--    border-left: 1px solid;-->
<!--    border-bottom: 1px solid;-->
<!--    border-color: #d1d5d9;-->
<!--    border-bottom-left-radius: 8px;-->
<!--  }-->
<!--  &__title {-->
<!--    font-family: SF Pro Text, Arial, Helvetica, sans-serif;-->
<!--  }-->

<!--  &__when {-->
<!--    font-family: SF Pro Text, Arial, Helvetica, sans-serif;-->
<!--  }-->

<!--  &__content {-->
<!--    font-family: SF Pro Text, Arial, Helvetica, sans-serif;-->
<!--  }-->

<!--  &__answer {-->
<!--    font-family: SF Pro Text, Arial, Helvetica, sans-serif;-->
<!--  }-->

<!--  &__dots {-->
<!--    &:hover {-->
<!--      path {-->
<!--        fill: #111;-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->

<!--// Komment-->

<!--.komment {-->
<!--  //.komment__other-->
<!--  &__other {-->
<!--    &.has-border {-->
<!--      border-left: 1px solid #d1d5d9;-->
<!--    }-->

<!--    .komment__wrapper:last-child {-->
<!--      box-shadow: calc(20px * -1 - 1px) 0 0 0 #fff;-->
<!--    }-->
<!--  }-->

<!--  //.komment__arc-->
<!--  &__arc {-->
<!--    position: absolute;-->
<!--    left: -21px;-->
<!--    top: -20px;-->
<!--    flex-shrink: 0;-->
<!--    height: 36px;-->
<!--    width: 13px;-->
<!--    border-left: 1px solid;-->
<!--    border-bottom: 1px solid;-->
<!--    border-color: #d1d5d9;-->
<!--    border-bottom-left-radius: 8px;-->
<!--  }-->

<!--  // .komment__title-->
<!--  &__title {-->
<!--    font-family: SF Pro Text, Arial, Helvetica, sans-serif;-->
<!--    font-style: normal;-->
<!--    font-weight: 600;-->
<!--    font-size: 16px;-->
<!--    line-height: 130%;-->
<!--    letter-spacing: -0.32px;-->
<!--    color: #111111 !important;-->

<!--    &:hover {-->
<!--      color: #346eb8 !important;-->
<!--    }-->

<!--    span {-->
<!--      overflow: hidden;-->
<!--      text-overflow: ellipsis;-->
<!--      white-space: nowrap;-->
<!--      transition: 0.2s ease;-->
<!--      max-width: 240px;-->

<!--      @media (max-width: 420px) {-->
<!--        max-width: 180px;-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--  // .komment__when-->
<!--  &__when {-->
<!--    font-family: SF Pro Text, Arial, Helvetica, sans-serif;-->
<!--    font-style: normal;-->
<!--    font-weight: normal;-->
<!--    font-size: 12px;-->
<!--    line-height: 14px;-->
<!--    color: #8a939a;-->
<!--  }-->

<!--  // .komment__content-->
<!--  &__content {-->
<!--    font-family: SF Pro Text, Arial, Helvetica, sans-serif;-->
<!--    font-style: normal;-->
<!--    font-weight: 500;-->
<!--    font-size: 16px;-->
<!--    line-height: 140%;-->
<!--    letter-spacing: -0.32px;-->
<!--    color: #111111;-->
<!--  }-->

<!--  // .komment__answer-->
<!--  &__answer {-->
<!--    font-family: SF Pro Text, Arial, Helvetica, sans-serif;-->
<!--    font-style: normal;-->
<!--    font-weight: normal;-->
<!--    font-size: 14px;-->
<!--    line-height: 17px;-->
<!--    letter-spacing: -0.15px;-->
<!--    color: #8a939a;-->
<!--    cursor: pointer;-->
<!--    transition: 0.2s ease;-->

<!--    &:hover {-->
<!--      color: #346eb8;-->
<!--    }-->
<!--  }-->

<!--  // komment__dots-->
<!--  &__dots {-->
<!--    &:hover {-->
<!--      path {-->
<!--        fill: #111;-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--  // komment__image-->
<!--  &__image {-->
<!--    max-height: 300px;-->
<!--    max-width: 325px;-->
<!--    overflow: hidden;-->
<!--  }-->
<!--}-->

<!--.reply-comment {-->
<!--  background: #ffffff;-->
<!--  border: 1px solid #d1d5d9;-->
<!--  box-sizing: border-box;-->
<!--  padding: 16px;-->
<!--  border-radius: 8px;-->
<!--  transition: 0.2s ease;-->

<!--  &:active,-->
<!--  &:focus,-->
<!--  &:focus-within {-->
<!--    border-color: #bdd6fa;-->
<!--    -webkit-box-shadow: 0 0 0 3px rgb(70 131 217 / 12%);-->
<!--    box-shadow: 0 0 0 3px rgb(70 131 217 / 12%);-->
<!--  }-->

<!--  &._error {-->
<!--    border-color: #f44336;-->
<!--  }-->

<!--  //reply-comment__btn-->
<!--  &__btn {-->
<!--    background: #f2f2f6;-->
<!--    border-radius: 6px;-->
<!--    font-style: normal;-->
<!--    font-weight: 500;-->
<!--    font-size: 15px;-->
<!--    line-height: 18px;-->
<!--    color: #44494d;-->
<!--    cursor: pointer;-->
<!--    width: 108px;-->
<!--    height: 32px;-->
<!--    display: flex;-->
<!--    align-items: center;-->
<!--    justify-content: center;-->
<!--    transition: 0.2s ease;-->

<!--    @media (max-width: 576px) {-->
<!--      font-size: 12px;-->
<!--    }-->

<!--    &:hover {-->
<!--      opacity: 0.8;-->
<!--    }-->

<!--    &.blued {-->
<!--      transition: 0.2s ease;-->
<!--      background: #2185e6;-->
<!--      color: #fff;-->

<!--      &:hover {-->
<!--        background: #036dd0ee;-->
<!--      }-->

<!--      &.disabled {-->
<!--        cursor: not-allowed;-->
<!--        user-select: none;-->
<!--        pointer-events: none;-->
<!--        background-color: #84a8dbc0;-->
<!--        color: #fff;-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--  //reply-comment__comment-->
<!--  &__comment {-->
<!--    min-height: 70px;-->
<!--    max-height: 200px;-->
<!--    overflow: auto;-->
<!--    position: relative;-->
<!--    font-style: normal;-->
<!--    font-weight: normal;-->
<!--    font-size: 16px;-->
<!--    line-height: 17px;-->
<!--    color: #111111;-->
<!--    outline: none;-->

<!--    &::-webkit-scrollbar {-->
<!--      display: none;-->
<!--    }-->

<!--    &::-moz-scrollbar {-->
<!--      display: none;-->
<!--    }-->

<!--    &::-ms-scrollbar {-->
<!--      display: none;-->
<!--    }-->

<!--    &::-o-scrollbar {-->
<!--      display: none;-->
<!--    }-->
<!--  }-->

<!--  //reply-comment__placeholder-->
<!--  &__placeholder {-->
<!--    position: absolute;-->
<!--    font-style: normal;-->
<!--    font-weight: normal;-->
<!--    font-size: 14px;-->
<!--    line-height: 17px;-->
<!--    color: #8a939a;-->
<!--  }-->

<!--  //reply-comment__comment-wrapper-->
<!--  &__comment-wrapper {-->
<!--    position: relative;-->
<!--  }-->

<!--  //reply-comment__collapse-->
<!--  &__collapse {-->
<!--    background: #f2f2f6;-->
<!--    border-radius: 8px;-->
<!--    padding: 8px;-->
<!--    font-style: normal;-->
<!--    font-weight: normal;-->
<!--    font-size: 14px;-->
<!--    line-height: 17px;-->
<!--    color: #8a939a;-->
<!--    padding-left: 16px;-->
<!--  }-->

<!--  // reply-comment__mtitle-->
<!--  &__mtitle {-->
<!--    font-family: SF Pro Text, Arial, Helvetica, sans-serif;-->
<!--    font-style: normal;-->
<!--    font-weight: 600;-->
<!--    font-size: 18px;-->
<!--    line-height: 21px;-->
<!--    letter-spacing: -0.45px;-->
<!--    color: #111111;-->
<!--  }-->
<!--}-->
<!--</style>-->
