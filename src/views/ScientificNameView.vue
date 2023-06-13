<template>
    <div class="scientificName">
        <div class="fixed-collage">
            <div class="pannellum">
                <img :src="require('@/assets/prefabs/decorador.png')" class="decorator-top">
            </div>
        </div>

        <hr class="separator">
        
        <div class="scientific-name-data">
            <h4 class="title-scientific-name">NOMBRES CIENTÍFICOS</h4><br>
            <div class="list-scientific-name">
                <div class="card item-sn" v-for="item in dataAllScientificNameStore" :key="item.nom_comunes" @click="specieListar(item.nom_comunes)">
                    <router-link :to="'/especie'">{{ item.nombre_cientifico }}</router-link>
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
import PagesQueries from '../components/PagesQueries.vue';

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
        toggle() {
            this.expanded = !this.expanded;
        },
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
        ...mapState(['dataAllScientificNameStore']),
        ...mapState(['dataFoundStore'])
    },
    mounted() {
        console.log(this.dataAllScientificNameStore)
    }
})


</script>

<style scoped>
.scientificName {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;

    flex-direction: column;

    display: grid;
    grid-template-rows: auto 1fr ;
}

.title-scientific-name{
    font-weight: bold;
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
.scientific-name-data{
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
  display: flex;
  align-items: center;
}

.title h2 {
  margin: 0;
  font-size: 25px;
  font-weight: bold;
}

.list-scientific-name{
    display: grid;
    grid-template-columns: auto auto auto auto;

    margin-left: 25px;
    margin-right: 25px;
    
}

.item-sn {
    margin: 10px;
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