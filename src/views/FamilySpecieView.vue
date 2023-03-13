<template>
    <div class="familySpecie">
        <div class="fixed-collage">
            <div class="pannellum">
                <img :src="require('@/assets/prefabs/decorador.png')" class="decorator-top">
            </div>
        </div>

        <hr class="separator">
        
        <div class="familia-data">
            <h4>FAMILIAS</h4>
            <div>
                
                <span>Data familia</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
    name: 'FamilySpecie',
    components: {
    },
    data() {
        return {
            config: {
                // Aquí puedes configurar los parámetros de la imagen panorámica
                type: 'equirectangular',
                autoLoad: true,
            }
        }
    }
})


</script>

<style scoped>
.familySpecie {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;

    flex-direction: column;

    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: auto;
}

.fixed-collage {
    width: 100%;
    height: auto;

    display: flex;
    justify-content: center;
    
    margin-bottom: 30px;
}

.decorator-top {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.separator {
    grid-row-start: 2;
    grid-row-end: 3;

    height: 0;
    border: none;
    border-top: 2px solid #7d8f69;
    margin: 0;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
}
.familia-data{
    grid-row-start: 3;
    grid-row-end: 4;

    width: 100%;
    height: 200px;
}
</style>