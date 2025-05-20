<script setup>
  import { RouterView } from 'vue-router';

  import Navbar from './components/Navbar.vue';
  import { closeSideBar } from './shared-logic/sidbarToggle';
  
</script>

<template>

  <div class="main-wrapper">
     <header>
      <Navbar/>
    </header>
    
    <main>
      <RouterView />
    </main>
    
  </div>

</template>

<style scoped>

  

</style>