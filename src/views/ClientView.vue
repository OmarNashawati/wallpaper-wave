<script setup>
  import { RouterView } from 'vue-router';

  import Sidebar from '@/components/Sidebar.vue';

  import db from '../shared-logic';
  import { getSidebarState,closeSideBar } from '@/shared-logic/sidbarToggle';
  import { watch,useTemplateRef, onBeforeMount, onBeforeUnmount } from 'vue';
  
  let sidebarState = getSidebarState();
  let sidebar = useTemplateRef('sidbar-div')
  

  const handleClickOutside = (event) => {
    if(!event.target.classList.contains('side-bar-toggle-btn')){
      closeSideBar();
      
    }
  }

  onBeforeMount(() => {
    document.addEventListener('click', handleClickOutside)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
  })


  watch(sidebarState, ()=>{    
    if(sidebarState.value){
      sidebar.value.style.left = '0'
    }else{
      sidebar.value.style.left = '-250px'
    }
  })

</script>

<template>
  <div class="client-view-wrapper">

    <div ref="sidbar-div" class="sidbar-div">
      <Sidebar :collections="db.collections" />
    </div>
    <div class="main-div">
      <RouterView />
    </div>

  </div>
</template>

<style scoped>

.client-view-wrapper{
  display: flex;
  flex-direction: row;
}
.sidbar-div{
  display: block;
}

.main-div{
  flex: 1;
}

@media(max-width:576px){
  .sidbar-div{
    position: absolute;
    left: -250px;
    z-index: 10;
    transition: left 0.2s ease;
  }
}


</style>