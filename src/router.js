
import { createWebHistory, createRouter } from "vue-router";
import LoginComponent from "@/components/LoginComponent.vue";
import HomeMenuComponent from "@/components/HomeMenuComponent.vue";




const routes = [
  {
    path: "/",
    name: "Home",
    component: LoginComponent,
  },
  {
    path: "/Create",
    name: "Createcomponent",
    component: HomeMenuComponent,
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router