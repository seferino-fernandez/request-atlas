<script setup lang="ts">
import { useAttrs } from 'vue'
import { cn } from '@/lib/utils'

defineProps<{
  className?: string
}>()

const attrs = useAttrs()
</script>

<template>
  <dd :class="cn(className, 'pb-3 pt-1 text-foreground sm:border-t sm:border-border sm:py-3 dark:text-foreground dark:sm:border-border sm:[&:nth-child(2)]:border-none')" v-bind="attrs">
    <slot />
  </dd>
</template>
