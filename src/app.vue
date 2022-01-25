<template>
  <div class="w-full font-typography">
    <o-header />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { OHeader } from '@sb/components'

export default defineComponent({
  name: 'App',
  components: {
    OHeader,
  },
})
</script>
