<script setup>
  import { RouterView } from 'vue-router';

  import Sidebar from '@/components/Sidebar.vue';

  import db from '../shared-logic';
  
</script>

<template>
  <div class="client-view-wrapper">

    <div>
      <Sidebar :collections="db.collections" />
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