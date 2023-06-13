<template>
    <div class="familySpecie">
        <div class="fixed-collage">
            <div class="pannellum">
                <img :src="require('@/assets/prefabs/decorador.png')" class="decorator-top">
            </div>
        </div>

        <hr class="separator">
        
        <div class="familia-data">
            <h4 class="title-family">FAMILIAS</h4><br>
            <div class="family-list">
                <div v-for="(item, index) in dataAllFamilyStore" :key="index" class="list-family-item">
                    <h2 class="title">{{ item.familia }}</h2>
                    <ul class="li-text">
                        <li v-for="especie in item.especies" :key="especie" @click="specieListar(especie)">
                            <router-link class="text-rl" :to="'/especie'">{{" ► " + especie }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <PagesQueries></PagesQueries>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapActions } from 'vuex';
import axios from 'axios';
import PagesQueries from '../components/PagesQueries.vue'

export default defineComponent ({
    name: 'FamilySpecie',
    components: {
        PagesQueries
    },
    data() {
        return {
            config: {
                // Aquí puedes configurar los parámetros de la imagen panorámica
                type: 'equirectangular',
                autoLoad: true,
            },
            expanded: false,
            dataFound: [] as string []
        }
    },
    methods: {
        async specieListar(item){
            console.log("Dato a buscar: ", item)
            await axios.get(`http://127.0.0.1:8000/api/especie_forestal/search/nombre_comun/${item}`)
            .then(response => {
                console.log('Comunes found: ', response.data)
                this.dataFound = response.data;
                this.saveInStore();
            })
            .catch(error => {
                console.log('Error: ', error)
            })
        },
        ...mapActions(['updateMyData']),
        saveInStore(){
        console.log('Data to store: ', this.dataFound)
        this.updateMyData(this.dataFound)
    }
    },
    computed: {
        ...mapState(['dataFamilyStore']),
        ...mapState(['dataFoundStore']),
        ...mapState(['dataAllFamilyStore'])
    },
    mounted() {
        console.log('Data all family: ',this.dataAllFamilyStore)
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
    grid-template-rows: auto auto auto 1fr;
}

.fixed-collage {
    width: 100%;
    height: auto;

    display: flex;
    justify-content: center;

    grid-row-start: 1;
    grid-row-end: 2;
    
    margin-bottom: 30px;
}

.decorator-top {
    width: 60%;
    height: auto;
    object-fit: cover;
}

.separator {
    height: 0;
    border: none;
    border-top: 2px solid #7d8f69;
    margin: 0;
    width: 90%;
    margin-left: auto;
    margin-right: auto;

    grid-row-start: 2;
    grid-row-end: 3;
}

.text-rl {
    text-decoration: none;
    color: inherit;
}
.familia-data{
    grid-row-start: 3;
    grid-row-end: 4;

    width: 100%;
    height: auto;
    margin-bottom: 30px;
    margin-top: 30px;
}

.container {
  cursor: pointer;
  height: 50px;
  overflow: hidden;
  transition: height 0.3s ease;
}

.title {
  font-size: 20px;
  font-weight: bold;
}

.title-family {
  font-size: 30px;
  font-weight: bold;
}

.li-text{
    color: black;
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

.family-list {
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  margin-left: 100px;
}

.list-family-item {
  width: 30%;
}

</style>