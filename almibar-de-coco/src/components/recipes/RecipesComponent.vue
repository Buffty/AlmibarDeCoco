<script setup>
import { ref } from 'vue'
import Galleria from 'primevue/galleria'

const dImagenes = ref([
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
])

</script>
<template>
    <div class="card grid nested-grid">
        <div class="col-4">
            <Galleria :value="dImagenes"  :numVisible="5" :circular="true" containerStyle="max-width: 640px max-height:450px">
                <template #item="slotProps">
                    <img :src="slotProps.item.srcImage" class="border-round shadow-4" style="width:400px; height: 500px; object-fit: cover; object-position: center; display:block" />
                </template>
                <template #thumbnail="slotProps">
                    <div class="grid grid-nogutter justify-content-center">
                        <img :src="slotProps.item.srcImage" style="width: 75px; height:75px; display:block"/>
                    </div>
                </template>
            </Galleria>
        </div>
        <div class="col-8">
            <div class="grid">
                <div class="col-12" style="text-align:center">
                    <h1>Setas a la boloñesa</h1>
                </div>
                <div class="col-6">
                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                </div>
                <div class="col-6">
                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                </div>
                
            </div>
        </div>
    </div>
</template>