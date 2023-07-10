<template>
  <CommonModal
    v-bind="{ show }"
    :title="$t('contact_modal')"
    @close="closeModal()"
  >
    <div>
      <form @submit.prevent="submitForm">
        <FormGroup
          label="how_do_you_connect"
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
        ><FormGroup
          label="phone_number"
          for-text="phone_number"
          class="!text-blue-200 mb-5"
        >
          <FormInput
            id="phone_number"
            v-model="form.values.phone"
            v-maska="'## ### ## ##'"
            :error="form.$v.value.phone.$error"
            placeholder="00 000 00 00"
            input-class="text-gray bg-gray lg:hover:!bg-blue-100/20 !text-blue-700 lg:hover:!bg-transparent !font-medium"
          >
            <template #prefix>
              <span
                class="mr-1.5 text-sm font-medium text-blue-700 dark:text-white leading-130"
                >+998</span
              >
            </template>
          </FormInput>
        </FormGroup>
        <FormGroup
          label="your_message"
          for-text="letter"
          class="!text-blue-200 mb-5"
        >
          <FormTextarea
            id="letter"
            v-model="form.values.description"
            :error="form.$v.value.description.$error"
            :placeholder="$t('enter_message')"
            input-class="text-gray bg-gray lg:hover:!bg-blue-100/20 !text-blue-700 lg:hover:!bg-transparent !font-medium min-h-[120px]"
          />
        </FormGroup>
        <VueRecaptcha ref="recaptcha" @verify="onVerify" @expired="onExpired" />
        <CommonButton
          class="mt-6 w-full py-3 !bg-blue-200 !text-white !font-medium !text-base !leading-125"
          :text="$t('submit')"
          :button-type="captchaToken || success ? undefined : 'gray'"
          :disabled="captchaToken || success ? false : true"
          button-class="rounded-lg"
          :class="{
            'pointer-events-none disabled:!bg-blue-200/10 disabled:hover:bg-blue-200/10 disabled:!text-gray-200':
              !captchaToken && !success,
          }"
          :type="success ? 'button' : 'submit'"
          @click="clickToButton"
        />
      </form>
    </div>
  </CommonModal>
</template>

<script setup lang="ts">
import { required } from '@vuelidate/validators'
import { VueRecaptcha } from 'vue3-recaptcha-v2'

import { IContactApplication } from '~/types/contact'

const success = ref(false)
const router = useRouter()

const captchaToken = ref('')
const onVerify = (token: string) => {
  captchaToken.value = token
}
const onExpired = () => {
  captchaToken.value = ''
}

const form = useForm<IContactApplication>(
  {
    full_name: '',
    phone: '',
    description: '',
  },
  {
    full_name: { required },
    phone: { required, isValidPhone },
    description: { required },
  }
)
const submitForm = () => {
  form.$v.value.$touch()
  if (form.$v.value.$invalid) return
  success.value = true
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
const emit = defineEmits<{
  (e: 'close'): void
}>()

function closeModal() {
  form.values.description = ''
  form.values.full_name = ''
  form.values.phone = ''
  form.$v.value.$reset()
  success.value = false
  captchaToken.value = ''
  emit('close')
}
</script>
