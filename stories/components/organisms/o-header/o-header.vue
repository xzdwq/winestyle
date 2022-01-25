<template>
  <div class="w-full bg-grey-100">
    <div class="base:h-header-base sm:h-header-sm xs:h-header-xs flex items-center justify-center">
      <div class="bg-[url('@/assets/HEADER.png')] bg-no-repeat bg-center bg-cover base:w-[322.85px] base:h-[56.37px] sm:w-[258.28px] sm:h-[45.09px] xs:w-[161.43px] xs:h-[28.18px]" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'OHeader',
  setup () {
    return {
    }
  },
})
</script>
