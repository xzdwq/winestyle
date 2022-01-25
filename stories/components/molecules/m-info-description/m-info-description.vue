<template>
  <div class="base:text-base sm:text-base xs:text-sm">
    {{ text }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MInfoDescription',
  setup () {
    const text = `Белое сухое вино, изготовленное из винограда сорта Мелонь де 
                  Бургонь, который произрастает на виноградниках в апелласьоне 
                  Мюскаде Севр э Мен. Сбор урожая проводится только по 
                  достижении ягодами оптимальной зрелости.`
    return {
      text,
    }
  },
})
</script>
