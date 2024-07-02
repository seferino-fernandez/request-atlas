<script setup lang="ts">
import { useAttrs } from 'vue'
import { cn } from '@/lib/utils'

defineProps<{
  className?: string
}>()

const attrs = useAttrs()
</script>

<template>
  <dt :class="cn(className, 'col-start-1 border-t border-border pt-3 text-muted first:border-none sm:border-t sm:border-border sm:py-3 dark:border-border dark:text-muted sm:dark:border-border')" v-bind="attrs">
    <slot />
  </dt>
</template>
