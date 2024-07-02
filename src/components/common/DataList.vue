<script setup lang="ts">
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
    <ul role="list" class="divide-y divide-muted">
      <li v-for="item in data" :key="item.key" class="px-6 py-4">
        <div class="flex justify-around">
          <div class="text-sm text-muted-foreground">
            {{ item.key }}
          </div>
          <div class="text-sm text-muted-foreground">
            {{ item.value }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
