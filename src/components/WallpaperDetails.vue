<script setup>
  import { useRoute, useRouter } from 'vue-router';
  // import { onBeforeMount, ref } from 'vue';
  // import images from '@/assets/images-meta-data.json';
  // // import {FILES_BASE_URL} from '../assets/Shared.js';
  // const FILES_BASE_URL = '../../backend/4K-Wallpaper-Dump/'

  const router = useRouter();
  const route = useRoute();


  const {id}  = route.params
  // const wallpaper = ref(null)
  // let toggleFullReview =  ref(false);

  // onBeforeMount(() => {
  //   wallpaper.value = images.find(w => w.id === id);    
  // })

  // const fullReviewOpen = () => {
  //   toggleFullReview.value = true
  // }
  // const fullReviewClose = () => {
  //   toggleFullReview.value = false;
  // }

  
  // const calculateImageSize = () => {
  //   if(wallpaper.value.size < 1000000){
  //     return `${(wallpaper.value.size / 1024 ).toFixed(2)} KB` 
  //   }else{
  //     return `${(wallpaper.value.size / (1024*1024)).toFixed(2)} MB` 
  //   }
  // }

  // function download() {
  //   const link = document.createElement('a');
  //   link.href = FILES_BASE_URL + wallpaper.value.url;
  //   link.download = wallpaper.value.url;
  //   link.click();

  //   URL.revokeObjectURL(link.href);
    
  // }

</script>
<template>

  <div class="details-warpper">

    <!-- <div v-if="toggleFullReview" class="review-image-full">
      <div>
        <i @click="toggleFullReview = false" class="pi pi-times close-full"></i>
      </div>
      <div>
        <img :src="`${FILES_BASE_URL}${wallpaper.url}`" alt="">
      </div>
    </div> -->

    <div class="back-div">
      <button 
        @click="router.push('/')"
        class="back-btn"
      >
        <i class="pi pi-home"></i> Back To Home
      </button>
    </div>
  
    <div class="wallpaper-details">
      {{ id }}
      <!-- <div class="image-review">
        <img @click="toggleFullReview = true" :src="`${FILES_BASE_URL}${wallpaper.url}`" alt="">
      </div>

      <div>
        <div class="image-info">
          <p style="font-weight: bold;"><i class="pi pi-image"></i> Original wallpaper info: </p>
          <p><i class="pi pi-folder"></i> Size: {{calculateImageSize()}}</p>
          <p><i class="pi pi-arrow-up-right-and-arrow-down-left-from-center"></i> Dimentions: {{ wallpaper.dimensions }}</p>
          <p><i class="pi pi-hashtag"></i> Tags: {{ wallpaper.collections[0] }}</p>
          <button @click="download()" class="download-btn">Download</button>
        </div>
      </div> -->
      
    </div>
  </div>
</template>

<style scoped>
  .details-warpper {
    position: relative;
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
  }

  .image-info{
    width: 250px;
    height: fit-content;
    padding: 1rem;
    background-color: var(--color-surface);
    border-radius: 0.5rem;
    box-shadow: var(--shadow)
  }
  .image-info>p{
    margin-bottom: 5px;
  }
  .download-btn{
    width: 100%;
    padding: 1rem 0;
    background-color: var(--color-primary);
    border: none;
    outline: none;
    border-radius: 5px;
    color: var(--white-color);
    margin-top: 2.5rem;
  }

  .download-btn:hover{
    background-color: var(--color-secondary);
    cursor: pointer;
    opacity: 0.8;
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
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 1rem;
  }

  .review-image-full img{
    max-width: 100%;
  }

  .close-full{
    padding: 8px;
    font-size: large;
    cursor: pointer;
    background-color: var(--color-secondary);
    border-radius: 50%;
    margin-bottom: 5px;
  }

  .close-full:hover{
    opacity: 0.8;
  }
</style>