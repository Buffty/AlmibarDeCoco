<script setup>

import { ref } from "vue";
import { useI18n } from "vue-i18n";
import Menubar from 'primevue/menubar'
import '@/assets/recipes/headerRecipes.css'

const { t } = useI18n()

const dItems = ref([
    {
        label: t('recipes.menu.category'),
        items:[
            {
                label: t('recipes.menu.categories.food')
            },
            {
                label: t('recipes.menu.categories.dinner')
            },
            {
                label: t('recipes.menu.categories.breakfast')
            },
            {
                label: t('recipes.menu.categories.snacks')
            },
            {
                label: t('recipes.menu.categories.sauces')
            },
            {
                label: t('recipes.menu.categories.drinks')
            },
            {
                label: t('recipes.menu.categories.salade')
            },
            {
                label: t('recipes.menu.categories.sweets')
            },
        ]
    },
    {
        label: t('recipes.menu.news')
    },
    
    {
        label: t('recipes.menu.olds')
    }
]);
</script>
<template>
    <div class="menu_header_recipes">
        <Menubar :model="dItems">
            <template #item="{ item, props, hasSubmenu }">
                <a v-ripple class="flex align-items-center" v-bind="props.action">
                    <span class="ml-2">{{ item.label }}</span>
                    <i v-if="hasSubmenu" class="pi pi-angle-down icon_angle"></i>
                </a>
            </template>
            <template #end>
                <div class="flex align-items-center gap-2">
                    <InputText placeholder="Search" type="text" class="w-8rem sm:w-auto" />
                </div>
            </template>
        </Menubar>
    </div>
</template>