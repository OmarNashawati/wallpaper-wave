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
    <div class="dimention">
      {{ props.image.dimensions }}
    </div>
    
    <div class="card-image">
      <img 
        loading="lazy"
        :src="`${db.BASE_URL_small}${props.image.url}`" 
        alt="">
    </div>

    <div class="wallpaper-info">
      <p class="image-name">{{props.image.collections[0]}}</p>
    </div>
  </div>
</template>

<style scoped>
  .wallpaper-card{
    height: fit-content;
    flex: 1 1 calc(33.333% - 2rem);
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    max-width: 100%;
    min-width: 300px;
    overflow: hidden;
    border-radius: 5px;
    background-color: var(--color-surface);
    cursor: pointer;
    position: relative;
  }

  .dimention {
    font-size: 12px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 5px 10px;
    border-radius: 2px;
    top: 5px;
    left: 5px;
    color: var(--white);
  }

  .card-image{
    overflow: hidden;
    height: 180px;
  }

  .wallpaper-card:hover .card-image>img{
    transform: scale(1.1);
  }

  .image-name{
    position: absolute;
    background-image: linear-gradient( 180deg,rgba(0, 0, 0, 0.0),rgba(0, 0, 0, 0.8));
    bottom: 0;
    width: 100%;
    border-radius: 0 0 5px 5px;
    padding: 0.5rem 1rem;
    color: var(--white);
  }

  @media (max-width: 768px) {
    .wallpaper-card {
      flex: 1 1 calc(50% - 2rem);
    }
  }

  @media(max-width:480px){
    .wallpaper-card{
      flex: 1 1 100%;
    }
  }

</style>