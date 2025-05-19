<script setup>
  import { onBeforeMount, ref, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import db from '../shared-logic';

  import Gallery from './Gallery.vue';

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
  <div class="home-wrapper">

      <div class="home-title">
        <h1>{{ currentCollection.name }}</h1>
      </div>
      
      <div>
        <Gallery :images="images"/>
      </div>
      

      <!-- <div class="pager">
        <button v-for="page in pages">{{ page }}</button>
      </div> -->
    </div>
</template>

<style scoped>
  .home-wrapper{
    width: 100%;
    padding: 1rem;
  }

  .home-title{
    padding: 1rem 0;
  }

</style>