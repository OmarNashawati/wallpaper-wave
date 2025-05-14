<script setup>
  import { useRoute } from 'vue-router';
  import db from '../shared-logic';

  import GalleryItem from '@/components/GalleryItem.vue';
import { ref } from 'vue';
  // const props = defineProps([
  //   'images',
  // ])

  const route = useRoute();

  const title = ref(route.params.collection)
  const images = db.images;
  
</script>

<template>
  <div class="gallery-wrapper">

      <div class="gallery-title">
        <h1>{{ title }}</h1>
      </div>
      
      <div class="gallery">

        <GalleryItem v-for="image in images" :key="image.id" :image="image"/>

      </div>
    </div>
</template>

<style scoped>
  .gallery-wrapper{
    width: 100%;
    padding: 1rem;
  }

  .gallery-title{
    padding: 1rem 0;
}

  .gallery{
    width: 100%;
    height: 100%;
    padding: 1rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
</style>