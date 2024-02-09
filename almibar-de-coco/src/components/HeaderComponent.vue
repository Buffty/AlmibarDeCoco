<script setup>
import '../assets/header/header.css'
import Menubar from 'primevue/menubar'
import { ref } from 'vue'
import Image from 'primevue/image'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

console.log(route.path)

const menuBar = ref([
    {
        label: t('header.menu.home'),
        route: '/'
    },
    {
        label: t('header.menu.news'),
        route: '/news'
    },
    {
        label: t('header.menu.recipes'),
        route: '/recipes'
    },
    {
        label: t('header.menu.aboutUs'),
        route: '/aboutUs'
    }
])

</script>
<template>
    <div class="header_style grid">
        <div class="col-2 icon_header">
            <Image src="/logo_coco.png" alt="Image" width="50"></Image>
        </div>
        <div class="col-6 menu_header ">
            <Menubar :model="menuBar">
                <template #item="{ item, props }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                        <span :class="item.route == route.path? 'menu_select':''">{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                    <span >{{ item.label }}</span>
                </a>
            </template>
            </Menubar>
        </div>
        <div class="col-4 user_container">

        </div>
    </div>
</template>