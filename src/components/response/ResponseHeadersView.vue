<script setup lang="ts">
import { computed, ref } from 'vue'
import { useResponseStore } from '@/stores/response'

import type { DataListItem } from '@/components/common/DataList.vue'
import DataList from '@/components/common/DataList.vue'

const responseStore = useResponseStore()
const responseHeaders = ref(responseStore.headers)
const headersList = computed(() => {
  return responseHeaders.value
    ? Object.entries(responseHeaders.value).map(([key, value]) => ({ key, value }))
    : []
})

responseStore.$subscribe(async (_mutation, state) => {
  if (state.headers) {
    responseHeaders.value = state.headers
  }
}, { detached: true })
</script>

<template>
  <div class="flex h-dvh bg-background p-2 justify-between gap-2 rounded-lg">
    <DataList :data="headersList as DataListItem[]" />
  </div>
</template>
