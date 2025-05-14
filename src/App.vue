<script setup>
  import { RouterView } from 'vue-router';

  import Navbar from './components/Navbar.vue';


  import test from './shared-logic'

  console.log(test);
  
</script>

<template>

  <div class="main-wrapper">
     <header>
      <Navbar />
    </header>
    
    <main>
      <RouterView />
    </main>
    
  </div>

</template>

<style scoped>

  

</style>