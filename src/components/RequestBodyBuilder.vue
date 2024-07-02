<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

import RequestParamsBuilder from '@/components/request/RequestParamsBuilder.vue'

const { t } = useI18n()
</script>

<template>
  <div class="p-2">
    <Tabs default-value="params">
      <div class="flex items-center gap-2">
        <TabsList>
          <TabsTrigger value="params">
            {{ t('request.params') }}
          </TabsTrigger>
          <TabsTrigger value="auth">
            {{ t('request.auth') }}
          </TabsTrigger>
          <TabsTrigger value="headers">
            {{ t('request.headers') }}
          </TabsTrigger>
          <TabsTrigger value="body">
            {{ t('request.body') }}
          </TabsTrigger>
        </TabsList>
        <div class="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="ghost" size="icon">
                <Icon icon="ph:code-duotone" class="size-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{{ t('request.copyAs') }}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                {{ t('code.curl') }}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="icon">
            <Icon icon="ph:floppy-disk-duotone" class="size-5" />
          </Button>
        </div>
      </div>
      <TabsContent value="params">
        <RequestParamsBuilder />
      </TabsContent>
      <TabsContent value="auth" />
      <TabsContent value="headers" />
      <TabsContent value="body" />
    </Tabs>
  </div>
</template>
