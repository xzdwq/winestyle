<template>
  <div
    class="rounded-button-base base:w-badge-sale-base base:h-badge-sale-base sm:w-badge-sale-sm sm:h-badge-sale-sm xs:w-badge-sale-xs xs:h-badge-sale-base m-img-badgesale-base flex items-center justify-center bg-primary-600 font-base-bold text-white base:text-2xl sm:text-2xl xs:text-lg"
  >
    {{ label }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ABadgeSale',
  setup() {
    const label = '-24%'
    return {
      label,
    }
  },
})
</script>
