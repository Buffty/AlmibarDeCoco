<script setup>
import '../assets/header/header.css'
import Menubar from 'primevue/menubar'
import { ref } from 'vue'
import Image from 'primevue/image'

const menuBar = ref([
    {
        label: 'Home',
        icon: 'pi pi-home'
    }
])

</script>
<template>
    <div class="header_style grid">
        <div class="col-4 icon_header">
            <Image src="/logo_coco.png" alt="Image" width="50"></Image>
        </div>
        <div class="col-4 menu_header ">
            <Menubar :model="menuBar"></Menubar>
        </div>
        <div class="col-4 user_container">

        </div>
    </div>
</template>