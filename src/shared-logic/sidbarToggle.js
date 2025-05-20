import { ref } from "vue";

const sidebarState = ref(false);
export function getSidebarState(){
  return sidebarState;
}

export function toggleSideBarOnMobile(){
  sidebarState.value = !sidebarState.value;  
}

export function closeSideBar(){
  if(sidebarState.value)
    sidebarState.value = false;
}