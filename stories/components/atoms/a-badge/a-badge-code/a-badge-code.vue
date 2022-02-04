<template>
  <div class="flex items-center justify-center text-sm text-grey-500">
    {{ label }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ABadgeCode',
  setup() {
    const label = 'Артикул: 123456'
    return {
      label,
    }
  },
})
</script>
