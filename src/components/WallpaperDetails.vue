<script setup>
  import { useRoute, useRouter } from 'vue-router';
  import db from '../shared-logic';
  import { onBeforeMount, ref, watch } from 'vue';

  import Gallery from './Gallery.vue';
  // import images from '@/assets/images-meta-data.json';
  // // import {FILES_BASE_URL} from '../assets/Shared.js';
  // const FILES_BASE_URL = '../../backend/4K-Wallpaper-Dump/'

  const router = useRouter();
  const route = useRoute();


  let {id}  = route.params
  const wallpaper = ref(null)
  let toggleFullReview =  ref(false);
  let showDownloadMessage =  ref(false);
  let relatedImages = ref([])

  
  onBeforeMount(() => {
    wallpaper.value = db.images.find(w => w.id === id);        
    relatedImages.value = db.images.filter((img) => img.collections[0] === wallpaper.value.collections[0] && img.id !== wallpaper.value.id);   
     
  })
  
  const calculateImageSize = () => {
    if(wallpaper.value.size < 1000000){
      return `${(wallpaper.value.size / 1024 ).toFixed(2)} KB` 
    }else{
      return `${(wallpaper.value.size / (1024*1024)).toFixed(2)} MB` 
    }
  }

  watch(route, ()=> {

    wallpaper.value = db.images.find(w => w.id === route.params.id); 
    relatedImages.value = db.images.filter((img) => img.collections[0] === wallpaper.value.collections[0] && img.id !== wallpaper.value.id);   

    
  })

  function download() {
    showDownloadMessage.value = true;
    const link = document.createElement('a');
    link.href = `${db.BASE_URL_download}${wallpaper.value.url}`;
    link.download = wallpaper.value.url;
    link.click();

    URL.revokeObjectURL(link.href);

    setTimeout(()=>{
      showDownloadMessage.value = false;
    },3000);
  }

</script>
<template>

  <div class="details-warpper">

    <div v-if="toggleFullReview" class="review-image-full">
      <div>
        <i @click="toggleFullReview = false" class="pi pi-times close-full"></i>
      </div>
      <div @click="toggleFullReview = false" class="review-image-img">
        <img :src="`${db.BASE_URL}${wallpaper.url}`" alt="">
      </div>
    </div>

    <div class="back-div">
      <button 
        @click="router.push('/')"
        class="back-btn"
      >
        <i class="pi pi-home"></i> Back To Home
      </button>
    </div>
    
  
    <div class="wallpaper-details">
      <div class="image-review">
        <img @click="toggleFullReview = true" :src="`${db.BASE_URL_50}${wallpaper.url}`" alt="" loading="lazy">
      </div>

      <div>
        <div class="image-info">
          <p style="font-weight: bold;"><i class="pi pi-image"></i> Original wallpaper info: </p>
          <p><i class="pi pi-folder"></i> Size: {{calculateImageSize()}}</p>
          <p><i class="pi pi-arrow-up-right-and-arrow-down-left-from-center"></i> Dimentions: {{ wallpaper.dimensions }}</p>
          <p><i class="pi pi-hashtag"></i> Tags: {{ wallpaper.collections[0] }}</p>

          <div v-if="showDownloadMessage" id="download-message">Your image will be downloaded in a few seconds...</div>
          <button @click="download()" class="download-btn">Download</button>
        </div>
      </div>
      
    </div>


    <div class="relateed-wallpaper-wrapper">
      <div class="title">
        <h2>Related Wallpapers</h2>
      </div>

      <div>
        <Gallery :images="relatedImages"/>
      </div>

    </div>
  </div>
</template>

<style scoped>
  .details-warpper {
    padding: 1rem;
  }
  .back-div{
    margin-bottom: 10px;
  }
  .back-btn{
    background-color: transparent;
    color: var(--color-text);
    border: none;
    outline: none;
    text-decoration: underline;
    padding: 0.7rem 0;
    cursor: pointer;
  }


  .back-btn:hover{
    opacity: 0.7;
  }

  .wallpaper-details{
    display: flex;
    gap: 10px;
  }

  .image-review{
    max-width: 100%;
    cursor: zoom-in;
  }

  .image-info{
    width: 250px;
    height: fit-content;
    padding: 1rem;
    background-color: var(--background-alt);
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  .image-info>p{
    margin-bottom: 5px;
  }
  .download-btn{
    width: 100%;
    padding: 1rem 0;
    background-color: var(--primary);
    border: none;
    outline: none;
    border-radius: 5px;
    color: var(--white);
    margin-top: 2.5rem;
  }

  .download-btn:hover{
    background-color: var(--btn-primary-dark-hover);
    cursor: pointer;
  }

  @media(max-width:960px){
    .wallpaper-details{
      flex-direction: column;
    }

    .image-info{
      width: 100%; 
    }
  }

  .review-image-full{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 1rem;
    z-index: 10;
  }

  .review-image-full img{
    max-width: 100%;
  }

  .review-image-img{
    cursor: zoom-out;
  }

  .close-full{
    color: var(--white);
    padding: 8px;
    font-size: large;
    cursor: pointer;
    border-radius: 50%;
    margin-bottom: 5px;
  }

  .close-full:hover{
    opacity: 0.8;
  }

   #download-message {
      background-color: var(--background-alt);
      border: 1px solid var(--primary);
      color: var(--primary);
      padding: 10px;
      margin-top: 15px;
      border-radius: 6px;
      font-family: Arial, sans-serif;
      width: fit-content;
    }

    .relateed-wallpaper-wrapper{
      padding-top: 2rem;
    }
</style>