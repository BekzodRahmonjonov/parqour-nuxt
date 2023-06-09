<template>
  <div class="w-full">
    <FormInput
      :model-value="search"
      class="transition-300 !p-[10px]"
      :placeholder="$t('search')"
      :class="[searchTrigger ? 'opacity-100' : 'opacity-0']"
      input-class="pl-2 mt-0.5 dark:text-white"
      prefix-class="leading-130"
      :focus="searchTrigger"
      @update:modelValue="handleUpdateSearch"
    >
      <template #prefix>
        <span
          class="icon-magnifer text-base text-blue-200 dark:text-blue-100"
        />
      </template>
      <template #suffix>
        <button
          :class="{ '!opacity-100 !visible': search?.length }"
          class="inline-block py-1 px-2 text-sm leading-120 rounded-md bg-blue-200 hover:bg-blue-100 dark:bg-white/[0.06] dark:hover:bg-blue-100 text-white transition-300 opacity-0 invisible"
          @click="clear"
        >
          {{ $t('clear') }}
        </button>
      </template>
    </FormInput>
    <Transition name="fade" mode="out-in">
      <div v-if="searchTrigger && search" class="relative w-full">
        <div
          class="absolute top-3 left-0 w-full transition-200 bg-white dark:bg-blue-600 border border-solid border-white-500 dark:border-blue-200 rounded w-auto h-auto max-h-[320px] overflow-y-auto z-50 z-50 shadow-sm"
        >
          <template v-if="searchContent?.length > 0">
            <ul class="list">
              <SearchValue
                v-for="(value, index) of searchContent"
                :key="index"
                :search="search"
                :slug="value?.slug"
                :title="value?.title"
                :image="value?.img"
                :breadcrumb="value?.region"
              />
            </ul>
          </template>
          <template v-else>
            <SearchEmpty />
          </template>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { debounce } from '~/utils/index'

interface Props {
  search?: string
  searchTrigger?: boolean
  searchContent?: {
    title?: string
    region?: {}
  }[]
  wrapperClass?: string
}
const props = defineProps<Props>()
interface Emits {
  (e: 'handleUpdateSearch', value: string): void
  (e: 'clear'): void
}
const emit = defineEmits<Emits>()

function clear() {
  emit('clear')
}
const handleUpdateSearch = (value: string) => {
  debounce('search', () => {
    emit('handleUpdateSearch', value)
  })
}
</script>

<style>
.list li {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
}
.list li a {
  padding: 10px 10px 10px 0 !important;
}
.list li:first-child {
  border-radius: 4px 4px 0 0;
}

.list li:last-child {
  border-radius: 0 0 12px 12px;
}

.list li:hover {
  background-color: rgba(118, 129, 148, 0.11);
}

/*.list li:not(:last-child)::before {*/
/*  content: '';*/
/*  position: absolute;*/
/*  right: 0;*/
/*  bottom: 0;*/
/*  width: calc(100% - 16px);*/
/*  height: 1px;*/
/*  background-color: #eef0f4;*/
/*}*/
</style>
