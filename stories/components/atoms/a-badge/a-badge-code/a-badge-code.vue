v<template>
  <div class="text-grey-500 flex items-center justify-center text-sm">
    {{ label }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ABadgeCode',
  setup () {
    const label = 'Артикул: 123456'
    return {
      label,
    }
  },
})
</script>
