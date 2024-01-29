<script setup lang="ts">
import type { IconType } from '@/types/CommonProps'

export interface Props {
  /** Icon name */
  icon: string
  /**
   * Icon type
   *
   * Default = `"fas"`
   *
   * Values:
   *
   * * `fas` - Font Awesome Solid
   * * `far` - Font Awesome Regular
   * * `fab` - Font Awesome Brands
   */
  type?: IconType
  /** Alternative text, MUST be filled if the icon is not accompanied with text */
  alt?: string
  /** Makes the icon monospace-width. ALWAYS use if you need to vertically align icons */
  fullWidth?: boolean
}

withDefaults(defineProps<Props>(), {
  type: 'fas',
  alt: '',
})
</script>

<template>
  <span class="base-icon">
    <FontAwesomeIcon
      :icon="[type, icon]"
      aria-hidden="true"
      :class="fullWidth ? 'fa-fw' : ''"
    />
    <span v-if="alt" class="sr-only">{{ alt }}</span>
  </span>
</template>
