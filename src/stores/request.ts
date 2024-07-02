import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRequestStore = defineStore('request', () => {
  const url = ref()
  const method = ref()
  const params = ref()
  const headers = ref()
  const body = ref()
  return { url, method, params, body, headers }
})
