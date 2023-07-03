<template>
  <div>
    <FormInput :placeholder="$t('search')" :model-value="search">
      <template #prefix>
        <span
          class="icon-magnifer text-base text-blue-200 dark:text-blue-100 mr-2"
        />
      </template>
    </FormInput>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const search = ref('')
</script>
