<template>
  <div class="w-full">
    <!-- Article base -->
    <div class="w-full base:h-media-base sm:h-media-sm xs:h-media-xs flex items-center justify-end">
      <a-badge-code class="xs:hidden" />
      <a-share class="xs:hidden text-grey-500 pl-4 base:w-icon-base base:h-icon-base sm:w-icon-sm sm:h-icon-sm" />
    </div>
    <div class="flex flex-1">
      <!-- Product image -->
      <div class="relative flex flex-1 base:mr-r-product-img-base sm:mr-r-product-img-base">
        <a-image />
        <!-- Badge sale -->
        <a-badge-sale class="absolute base:top-0 base:right-0 sm:top-0 sm:right-0 xs:bottom-0 xs:left-0" />
      </div>
      <!-- Info base -->
      <div class="xs:hidden base:flex flex-row base:flex-2 sm:flex-1">
        <!-- Heading -->
        <div class="w-full">
          <m-info-name class="flex-1 sm:max-w-info sm:min-w-info">
            <template #info-name>
              <a-heading />
            </template>
          </m-info-name>
          <!-- Rating -->
          <div>Rating 23 отзыва</div>
          <!-- Offer box base -->
          <m-offer-box class="base:hidden flex-1" />
          <!-- Description -->
          <m-info-description />
        </div>
        <!-- Offer box base -->
        <div class="base:pl-2">
          <m-offer-box class="sm:hidden flex-1 max-w-offerbox min-w-offerbox" />
        </div>
      </div>
    </div>
    <!-- Info xs -->
    <div class="base:hidden sm:hidden">
      <!-- Heading -->
      <a-heading class="flex flex-1 text-3xl font-base-bold" />
      <!-- Rating -->
      <div>Rating 23 отзыва</div>
      <!-- Article xs -->
      <div class="w-full sm:hidden base:h-media-base sm:h-media-sm xs:h-media-xs flex items-center justify-end">
        <a-badge-code class="base:hidden" />
        <a-share class="base:hidden text-grey-500 pl-4 xs:w-icon-xs xs:h-icon-xs" />
      </div>
      <!-- Offer box -->
      <m-offer-box class="flex-1" />
      <!-- Description -->
      <m-info-description />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import AImage from '@sb/components/atoms/a-image/a-image.vue'
import ABadgeSale from '@sb/components/atoms/a-badge/a-badge-sale/a-badge-sale.vue'
import ABadgeCode from '@sb/components/atoms/a-badge/a-badge-code/a-badge-code.vue'
import AShare from '@sb/components/atoms/a-icons/a-share.vue'
import MInfoName from '@sb/components/molecules/m-info-name/m-info-name.vue'
import AHeading from '@sb/components/atoms/a-heading/a-heading.vue'
import MOfferBox from '@sb/components/molecules/m-offer-box/m-offer-box.vue'
import MInfoDescription from '@sb/components/molecules/m-info-description/m-info-description.vue'

export default defineComponent({
  name: 'OProductDetails',
  components: {
    AImage,
    ABadgeSale,
    ABadgeCode,
    AShare,
    MInfoName,
    AHeading,
    MOfferBox,
    MInfoDescription,
  },
  setup () {
    return {
    }
  },
})
</script>
