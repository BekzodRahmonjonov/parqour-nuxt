<template>
  <CommonModal
    v-bind="{ show }"
    :title="$t('contact_modal')"
    @close="closeModal()"
  >
    <div>
      <form>
        <FormGroup label="how_do_you_connect" for-text="full_name">
          <FormInput
            id="full_name"
            :placeholder="$t('enter_name')"
            class="py-[11px] !px-3 bg-gray lg:hover:!bg-blue-100/20"
          />
        </FormGroup>
      </form>
    </div>
  </CommonModal>
</template>

<script setup lang="ts">
interface Props {
  show: boolean
}

defineProps<Props>()
const emit = defineEmits<{
  (e: 'close'): void
}>()

function closeModal() {
  emit('close')
}
</script>

<style scoped></style>
