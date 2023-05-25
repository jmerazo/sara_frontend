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

            <div class="container" :class="{ 'expanded': expanded }" @click="toggle">
                <div class="title">
                    <h2>{{ dataFamilyStore[0].familia }}</h2>
                    <div class="arrow"></div>
                </div>
                <ul>
                    <li v-for="item in dataFamilyStore" :key="item.ShortcutID">{{ item.nombre_cientifico }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';

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
            },
            expanded: false
        }
    },
    methods: {
        toggle() {
            this.expanded = !this.expanded;
        }
    },
    computed: {
        ...mapState(['dataFamilyStore'])
    },
    mounted() {
        console.log(this.dataFamilyStore)
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

.container {
  cursor: pointer;
  height: 50px;
  overflow: hidden;
  transition: height 0.3s ease;
}

.title {
  display: flex;
  align-items: center;
}

.title h2 {
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  font-size: 25px;
  font-weight: bold;
}

.arrow {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 6px 0 6px;
  border-color: #777 transparent transparent transparent;
  margin-left: 10px;
  transition: transform 0.3s ease;
}

ul {
  margin: 0;
  margin-top: 15px;
  padding: 0;
  list-style: none;
}

.container.expanded {
  height: auto;
}

.container.expanded .arrow {
  transform: rotate(180deg);
}
</style>