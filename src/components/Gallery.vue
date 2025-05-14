<script setup>
  import GalleryItem from '@/components/GalleryItem.vue';

  // const props = defineProps([
  //   'images',
  // ])


  const images = [
      {
        "id":"73375295-fd07-4ff4-8b73-25f791bc50a4",
        "url":"https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "size":6861646,
        "collections":["Abstract Backgrounds"],
        "downloadable":true,
        "dimensions":"3840x2400px",
        "copyright":""
      },
      {
        "id":"0023174a-8240-44eb-bb5c-55acd693bd12",
        "url":"https://images.pexels.com/photos/733090/pexels-photo-733090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "size":3412363,
        "collections":["Architecture & Interiors"],
        "downloadable":true,
        "dimensions":"5953x3349px",
        "copyright":""
      },

  ]

</script>

<template>
  <div class="gallery-wrapper">

      <div class="gallery-title">
        <h1>Technology & Innovation</h1>
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