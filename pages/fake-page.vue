<template>
  <div>
    <ModalContactModal :show="contactModal" @close="contactModal = false" />

    <CommonButton :text="'openModal'" @click="contactModal = true" />
  </div>
</template>

<script setup lang="ts">
const contactModal = ref(false)
</script>
