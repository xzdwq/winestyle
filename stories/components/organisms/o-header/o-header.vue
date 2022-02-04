<template>
  <div class="w-full bg-grey-100">
    <div class="flex items-center justify-center base:h-152 sm:h-152 xs:h-56">
      <div
        class="bg-[url('@/assets/HEADER.png')] bg-cover bg-center bg-no-repeat base:h-[56.37px] base:w-[322.85px] sm:h-[45.09px] sm:w-[258.28px] xs:h-[28.18px] xs:w-[161.43px]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'OHeader',
  setup() {
    return {}
  },
})
</script>
