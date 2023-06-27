<template>
  <div>
    <h2 class="text-gray-900 mt-[24px] text-[20px] font-bold leading-relaxed">
      Комментарии
    </h2>
    <form @submit.prevent="submitForm">
      <div class="relative">
        <FormGroup class="!text-blue-200 mb-5">
          <FormTextarea
            id="letter"
            v-model="form.values.description"
            :error="form.$v.value.description.$error"
            :placeholder="$t('Комментарии...')"
            :class="{
              'text-gray bg-gray lg:hover:!bg-blue-100/20 !text-blue-700 lg:hover:!bg-transparent !font-medium min-h-[120px]':
                isFocused,
              'h-[20px]': !isFocused,
            }"
            @focus="isFocused = true"
            @blur="isFocused = false"
          />
        </FormGroup>

        <CommonButton
          class="!absolute bottom-3 !text-[#919299] right-[150px] py-3 !font-normal !bg-transparent !text-[12px] !leading-125"
          :text="$t('submit')"
          button-class="rounded-lg"
          v-show="isFocused"
        />

        <CommonButton
          class="!absolute bottom-3 right-[12px] py-3 !bg-[#48A4E3] !text-white !font-medium !text-base !leading-125"
          :text="$t('submit')"
          button-class="rounded-lg"
          v-show="isFocused"
        />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { required } from '@vuelidate/validators'
import { useForm } from '~/composables/useForm'

const success = ref(false)
const form = useForm(
  {
    description: '',
  },
  {
    description: { required },
  }
)

const isFocused = ref(false)

const submitForm = () => {
  form.$v.value.$touch()
  console.log(form.$v.value)
  if (form.$v.value.$invalid) return
  success.value = true
}
</script>

<style scoped></style>
