<script setup lang="ts">
import { computed } from 'vue'

export interface Props {
  /** Name of the city, e.g. "Brussels" */
  city: string
  /** Name of the country, e.g. "Belgium" */
  country: string
  /** Date as ISO string */
  date: string
  /** Subtitle, use when either the name of a city or country is too long to display */
  subtitle?: string
}
const props = withDefaults(defineProps<Props>(), {
  subtitle: undefined,
})

/** Convert ISO string to a display date in the form as 01 JAN 2024 */
const displayDate = computed((): string =>
  new Date(props.date).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }),
)
</script>

<template>
  <header
    class="px-4 py-2 uppercase transition-colors border-t-2 border-black header-component hover:bg-lime-100"
  >
    <div class="inline-flex justify-between w-full align-top">
      <h2
        class="text-3xl font-bold md:text-4xl lg:text-6xl xl:text-7xl max-w-[75%] truncate leading-none"
      >
        {{ city }}
      </h2>
      <div class="text-right">
        <div class="text-xl leading-none lg:text-2xl">{{ country }}</div>
        <time class="text-sm leading-none lg:text-lg" :datetime="date">{{
          displayDate
        }}</time>
      </div>
      <p v-if="subtitle">{{ subtitle }}</p>
    </div>
  </header>
</template>
