<script setup>
  const collections = [
    "Nature & Landscapes",
    "Urban & City Life",
    "Abstract Backgrounds",
    "Animals & Wildlife",
    "Technology & Innovation",
  ]
</script>

<template>

 <div class="sidebar-wrapper">
    <h2>Collections</h2>
    <nav>
      <ul>
        <li v-for="item in collections">{{ item }}</li>
      </ul>
    </nav>
  </div>

</template>

<style scoped>
  .sidebar-wrapper{
    background-color: var(--background-alt);
    width: 250px;
    height: 100%;
    padding: 1rem 0rem;
  }

  .sidebar-wrapper>h2{
    padding: 1rem;
  }

  li {
    color: var(--text-muted);
    padding: 8px 1rem;
  }

  li:hover {
    background-color: var(--btn-primary-hover);
    color: var(--text);
    cursor: pointer;
  }
</style>