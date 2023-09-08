<template>
  <div>
    <pre>{{ error }}</pre>
  </div>
</template>
<script setup lang="ts">


interface Props {
  error: object
}


defineProps<Props>()

</script>
