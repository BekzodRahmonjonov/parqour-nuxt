<template>
  <CommonModal
    v-bind="{ show }"
    :title="$t('auth_modal_title')"
    @close="closeModal()"
  >
    <CommonTab v-model="active" class="!w-full mb-5" :list="tabs" />
    <AuthLogin v-show="active === 'to_come_in'" @close="modalsClose" />
    <AuthRegistor
      v-show="active === 'registration'"
      @tabsChanges="tabsChanges"
    />
  </CommonModal>
</template>

<script setup lang="ts">
interface Props {
  show: boolean
}

defineProps<Props>()
const emit = defineEmits(['close'])
const { t } = useI18n()
const active = ref('to_come_in')
const tabs = [
  {
    label: t('to_come_in'),
    value: 'to_come_in',
  },
  {
    label: t('registration'),
    value: 'registration',
  },
]
function closeModal() {
  emit('close')
}
function tabsChanges() {
  active.value = 'to_come_in'
}
function modalsClose() {
  emit('close')
}
</script>

<style scoped></style>
