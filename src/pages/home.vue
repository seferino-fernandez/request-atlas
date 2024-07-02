<script setup lang="ts">
import RequestHeader from '@/components/RequestHeader.vue'
import RequestBodyBuilder from '@/components/RequestBodyBuilder.vue'
import ResponseContainer from '@/components/ResponseContainer.vue'
</script>

<template>
  <div>
    <RequestHeader />
    <div class="md:grid grid-flow-col justify-stretch">
      <RequestBodyBuilder />
      <ResponseContainer />
    </div>
  </div>
</template>
