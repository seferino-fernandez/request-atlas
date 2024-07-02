import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useResponseStore = defineStore('response', () => {
  const body = ref()
  const headers = ref()
  return { body, headers }
})
