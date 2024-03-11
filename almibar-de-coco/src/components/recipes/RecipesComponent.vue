<script setup>
import { ref } from 'vue'
import DataView from 'primevue/Dataview'
import Card from 'primevue/card';
import Button from 'primevue/button';
import { useI18n } from "vue-i18n";

const { t } = useI18n()

const dDataRecipes = ref([
    {
        id: 0,
        imagenCabecera: '/imgRecetas/recetaSetas1.jpg',
        imagenes: [
            {
                srcImage: '/imgRecetas/recetaSetas1.jpg'
            },
            {
                srcImage: '/imgRecetas/recetaSetas2.jpg'
            },
            {
                srcImage: '/imgRecetas/recetaSetas3.jpg'
            },
            {
                srcImage: '/imgRecetas/recetaSetas4.jpg'
            },
            {
                srcImage: '/imgRecetas/recetaSetas5.jpg'
            },
            {
                srcImage: '/imgRecetas/recetaSetas6.jpg'
            }
        ],
        title: "Salsa de setas a la boloñesa",
        description: "Lorem lore lore"
    },
    {
        id: 1,
        imagenCabecera: '/imgRecetas/recetaSetas1.jpg',
        imagenes: [
            {
                srcImage: '/imgRecetas/recetaSetas1.jpg'
            },
            {
                srcImage: '/imgRecetas/recetaSetas2.jpg'
            },
            {
                srcImage: '/imgRecetas/recetaSetas3.jpg'
            },
            {
                srcImage: '/imgRecetas/recetaSetas4.jpg'
            },
            {
                srcImage: '/imgRecetas/recetaSetas5.jpg'
            },
            {
                srcImage: '/imgRecetas/recetaSetas6.jpg'
            }
        ],
        title: "Salsa de setas a la boloñesa",
        description: "Lorem lore lore"
    },
    {
        id: 2,
        imagenCabecera: '/imgRecetas/recetaSetas1.jpg',
        imagenes: [
            {
                srcImage: '/imgRecetas/recetaSetas1.jpg'
            },
            {
                srcImage: '/imgRecetas/recetaSetas2.jpg'
            },
            {
                srcImage: '/imgRecetas/recetaSetas3.jpg'
            },
            {
                srcImage: '/imgRecetas/recetaSetas4.jpg'
            },
            {
                srcImage: '/imgRecetas/recetaSetas5.jpg'
            },
            {
                srcImage: '/imgRecetas/recetaSetas6.jpg'
            }
        ],
        title: "Salsa de setas a la boloñesa",
        description: "Lorem lore lore"
    }
])

function fOnViewRecipes(item){

}

</script>
<template>
    <div class="grid nested-grid gridRecipes">
        <div class="col-12 titleListRecipe text-center">
            <h1>Lista de Recetas</h1>
        </div>
        <div class="col-12">
            <DataView :value="dDataRecipes" paginator :rows="5" :pt="{ content: { class: ['paginationRecipes'] } }" lazy>
                <template #list="slotProps">
                    <div class="card grid nested-grid">
                        <div v-for="(item, index) in slotProps.items" :key="index" class="col-4">
                            <Card class="cardRecipe">
                                <template #header>
                                    <img alt="user header" :src="item.imagenCabecera" class="imgPrincipal" />
                                </template>
                                <template #title>
                                    <span class="titleCardRecipe">{{ item.title }}</span>
                                </template>
                                <template #content>
                                    <p class="m-0">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
                                        repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa
                                        ratione
                                        quam perferendis esse, cupiditate neque
                                        quas!
                                    </p>
                                </template>
                                <template #footer>
                                    <div class="flex gap-3 mt-1 justify-content-end">
                                        <Button :label="t('recipes.listRecipe.view')" class="btnCardRecipe w-3 mr-2" @click="fOnViewRecipes(item)"/>
                                    </div>
                                </template>
                            </Card>
                        </div>

                    </div>
                </template>
            </DataView>
        </div>
    </div>
</template>