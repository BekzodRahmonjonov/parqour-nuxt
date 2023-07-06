<template>
  <div>
    <div v-if="showModal" class="modal flex flex-col bg-white">
      <div class="bg-blue-700 w-full max-w-[382px] rounded-xl">
        <div
          class="flex items-center text-xl justify-between pb-4 border-b border-blue-100/20 px-5 py-4"
        >
          <h3 class="text-xl font-bold text-white">Напишите нам</h3>
          <i
            class="icon-close text-2xl text-blue-100 cursor-pointer hover:text-red-600 duration-300"
            @click="hideModal"
          ></i>
        </div>
        <form class="px-5 py-4">
          <div class="flex flex-col">
            <label class="text-sm font-semibold text-blue-100 mb-2"
              >Как вам обращаться?</label
            >
            <FormInput
              placeholder="Введите имя"
              input-class=" cursor-pointer"
            />
          </div>
          <div class="flex flex-col mt-5">
            <label class="text-sm font-semibold text-blue-100 mb-2"
              >Номер телефона</label
            >
            <FormInput
              v-maska="'## ### ## ##'"
              input-class=" cursor-pointer"
              placeholder="00 000 00 00"
              prefix-class="text-white mr-1 font-normal text-sm"
            >
              <template #prefix> +998 </template>
            </FormInput>
          </div>
          <div class="flex flex-col mt-5">
            <label class="text-sm font-semibold text-blue-100 mb-2"
              >Ваше обращение</label
            >
            <FormTextarea
              :maxlength="250"
              placeholder="Введите обращение"
              input-class="h-24 cursor-pointer"
            />
          </div>
          <CommonButton button-class="w-full mt-5" :disabled="true">{{
            $t('send')
          }}</CommonButton>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const showModal = ref(false)
const form = {
  title: '',
  comment: '',
  page: '',
}

onMounted(() => {
  if (process.client) {
    document.body.addEventListener('keypress', handleKeypress)
    form.page = document.location.href
  }
})

watch(
  () => showModal.value,
  () => {
    const body = document.body
    if (showModal.value) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = 'auto'
    }
  }
)

const handleKeypress = (e) => {
  if (e.code === 'Enter' && e.ctrlKey) {
    if (!showModal.value) {
      let selectedText = ''

      if (window.getSelection) {
        selectedText = window.getSelection().toString()
      } else if (document.getSelection) {
        selectedText = document.getSelection().toString()
      } else if (document.selection) {
        selectedText = document.selection.createRange().text
      }

      form.title = selectedText
      showModal.value = true
    }
  }
}

const hideModal = () => {
  showModal.value = false
}

const onSubmit = () => {}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(25, 31, 46, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  max-width: 400px;
}

.modal-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.modal-head h6 {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}

.modal-body {
  margin-bottom: 20px;
}

.modal-body label {
  display: block;
  margin-bottom: 5px;
}

.modal-body input,
.modal-body textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
}

.modal-actions button {
  padding: 8px 16px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  background-color: #063f62;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
}

.btn-close {
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
}

.btn-close svg {
  width: 20px;
  height: 20px;
}

/* Additional styles can be added as per your requirement */
</style>

<!--      <div class="modal-head">-->
<!--        <h6>{{ $t('report_bug') }}</h6>-->
<!--        <button class="btn btn-close" @click="hideModal">-->
<!--          <svg-->
<!--            width="20"-->
<!--            height="20"-->
<!--            viewBox="0 0 20 20"-->
<!--            fill="none"-->
<!--            xmlns="http://www.w3.org/2000/svg"-->
<!--          >-->
<!--            <path-->
<!--              d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM13.5303 6.46967L13.4462 6.39705C13.1852 6.2034 12.827 6.20101 12.5636 6.38988L12.4697 6.46967L10 8.939L7.53033 6.46967L7.44621 6.39705C7.18522 6.2034 6.82701 6.20101 6.56362 6.38988L6.46967 6.46967L6.39705 6.55379C6.2034 6.81478 6.20101 7.17299 6.38988 7.43638L6.46967 7.53033L8.939 10L6.46967 12.4697L6.39705 12.5538C6.2034 12.8148 6.20101 13.173 6.38988 13.4364L6.46967 13.5303L6.55379 13.6029C6.81478 13.7966 7.17299 13.799 7.43638 13.6101L7.53033 13.5303L10 11.061L12.4697 13.5303L12.5538 13.6029C12.8148 13.7966 13.173 13.799 13.4364 13.6101L13.5303 13.5303L13.6029 13.4462C13.7966 13.1852 13.799 12.827 13.6101 12.5636L13.5303 12.4697L11.061 10L13.5303 7.53033L13.6029 7.44621C13.7966 7.18522 13.799 6.82701 13.6101 6.56362L13.5303 6.46967L13.4462 6.39705L13.5303 6.46967Z"-->
<!--              fill="#063F62"-->
<!--            />-->
<!--          </svg>-->
<!--        </button>-->
<!--      </div>-->

<!--      <div class="modal-my-body bg-blue-700">-->
<!--        <form @submit.prevent="onSubmit">-->
<!--          <input id="input-url" v-model="form.page" type="hidden" />-->

<!--          <div class="form-group">-->
<!--            <label for="input-1">{{ $t('error') }}</label>-->
<!--            <input-->
<!--              id="input-1"-->
<!--              v-model="form.title"-->
<!--              type="text"-->
<!--              required-->
<!--              :placeholder="$t('error')"-->
<!--            />-->
<!--          </div>-->

<!--          <div class="form-group">-->
<!--            <label for="textarea">{{ $t('your_comment') }}</label>-->
<!--            <textarea-->
<!--              id="textarea"-->
<!--              v-model="form.comment"-->
<!--              :placeholder="$t('your_comment')"-->
<!--            ></textarea>-->
<!--          </div>-->

<!--          <button type="submit" class="btn btn-blue">{{ $t('send') }}</button>-->
<!--        </form>-->
<!--      </div>-->
