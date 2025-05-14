<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const props = defineProps([
    'collections'
  ]);

  function onCollectionItemClicked (collectionItem){
    if(collectionItem.name === 'All'){
      router.push('/')
    }else{
      router.push(`/collections/${collectionItem.url}`)
    }

  }
</script>

<template>

 <div class="sidebar-wrapper">
    <h2>Collections</h2>
    <nav>
      <ul>
        <li @click="onCollectionItemClicked({name:'All'})">
          All
        </li>
        <li 
          v-for="item in props.collections"
          @click="onCollectionItemClicked(item)"
        >
          {{ item.name }}
        </li>
      </ul>
    </nav>
  </div>

</template>

<style scoped>
  .sidebar-wrapper{
    background-color: var(--background-alt);
    width: 200px;
    height: 100%;
    padding: 1rem 0rem;
  }

  .sidebar-wrapper>h2{
    padding: 1rem;
    font-size: 1rem;
  }

  li {
    color: var(--text-muted);
    padding: 8px 1rem;
    font-size: 0.8rem;
  }

  li:hover {
    background-color: var(--btn-primary-hover);
    color: var(--text);
    cursor: pointer;
  }
</style>