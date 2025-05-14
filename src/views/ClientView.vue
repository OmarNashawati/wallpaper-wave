<script setup>
  import { RouterView } from 'vue-router';

  import Sidebar from '@/components/Sidebar.vue';
</script>

<template>
  <div class="client-view-wrapper">

    <Sidebar />
    <RouterView />

  </div>
</template>

<style scoped>

.client-view-wrapper{
  display: flex;
  flex-direction: row;
}


</style>