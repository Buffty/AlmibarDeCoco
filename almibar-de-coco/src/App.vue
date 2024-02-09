<script setup>
import { onBeforeMount } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import './assets/main.css'
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

const router = useRoute()


</script>

<template>
  
  <HeaderComponent></HeaderComponent>
  <RouterView />
  <FooterComponent></FooterComponent>
</template>
