<script setup>
  import Sidebar from '@/components/Sidebar.vue';
  import Gallery from '@/components/Gallery.vue';
</script>

<template>
  <div class="client-view-wrapper">

    <Sidebar />
    <Gallery />


  </div>
</template>

<style scoped>

.client-view-wrapper{
  display: flex;
  flex-direction: row;
}


</style>