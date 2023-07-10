<template>
  <div>
    <form @submit.prevent="submitForm">
      <FormGroup
        label="phone_or_email"
        for-text="full_name"
        class="!text-blue-200 mb-5"
      >
        <FormInput
          id="full_name"
          v-model="form.values.phoneOrEmail"
          :error="form.$v.value.phoneOrEmail.$error"
          :placeholder="$t('phone_or_email_placeholder')"
          input-class="text-gray dark:text-white bg-gray lg:hover:!bg-blue-100/20 !text-blue-700 lg:hover:!bg-transparent !font-medium"
        />
      </FormGroup>
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
        />
      </FormGroup>

      <!--        <VueRecaptcha ref="recaptcha" @verify="onVerify" @expired="onExpired" />-->
      <CommonButton
        class="mt-6 w-full py-3 !bg-blue-200 !text-white !font-medium !text-base !leading-125"
        :text="$t('submit')"
        :button-type="captchaToken || success ? undefined : 'gray'"
        button-class="rounded-lg"
        :type="'submit'"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import { required } from '@vuelidate/validators'
import { VueRecaptcha } from 'vue3-recaptcha-v2'

import { useHomeStore } from '~/store'
import { useAuthStore } from '~/store/auth'
import { IAuthLogin } from '~/types/auth'
import { isValidPhoneOrEmail } from '~/utils'

const regPhone = /^([+]?[9]{2}[8][0-9]{2}[0-9]{7})$/
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const success = ref(false)
const router = useRouter()
const authStore = useAuthStore()
const homeStore = useHomeStore()
const captchaToken = ref('')
const onVerify = (token: string) => {
  captchaToken.value = token
}
const onExpired = () => {
  captchaToken.value = ''
}

const form = useForm<IAuthLogin>(
  {
    password: '',
    phoneOrEmail: '',
  },
  {
    password: { required },
    phoneOrEmail: { required, isValidPhoneOrEmail },
  }
)
const submitForm = async () => {
  form.$v.value.$touch()
  try {
    if (!form.$v.value.$invalid) {
      const sendData: any = { ...form.values }
      if (emailRegex.test(sendData.phoneOrEmail)) {
        sendData.email = sendData.phoneOrEmail
      } else if (regPhone.test(sendData.phoneOrEmail)) {
        sendData.phone_number = sendData.phoneOrEmail
      }
      delete sendData.phoneOrEmail
      const {access, refresh} = await authStore.userLogin(sendData)
      // eslint-disable-next-line camelcase
      const access_token:any = useCookie('access_token')
      // eslint-disable-next-line camelcase
      access_token.value = access
      // eslint-disable-next-line camelcase
      const refresh_token:any = useCookie('refresh_token')
      // eslint-disable-next-line camelcase
      refresh_token.value = refresh
      await homeStore.fetchMe()
      emit('close')
    }
  } catch (e: any) {
    emit('close')
    throw new Error(e)
  }
}

interface Props {
  show: boolean
}

defineProps<Props>()
const emit = defineEmits<{
  (e: 'close'): void
}>()

function closeModal() {
  form.values.password = ''
  form.values.phoneOrEmail = ''
  form.$v.value.$reset()
  success.value = false
  captchaToken.value = ''
  emit('close')
}
</script>
