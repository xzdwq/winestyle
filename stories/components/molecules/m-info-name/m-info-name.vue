<template>
  <div class="text-3xl font-base-bold">
    <slot name="info-name" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MInfoName',
  setup () {
    return {
    }
  },
})
</script>
