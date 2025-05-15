<script setup>
  import { onBeforeMount, ref, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import db from '../shared-logic';

  import GalleryItem from '@/components/GalleryItem.vue';

  const route = useRoute();
  let currentCollection = null;
  const images = ref(null);

  function changeCollection(){

    if(route.params.collection){
      currentCollection = db.collections.find(c => c.url === route.params.collection);
      images.value = db.images.filter((img) => img.collections[0] === currentCollection.name);
      
    }else{
      currentCollection = {name:'Wallpapers'}
      images.value = db.images;
    }
  }

  onBeforeMount(() => {
    changeCollection();
  })
  
  watch(route, () => {
    changeCollection();
  })


</script>

<template>
  <div class="gallery-wrapper">

      <div class="gallery-title">
        <h1>{{ currentCollection.name }}</h1>
      </div>
      
      <div class="gallery">

        <GalleryItem v-for="image in images" :key="image.id" :image="image"/>

      </div>

      <!-- <div class="pager">
        <button v-for="page in pages">{{ page }}</button>
      </div> -->
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