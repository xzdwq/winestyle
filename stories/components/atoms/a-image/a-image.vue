<template>
  <div
    class="h-product-img-base scale:pb-[100%] scale:h-0 w-full bg-[url('@/assets/image_7074.png')] bg-contain bg-center bg-no-repeat"
  >
    <img src="@/assets/image_7074.png" class="h-0 w-0" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AImage',
  props: {
    url: {
      type: String,
      default: null,
    },
  },
  setup() {
    return {}
  },
})
</script>
