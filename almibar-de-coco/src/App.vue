<script setup>
import { onBeforeMount } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import './assets/main.css'
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';


const router = useRoute()


</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Lobster&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Lilita+One&family=Lobster&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Itim&family=Lilita+One&family=Lobster&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Agbalumo&family=Indie+Flower&family=Itim&family=Lilita+One&family=Lobster&family=Neuton:ital,wght@0,200;0,300;0,400;0,700;0,800;1,400&family=Playball&display=swap" rel="stylesheet">


  <HeaderComponent></HeaderComponent>
  <RouterView />
  <FooterComponent></FooterComponent>
</template>
