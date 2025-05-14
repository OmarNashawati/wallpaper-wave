<script setup>
  import { RouterView } from 'vue-router';

  import Sidebar from '@/components/Sidebar.vue';
</script>

<template>
  <div class="client-view-wrapper">

    <div>
      <Sidebar />
    </div>
    <div>
      <RouterView />
    </div>

  </div>
</template>

<style scoped>

.client-view-wrapper{
  display: flex;
  flex-direction: row;
}


</style>