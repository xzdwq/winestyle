<template>
  <button
    type="button"
    class="font-bold duration-300"
    :class="{
      'rounded-button-base px-button-x-base py-button-y-base': size === 'base',
      'rounded-button-sm px-button-x-sm py-button-y-sm': size === 'sm',
      'cursor-not-allowed border border-solid border-grey-200 text-grey-600':
        disabled,
      'cursor-pointer': !disabled,
      'border border-solid border-primary-400 bg-primary-400 text-white hover:border-primary-900 hover:bg-primary-900':
        primary && !disabled,
      'border border-solid border-grey-400 bg-white text-black hover:border-grey-600':
        outline && !disabled,
    }"
    :style="style"
    @click="onClick"
  >
    <div
      class="flex items-center justify-center"
      :class="{
        'min-w-button-base min-h-button-base': size === 'base',
        'min-w-button-sm min-h-button-sm': size === 'sm',
      }"
    >
      {{ label }}
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'AButton',
  props: {
    label: {
      type: String,
      default: '',
    },
    primary: {
      type: Boolean,
    },
    outline: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'base',
    },
    backgroundColor: {
      type: String,
      default: '',
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    const style = ref(`background: ${props.backgroundColor};`)
    const onClick = () => emit('click')

    return {
      style,
      onClick,
    }
  },
})
</script>
