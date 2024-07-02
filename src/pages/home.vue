<script setup lang="ts">
import RequestHeader from '@/components/RequestHeader.vue'
import RequestContainer from '@/components/request/RequestContainer.vue'
import ResponseContainer from '@/components/response/ResponseContainer.vue'
</script>

<template>
  <div>
    <RequestHeader />
    <div class="md:grid grid-flow-col justify-stretch">
      <RequestContainer />
      <ResponseContainer />
    </div>
  </div>
</template>
