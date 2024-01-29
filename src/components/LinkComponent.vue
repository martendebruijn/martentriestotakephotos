<script setup lang="ts">
export interface Props {
  url: string
}
defineProps<Props>()
</script>

<template>
  <a :href="url" class="text-sm text-indigo-700"><slot /></a>
</template>
