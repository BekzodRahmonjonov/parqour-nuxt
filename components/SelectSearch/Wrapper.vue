<template>
  <div class="w-full">
    <FormInput
      :model-value="search"
      class="transition-200 !px-2.5 py-[10px]"
      :placeholder="$t('search')"
      :class="[
        searchTrigger
          ? 'max-w-full opacity-100'
          : 'max-w-0 md:max-w-full opacity-0 lg:opacity-100',
      ]"
      input-class="pl-2 pr-2 mt-0.5 dark:text-white "
      prefix-class="leading-130"
      :focus="searchTrigger"
      @update:model-value="handleUpdateSearch"
    >
      <template #prefix>
        <span
          class="icon-magnifer text-base text-blue-200 dark:text-blue-100"
        />
      </template>
      <template #suffix>
        <button
          :class="{ '!opacity-100 !visible': search?.length }"
          class="text-xl leading-5 icon-close text-gray-200 hover:text-blue-150 dark:hover:text-white transition-200 opacity-0 invisible"
          @click="clear"
        />
      </template>
    </FormInput>
    <Transition name="fade" mode="out-in">
      <div v-if="(searchTrigger && search) || search" class="w-full">
        <div
          class="absolute md:!left-0 md:!w-full !w-[87.9%] sm:!w-[90%] transition-200 bg-white dark:bg-blue-600 border border-solid border-white-500 dark:border-blue-200 rounded w-full max-h-[320px] overflow-y-auto z-50"
        >
          <template v-if="searchContent?.length > 0">
            <ul class="list">
              <SelectSearchValue
                v-for="(value, index) of searchContent"
                :key="index"
                :search="search"
                :title="value?.name"
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
interface Props {
  search?: string
  searchTrigger?: boolean
  searchContent?: {
    name?: string
  }[]
  wrapperClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  searchTrigger: true,
})

interface Emits {
  (e: 'handle-update-search', value: string): void
  (e: 'clear'): void
}

const emit = defineEmits<Emits>()

function clear() {
  emit('clear')
}
const handleUpdateSearch = (value: string) => {
  debounce('search', () => {
    emit('handle-update-search', value)
  })
}
</script>

<style scoped>
.fade-enter-active {
  animation: Fade 0.2s ease;
}
.fade-leave-active {
  animation: Fade 0.2s ease reverse;
}

@keyframes Fade {
  from {
    transform: translateY(-5px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.slideDown-enter-active {
  animation: slideDown 0.2s linear;
}
.slideDown-leave-active {
  animation: slideDown 0.2s linear reverse;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* slightly transparent fallback */
.backdrop-blur {
  background-color: rgba(7, 9, 28, 0.12);
}

/* if backdrop support: very transparent and blurred */
@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .backdrop-blur {
    background-color: rgba(7, 9, 28, 0.12);
    -webkit-backdrop-filter: blur(30px);
    backdrop-filter: blur(30px);
  }
}
</style>
