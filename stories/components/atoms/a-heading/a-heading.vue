<template>
  <div>
    {{ label }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AHeading',
  setup() {
    const label =
      'Chateau de la Turmeliere, Muscadet Sevre et Maine Sur Lie AOP, 2020'
    return {
      label,
    }
  },
})
</script>
