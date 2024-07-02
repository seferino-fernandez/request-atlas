<script setup lang="ts">
import { useAttrs } from 'vue'
import { cn } from '@/lib/utils'

defineProps<{
  className?: string
}>()

const attrs = useAttrs()
</script>

<template>
  <dl :class="cn(className, 'grid grid-cols-1 text-base/6 sm:grid-cols-[min(50%,theme(spacing.80))_auto] sm:text-sm/6')" v-bind="attrs">
    <slot />
  </dl>
</template>
