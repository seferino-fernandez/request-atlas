<script setup lang="ts">
import WindowTopbar from '@/components/WindowTopbar.vue'
import AppSidebar from '@/components/AppSidebar.vue'
import { TooltipProvider } from '@/components/ui/tooltip'
</script>

<template>
  <div class="w-full h-full">
    <WindowTopbar />
    <TooltipProvider>
      <div class="flex">
        <AppSidebar />
        <div class="grow h-screen w-full ml-14 bg-muted/40 rounded-tl-lg">
          <router-view />
        </div>
      </div>
    </TooltipProvider>
  </div>
</template>
