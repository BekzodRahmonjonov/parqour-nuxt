<template>
  <div>
    <div v-if="showModal" class="modal flex flex-col bg-white">
      <div class="bg-white dark:bg-blue-700 w-full max-w-[382px] rounded-xl">
        <div
          class="flex items-center text-xl justify-between pb-4 border-b border-blue-100/20 px-5 py-4"
        >
          <h3 class="text-xl font-bold text-blue-700 dark:text-white">
            Напишите нам
          </h3>
          <i
            class="icon-close text-2xl text-blue-100 cursor-pointer hover:text-blue-200 dark:hover:text-red-600 duration-300"
            @click="hideModal"
          ></i>
        </div>
        <form class="px-5 py-4" @submit.prevent="submitForm">
          <div class="flex flex-col">
            <label
              class="text-sm font-semibold text-blue-200 dark:text-blue-100 mb-2"
              >Как вам обращаться?</label
            >
            <FormInput
              v-model="form.values.full_name"
              :error="form.$v.value.full_name.$error"
              placeholder="Введите имя"
              input-class=" cursor-pointer"
            />
          </div>
          <div class="flex flex-col mt-5">
            <label
              class="text-sm font-semibold text-blue-200 dark:text-blue-100 mb-2"
              >Номер телефона</label
            >
            <FormInput
              v-model="form.values.phone"
              v-maska="'## ### ## ##'"
              :error="form.$v.value.phone.$error"
              input-class=" cursor-pointer"
              placeholder="00 000 00 00"
              prefix-class="text-blue-700 dark:text-white mr-1 font-normal text-sm"
            >
              <template #prefix> +998 </template>
            </FormInput>
          </div>
          <div class="flex flex-col mt-5">
            <label
              class="text-sm font-semibold text-blue-200 dark:text-blue-100 mb-2"
              >Ваше обращение</label
            >
            <FormTextarea
              v-model="form.values.description"
              :error="form.$v.value.description.$error"
              :maxlength="250"
              placeholder="Введите обращение"
              input-class="h-24 cursor-pointer"
            />
          </div>
          <CommonButton
            button-class="w-full mt-5"
            :text="$t('submit')"
            :button-type="success ? undefined : 'gray'"
            :type="success ? 'button' : 'submit'"
            @click="submitForm"
            >{{ $t('send') }}</CommonButton
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { required } from '@vuelidate/validators'
import { onMounted, ref } from 'vue'

import { IContactApplication } from '~/types/contact'

const showModal = ref(false)

const form = useForm<IContactApplication>(
  {
    full_name: '',
    phone: '',
    description: '',
  },
  {
    full_name: { required },
    phone: { required },
    description: { required },
  }
)
const submitForm = () => {
  form.$v.value.$touch()
  if (form.$v.value.$invalid) return
  success.value = true
}
const success = ref(false)

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
