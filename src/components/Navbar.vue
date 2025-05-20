<script setup>
  import { toggleSideBarOnMobile } from '@/shared-logic/sidbarToggle';

  const emit = defineEmits([
    'toggle-sidebar',
  ])
</script>

<template>
  <div class="navbar-wrapper">

    <div 
      @click="toggleSideBarOnMobile()"
      class="mobile-menu-toggle side-bar-toggle-btn">
      <i class="pi pi-bars side-bar-toggle-btn"></i>
    </div>
    <div class="logo">
      <img src="../assets/logo.svg" alt="">
    </div>
  </div>
</template>

<style scoped>

  .navbar-wrapper {
    background-color: var(--navbar-bg);
    height: 60px;
    padding: 10px 2rem;
    display: flex;

  }

  .logo {
    height: 100%;
  }

  .logo>img {
    height: 100%;
  }

  .mobile-menu-toggle{
    height: 100%;
    display: none;
    align-items: center;
    justify-items: center;

    font-size: 20px;
    color: var(--white);
    margin-right: 10px;
    padding: 0 10px;
    cursor: pointer;
  }

  @media (max-width:576px){
  .mobile-menu-toggle{
    display: flex;
  }
  }
</style>