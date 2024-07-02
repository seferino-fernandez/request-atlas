<script setup lang="ts">
import { ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import { getQuery, isEmptyURL, isScriptProtocol } from 'ufo'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRequestStore } from '@/stores/request'
import { useResponseStore } from '@/stores/response'
import { sendRequest } from '@/lib/httpClient'

const requestStore = useRequestStore()
const responseStore = useResponseStore()

const selectedHttpMethod = ref('GET')
const selectedRequestUrl = ref('')

const httpMethods = [
  'GET',
  'POST',
  'PUT',
  'PATCH',
  'DELETE',
  'HEAD',
  'OPTIONS',
  'CONNECT',
  'TRACE',
]

watch(selectedRequestUrl, () => {
  if (isEmptyURL(selectedRequestUrl.value) || isScriptProtocol(selectedRequestUrl.value)) {
    return
  }
  requestStore.url = selectedRequestUrl
  requestStore.params = getQuery(selectedRequestUrl.value)
})

async function handleRequestSendButton() {
  const response = await sendRequest(selectedHttpMethod.value, selectedRequestUrl.value)
  responseStore.body = response.body
  responseStore.headers = response.headers
}
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="flex items-center gap-1.5">
      <Select v-model="selectedHttpMethod">
        <SelectTrigger class="max-w-32">
          <SelectValue :placeholder="selectedHttpMethod" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem v-for="httpMethod in httpMethods" :key="httpMethod" :value="httpMethod">
              {{ httpMethod }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input id="requestUrl" v-model="selectedRequestUrl" class="w-full" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" type="url" />
      <Button class="aspect-square" size="icon" type="submit" @click="handleRequestSendButton">
        <Icon icon="ph:paper-plane-tilt-duotone" class="size-5" />
      </Button>
    </div>
  </div>
</template>
