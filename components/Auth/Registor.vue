<template>
  <div>
    <form @submit.prevent="submitForm">
      <FormGroup
          label="full_name"
          for-text="full_name"
          class="!text-blue-200 mb-5"
      >
        <FormInput
            id="full_name"
            v-model="form.values.full_name"
            :error="form.$v.value.full_name.$error"
            :placeholder="$t('enter_name')"
            input-class="text-gray dark:text-white bg-gray lg:hover:!bg-blue-100/20 !text-blue-700 lg:hover:!bg-transparent !font-medium"
        /> </FormGroup
      >
      <FormGroup
          label="phone_or_email"
          for-text="phone_or_email"
          class="!text-blue-200 mb-5"
      >
        <FormInput
            id="phone_or_email"
            v-model="form.values.phoneOrEmail"
            :error="form.$v.value.phoneOrEmail.$error"
            :placeholder="$t('phone_or_email')"
            input-class="text-gray dark:text-white bg-gray lg:hover:!bg-blue-100/20 !text-blue-700 lg:hover:!bg-transparent !font-medium"
        /> </FormGroup
      >
      <FormGroup
          label="password"
          for-text="password"
          class="!text-blue-200 mb-5"
      >
        <FormInput
            id="password"
            v-model="form.values.password"
            :error="form.$v.value.password.$error"
            :placeholder="$t('password')"
            input-class="text-gray dark:text-white bg-gray lg:hover:!bg-blue-100/20 !text-blue-700 lg:hover:!bg-transparent !font-medium"
        /> </FormGroup
      >
      <!--        <VueRecaptcha ref="recaptcha" @verify="onVerify" @expired="onExpired" />-->
      <CommonButton
          class="mt-6 w-full py-3 !bg-blue-200 !text-white !font-medium !text-base !leading-125"
          :text="$t('submit')"
          :button-type="captchaToken || success ? undefined : 'gray'"
           button-class="rounded-lg"
          :type="'submit'"
          :loading="loading"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import { required } from '@vuelidate/validators'
import { VueRecaptcha } from 'vue3-recaptcha-v2'
import {useAuthStore} from '~/store/auth'

import { IContactApplication } from '~/types/contact'
import {IAuthRegister} from "~/types/auth";
import {isValidPhoneOrEmail} from "~/utils";
const loading = ref(false)
const success = ref(false)
const router = useRouter()
const authStore = useAuthStore()
const regPhone = /^([+]?[9]{2}[8][0-9]{2}[0-9]{7})$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const captchaToken = ref('')
const onVerify = (token: string) => {
  captchaToken.value = token
}
const onExpired = () => {
  captchaToken.value = ''
}

const form = useForm<IAuthRegister>(
    {
      full_name: '',
      phoneOrEmail: '',
      password: '',
    },
    {
      full_name: { required },
      phoneOrEmail: { required, isValidPhoneOrEmail },
      password: { required },
    }
)
const submitForm = async () => {
  try {
    form.$v.value.$touch()
    loading.value = true;
    if (!form.$v.value.$invalid) {
      let sendData:any = {...form.values};
      if(emailRegex.test(sendData.phoneOrEmail)) {
        sendData['email'] = sendData.phoneOrEmail;
      } else if (regPhone.test(sendData.phoneOrEmail)) {
        sendData['phone_number'] = sendData.phoneOrEmail
      }
      delete sendData.phoneOrEmail;
      const resData =await authStore.userRegistor(sendData);
      loading.value = false
      emit('tabsChanges')
    }
    loading.value = false;
  } catch (e) {
    loading.value = false
    // throw new Error(e)
  }



}
const clickToButton = () => {
  if (success.value) {
    closeModal()
  }
}

interface Props {
  show: boolean
}

defineProps<Props>()
const emit = defineEmits(['tabsChanges'])

function closeModal() {
  form.values.full_name = ''
  form.values.phone = ''
  form.$v.value.$reset()
  success.value = false
  captchaToken.value = ''
  emit('close')
}
</script>

<style scoped></style>
