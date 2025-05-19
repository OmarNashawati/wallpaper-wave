<script setup>
  import { useRouter } from 'vue-router';
  import db from '../shared-logic';
  const router = useRouter();  

  const props = defineProps([
    'image'
  ]);

</script>

<template>
  <div 
    @click="router.push(`/images/${props.image.id}`)" 
    class="wallpaper-card">
   
    
    <div class="card-image">
      <img 
        loading="lazy"
        :src="`${db.BASE_URL_small}${props.image.url}`" 
        alt="">
    </div>

     <div class="dimention">
      {{ props.image.dimensions }}
    </div>

    <div class="wallpaper-info">
      <p class="image-name">{{props.image.collections[0]}}</p>
    </div>
  </div>
</template>

<style scoped>
  .wallpaper-card{
    height: fit-content;
    /* flex: 1 1 calc(33.333% - 2rem); */
    max-width: 500px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 
    0 1px 2px 0 rgba(0, 0, 0, 0.06);
    overflow: hidden;
    border-radius: 5px;
    background-color: var(--color-surface);
    cursor: pointer;
    position: relative;
  }



  .card-image{
    height:  168px;
  }
  
  .card-image img{
    transition: transform 0.3s ease;
    
  }

  .wallpaper-card:hover .card-image>img{
    transform: scale(1.1);
  }

  .dimention {
    position: absolute;
    font-size: 12px;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 5px 10px;
    border-radius: 2px;
    top: -50px;
    left: 5px;
    color: var(--white);
    transition: top 0.3s ease;
  }

  .image-name{
    position: absolute;
    background-image: linear-gradient( 180deg,rgba(0, 0, 0, 0.0),rgba(0, 0, 0, 0.3));
    bottom: -50px;
    width: 100%;
    border-radius: 0 0 5px 5px;
    padding: 0.5rem 1rem;
    color: var(--white);
    transition: bottom 0.3s ease;

  }

  .wallpaper-card:hover .dimention{
    top: 5px;
  }
  
  .wallpaper-card:hover .image-name{
    bottom: 0;
  }


  @media (max-width: 2200px) {
    .wallpaper-card {
        flex: 1 1 calc(20% - 2rem);
    }
  }

  @media (max-width: 2200px) {
    .wallpaper-card {
        flex: 1 1 calc(25% - 2rem);
    }
  }

  @media (max-width: 1768px) {
    .wallpaper-card {
      flex: 1 1 calc(33.333% - 2rem);
    }
  }

  @media (max-width: 768px) {
    .wallpaper-card {
      flex: 1 1 calc(50% - 2rem);
    }
  }

  @media(max-width:520px){
    .wallpaper-card{
      flex: 1 1 100%;
    }
  }

</style>