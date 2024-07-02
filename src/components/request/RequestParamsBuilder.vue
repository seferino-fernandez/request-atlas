<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRequestStore } from '@/stores/request'

import type { DataListItem } from '@/components/common/DataList.vue'
import DataList from '@/components/common/DataList.vue'

const requestStore = useRequestStore()
const requestParams = ref()
const paramsList = computed(() => {
  return requestParams.value
    ? Object.entries(requestParams.value).map(([key, value]) => ({ key, value }))
    : []
})

onMounted(() => {
  requestParams.value = requestStore.params
})

requestStore.$subscribe(async (_mutation, state) => {
  if (state.params) {
    requestParams.value = state.params
  }
}, { detached: true })
</script>

<template>
  <div class="flex h-dvh bg-background p-2 justify-between gap-2 rounded-lg">
    <DataList :data="paramsList as DataListItem[]" />
  </div>
</template>
