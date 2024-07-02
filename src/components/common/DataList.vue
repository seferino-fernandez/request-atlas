<script setup lang="ts">
import { DescriptionDetails, DescriptionList, DescriptionTerm } from '@/components/common/description-list'

export interface DataListProps {
  data: DataListItem[]
}
export interface DataListItem {
  key: string
  value: string
}

defineProps<DataListProps>()
</script>

<template>
  <div class="w-full overflow-hidden rounded-md">
    <DescriptionList>
      <template v-for="item in data" :key="item.key">
        <DescriptionTerm>{{ item.key }}</DescriptionTerm>
        <DescriptionDetails>{{ item.value }}</DescriptionDetails>
      </template>
    </DescriptionList>
  </div>
</template>
