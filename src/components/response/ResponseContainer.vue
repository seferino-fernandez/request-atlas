<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'

import PrettyResponseView from '@/components/response/PrettyResponseView.vue'
import ResponseHeadersView from '@/components/response/ResponseHeadersView.vue'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

const { t } = useI18n()
</script>

<template>
  <div class="p-2">
    <Tabs default-value="pretty">
      <div class="flex items-center gap-2">
        <TabsList>
          <TabsTrigger value="pretty">
            {{ t('response.pretty') }}
          </TabsTrigger>
          <TabsTrigger value="raw">
            {{ t('response.raw') }}
          </TabsTrigger>
          <TabsTrigger value="headers">
            {{ t('response.headers') }}
          </TabsTrigger>
          <TabsTrigger value="body">
            {{ t('response.body') }}
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
      <TabsContent value="pretty">
        <PrettyResponseView />
      </TabsContent>
      <TabsContent value="raw" />
      <TabsContent value="headers">
        <ResponseHeadersView />
      </TabsContent>
      <TabsContent value="body" />
    </Tabs>
  </div>
</template>
