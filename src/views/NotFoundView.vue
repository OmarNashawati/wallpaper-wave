<script setup>
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
      <a href="/">Return to the Homepage.</a>
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
  .actions-div a{
    color:var(--text-muted);
    cursor:pointer;
  }

  .actions-div a:hover {
    opacity: 0.8;
  }
  
</style>