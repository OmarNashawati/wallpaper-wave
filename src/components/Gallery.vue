<script setup>
  import GalleryItem from './GalleryItem.vue';

  const props = defineProps([
    'images',
  ])
</script>

<template>

  <div class="gallery">

    <GalleryItem v-for="image in props.images" :key="image.id" :image="image"/>

  </div>

</template>

<style scoped>
  .gallery{
    width: 100%;
    height: 100%;
    padding: 1rem 0;
    
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
</style>