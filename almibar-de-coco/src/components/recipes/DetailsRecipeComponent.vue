<script setup>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Galleria from 'primevue/galleria';
import { useI18n } from "vue-i18n";

const { t } = useI18n()
</script>
<template>
    <div class="card grid nested-grid recipeLayout">
        <template v-if="item.id % 2 !== 0">
            <div class="col-4">
                <Galleria :value="item.imagenes" :pt="{ content: { class: ['imgRecetas'] } }" :numVisible="5"
                    :circular="true" containerStyle="max-width: 640px max-height:450px">
                    <template #item="slotProps">
                        <img :src="slotProps.item.srcImage" class="shadow-7 imgPrincipal" />
                    </template>
                    <template #thumbnail="slotProps">
                        <div class="grid grid-nogutter justify-content-center">
                            <img :src="slotProps.item.srcImage" class="imgThumbnail" />
                        </div>
                    </template>
                </Galleria>
            </div>
            <div class="col-8">
                <div class="grid">
                    <div class="col-12" style="text-align:center">
                        <h1> {{ item.title }}</h1>
                    </div>
                    <div class="col-6">
                        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum
                            ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N.
                            del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló
                            de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino
                            que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente
                            igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las
                            cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como
                            por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                    </div>
                    <div class="col-6">
                        <Accordion :activeIndex="[0]" :multiple="true" expandIcon="pi pi-plus" collapseIcon="pi pi-minus"
                            class="tabsRecipes">
                            <AccordionTab :header="t('recipes.tabs.recipe')">
                                <p class="m-0">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                    qui officia deserunt mollit anim id est
                                    laborum.
                                </p>
                            </AccordionTab>
                            <AccordionTab :header="t('recipes.tabs.ingredients')">
                                <p class="m-0">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                    architecto beatae vitae dicta sunt explicabo. Nemo
                                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur,
                                    adipisci velit, sed quia non numquam eius modi.
                                </p>
                            </AccordionTab>
                            <AccordionTab :header="t('recipes.tabs.make')">
                                <p class="m-0">
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                    voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                    occaecati cupiditate non provident, similique sunt in
                                    culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
                                    quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis
                                    est eligendi optio cumque nihil impedit quo minus.
                                </p>
                            </AccordionTab>
                        </Accordion>
                    </div>

                </div>
            </div>
        </template>
        <template v-else>
            <div class="col-8">
                <div class="grid">
                    <div class="col-12" style="text-align:center">
                        <h1> {{ item.title }}</h1>
                    </div>
                    <div class="col-6">
                        <Accordion :activeIndex="[0]" expandIcon="pi pi-plus" :multiple="true" collapseIcon="pi pi-minus"
                            class="tabsRecipes">
                            <AccordionTab :header="t('recipes.tabs.recipe')">
                                <p class="m-0">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                    qui officia deserunt mollit anim id est
                                    laborum.
                                </p>
                            </AccordionTab>
                            <AccordionTab :header="t('recipes.tabs.ingredients')">
                                <p class="m-0">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                    architecto beatae vitae dicta sunt explicabo. Nemo
                                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur,
                                    adipisci velit, sed quia non numquam eius modi.
                                </p>
                            </AccordionTab>
                        <AccordionTab :header="t('recipes.tabs.make')">
                            <p class="m-0">
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                occaecati cupiditate non provident, similique sunt in
                                culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
                                quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis
                                est eligendi optio cumque nihil impedit quo minus.
                            </p>
                        </AccordionTab>
                    </Accordion>
                </div>
                <div class="col-6">
                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum
                        ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N.
                        del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló
                        de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino
                        que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente
                        igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las
                        cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como
                        por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                </div>

            </div>
        </div>
        <div class="col-4">
            <Galleria :value="item.imagenes" :pt="{ content: { class: ['imgRecetas'] } }" :numVisible="5"
                :circular="true" containerStyle="max-width: 640px max-height:450px">
                <template #item="slotProps">
                    <img :src="slotProps.item.srcImage" class="shadow-7 imgPrincipal" />
                </template>
                <template #thumbnail="slotProps">
                    <div class="grid grid-nogutter justify-content-center">
                        <img :src="slotProps.item.srcImage" class="imgThumbnail" />
                    </div>
                </template>
            </Galleria>
        </div>
    </template>
</div></template>