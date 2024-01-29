<script setup lang="ts">
import { computed } from 'vue'

export interface Props {
  /** ID of dropdown */
  i: number
  /** Name of the city, e.g. "Brussels" */
  city: string
  /** Name of the country, e.g. "Belgium" */
  country: string
  /** Date as ISO string */
  date: string
  /** Subtitle, use when either the name of a city or country is too long to display */
  subtitle?: string
  /** Is the dropdown open or not? */
  open: boolean
}

export interface Emits {
  (e: 'handleToggle', id: number): void
}

const props = withDefaults(defineProps<Props>(), {
  subtitle: undefined,
})
const emit = defineEmits<Emits>()

/** Convert ISO string to a display date in the form as 01 JAN 2024 */
const displayDate = computed((): string =>
  new Date(props.date).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }),
)

/** Emit the ID of this dropdown */
const handleToggle = (event: Event): void => {
  const { target } = event
  if (!(target instanceof HTMLDetailsElement)) return
  if (target.open) emit('handleToggle', props.i)
}
</script>

<template>
  <details
    :open="open"
    class="transition-colors border-t-2 border-black open:bg-amber-100"
    @toggle="handleToggle"
  >
    <summary
      class="py-2 uppercase transition-colors cursor-pointer select-none hover:bg-amber-100"
    >
      <div class="inline-flex justify-between w-full align-top">
        <h2
          class="text-3xl font-bold md:text-4xl lg:text-6xl xl:text-7xl max-w-[75%] truncate leading-none"
        >
          {{ city }}
        </h2>
        <div class="text-right">
          <div class="text-xl leading-none lg:text-2xl whitespace-nowrap">
            {{ country }}
          </div>
          <time class="text-sm leading-none lg:text-lg" :datetime="date">{{
            displayDate
          }}</time>
        </div>
        <p v-if="subtitle">{{ subtitle }}</p>
      </div>
    </summary>
    <div class="pt-2 pb-8">
      <slot />
    </div>
  </details>
</template>

<style scoped>
details > * {
  @apply px-4;
}
</style>
