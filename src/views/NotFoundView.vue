<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();
</script>

<template>
  <div class="not-found-wrapper">
    <div class="not-found-message">
      <h1><span>404</span> - Page Not Found</h1>
      <p>
        The page you're looking for doesn't exist or may have been moved.
      </p>
    </div>
  
    <div class="actions-div">
      <i 
        class=" pi pi-home return-to-home-link" 
        @click="router.push('/')"
      >
       Return to the Homepage.
      </i>
    </div>
  </div>
</template>

<style scoped>
  .not-found-wrapper{
    width: 100%;
    height: 100%;
    padding: 2rem 0;
  }

  .not-found-message{
    text-align: center;

  }

  .not-found-message>h1>span{
    font-weight: 900;
  }

  .actions-div {
    padding-top: 2rem;
    text-align: center;
  }
  
  .return-to-home-link{
    color:var(--text-muted);
    cursor:pointer;
    text-decoration: underline;    
  }
  .return-to-home-link:hover {
    opacity: 0.8;
  }
  
</style>