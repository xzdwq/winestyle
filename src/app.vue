<template>
  <div class="w-full font-typography" :class="{ 'debug-screens': development }">
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
  setup() {
    const development = process.env.NODE_ENV === 'development'
    return {
      development,
    }
  },
})
</script>
