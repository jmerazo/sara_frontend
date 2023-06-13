<template>
  <div class="home">
    <!--TitleLink :title="myTitle" :icon="myIcon"/-->
    <div class="c-slider">
      <div class="slider">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../assets/media/r1.jpg" /></div>
            <div class="swiper-slide"><img src="../assets/media/r2.jpg" /></div>
            <div class="swiper-slide"><img src="../assets/media/r3.jpg" /></div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>

    <div class="search-data">
      <div class="info">
        <span class="font-bold text-lg text-title-search">CONSULTA DE INFORMACIÓN</span><br><br>
        <p class="p-h">
          Maecenas eu vehicula enim. Nunc pellentesque hendrerit quam, sit amet euismod justo consequat consequat. Morbi dignissim placerat lacus, 
          sed luctus nunc fermentum id. Morbi aliquam dolor sit amet risus molestie congue. Etiam in urna id lacus facilisis suscipit. In vehicula 
          mi dictum orci tempor gravida. Aenean ut ex in dui consequat commodo non quis ligula. Class aptent taciti sociosqu ad litora torquent per 
          conubia nostra, per inceptos himenaeos. Morbi et pharetra turpis. Morbi quis nulla pretium, suscipit lorem sit amet, aliquam nulla. Mauris 
          rutrum ultricies sapien eu aliquet. Ut vitae nulla non sapien finibus euismod. Etiam quis neque laoreet, sodales diam gravida, sodales diam.
        </p>
      </div>
      <div class="search row">
        <div class="filter col-8">
          <span class="text-title-search">FILTRA POR:</span><br>
          <select v-model="selectSearchMode" class="form-control">
            <option value="" disabled selected>Seleccione un valor a filtrar</option>
            <option value="familia">Familias</option>
            <option value="nom_comunes">Nombre común</option>
            <option value="nombre_cientifico">Nombre científico</option>
          </select>
        </div>
        <div class="input-search col-8">
          <span class="text-title-search">VALOR A BUSCAR</span><br>
          <input type="text" v-model="dataToFind" @input="getSuggestions" placeholder="Ingrese el valor filtrado a buscar..." class="form-control">
          <ul v-if="filteredSuggestions.length" class="suggestions-list">
            <li v-for="suggestion in filteredSuggestions" :key="suggestion" v-on:click="selectSuggestion(suggestion)">
              {{ suggestion }}
            </li>
          </ul>
        </div>
        <div>
          <button type="submit" class="btn" @click="specieToFind()">Buscar</button>
        </div>       
      </div>
    </div>

    <div class="information-sara">
      <div class="text-information">
        <span class="title-information">PROYECTO SEMILLAS CTEI</span><br><br>
        <p class="p-h">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ultricies nisi. Cras in posuere orci, quis lobortis urna. 
          Nulla congue velit et viverra vehicula. Nunc ut ligula purus. Phasellus vitae ultrices lacus. Cras efficitur imperdiet orci, 
          eu faucibus nibh placerat ut. Aenean tincidunt dolor a turpis aliquet, ac commodo augue bibendum. Maecenas tincidunt sed nibh faucibus convallis.

          Maecenas eu vehicula enim. Nunc pellentesque hendrerit quam, sit amet euismod justo consequat consequat. Morbi dignissim placerat lacus, 
          sed luctus nunc fermentum id. Morbi aliquam dolor sit amet risus molestie congue. Etiam in urna id lacus facilisis suscipit. In vehicula mi dictum 
          orci tempor gravida. Aenean ut ex in dui consequat commodo non quis ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
          per inceptos himenaeos. Morbi et pharetra turpis. Morbi quis nulla pretium, suscipit lorem sit amet, aliquam nulla. Mauris rutrum ultricies sapien eu aliquet. 
          Ut vitae nulla non sapien finibus euismod. Etiam quis neque laoreet, sodales diam gravida, sodales diam.
        </p>
      </div>
      <div class="imagen-information">
        <img src="../assets/tree.png" class="img-information">
      </div>
    </div>

    <div class="colaborators">
      <div class="colaborators-fixed">
        <img src="../assets/minciencias-logo.png" class="log-minciencia fixed-between">
        <img src="../assets/corpoamazonia.png" class="log-corpoamazonia fixed-between">
        <img src="../assets/sgr.png" class="log-sgr fixed-between">
        <img src="../assets/gobernacion-putumayo.png" class="log-gobernacion fixed-between">
        <img src="../assets/logoitp.png" class="log-itp fixed-between">
      </div>
    </div>
    
    
    <!--div class="pannellum">
      <v-pannellum :config="config" :src="require('@/assets/amazon.jpg')" style="height: 500px;"></v-pannellum>
    </div-->

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios'
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'
import { mapState, mapActions } from 'vuex';

export default defineComponent({
  name: 'HomeView',
  components: {
    
  },
  data() {
    return {
      config: {
        // Aquí puedes configurar los parámetros de la imagen panorámica
        type: 'equirectangular',
        autoLoad: true,
      },
      especies: [],
      suggestions: [] as string [],
      dataToFind: "",
      filteredSuggestions: [] as string [],
      selectSearchMode: "",
      dataFound: [] as string [],
      dataFamilyFound: [] as string [],
      dataScientificName: [] as string []
    };
  },
  mounted() {
    const mySwiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 6000, // tiempo en milisegundos entre cada cambio de imagen
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });

    // Obtener el elemento que se moverá hacia arriba
    const fixedElement = document.querySelector('.c-slider') as HTMLElement;
    const swiperTopPosition = fixedElement.offsetTop;

    if (fixedElement && fixedElement instanceof HTMLElement) {
      // Guardar la posición inicial del elemento
      const initialPosition = fixedElement.getBoundingClientRect().top;

      // Añadir un event listener al evento de scroll de la ventana
      window.addEventListener('scroll', () => {
        // Calcular la cantidad de desplazamiento hacia arriba
        const scrollTop = window.scrollY || window.pageYOffset;
        
        // Actualizar la posición top del elemento
        fixedElement.style.top = `${initialPosition - scrollTop}px`;
      });     
    }
  },
  methods: {
    async especiesListar() {
      await axios.get('http://127.0.0.1:8000/api/especie_forestal')
      .then(response => {
        this.especies = response.data;
      })
      .catch(error => {
        console.log(error)
      })
    },
    async getSuggestions() {
      if(this.dataToFind.length >= 3){
        await axios.get(`http://127.0.0.1:8000/api/especie_forestal/suggestion/${this.selectSearchMode}`)
        .then(response => {
          this.suggestions = response.data;
        })
        .catch(error => {
          console.log(error)
        })
      }else{
        this.suggestions = [];
      }
      this.filterSuggestions();
    },
    filterSuggestions() {
      this.filteredSuggestions = this.suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(this.dataToFind.toLowerCase())
      );
    },
    selectSuggestion(suggestion) {
      this.dataToFind = suggestion;
      this.filteredSuggestions = [];
    },
    async specieToFind() {
      if(this.selectSearchMode == "familia"){
        await axios.get(`http://127.0.0.1:8000/api/especie_forestal/search/familia/${this.dataToFind}`)
        .then(response => {
          console.log('Familias found: ', response.data)
          this.dataFamilyFound = response.data;
          this.saveFamilyInStore();
          this.$router.push({
            name: 'familia'
          })
        })
        .catch(error => {
          console.log('Error: ', error)
        })
      }
      if(this.selectSearchMode == "nom_comunes"){
        await axios.get(`http://127.0.0.1:8000/api/especie_forestal/search/nombre_comun/${this.dataToFind}`)
        .then(response => {
          console.log('Comunes found: ', response.data)
          this.dataFound = response.data;
          this.saveInStore();
          this.$router.push({
            name: 'especie'
          })
        })
        .catch(error => {
          console.log('Error: ', error)
        })
      }
      if(this.selectSearchMode == "nombre_cientifico"){
        await axios.get(`http://127.0.0.1:8000/api/especie_forestal/search/scientificname/${this.dataToFind}`)
        .then(response => {
          console.log('Cientific found: ', response.data)
          this.dataFound = response.data;
          this.saveInStore();
          this.$router.push({
            name: 'especie'
          })
        })
        .catch(error => {
          console.log('Error: ', error)
        })
      }
    },
    ...mapActions(['updateMyData']),
    saveInStore(){
      console.log('Data to store: ', this.dataFound)
      this.updateMyData(this.dataFound)
    },
    ...mapActions(['updateFamilyData']),
    saveFamilyInStore(){
      this.updateFamilyData(this.dataFamilyFound)
    },
    ...mapActions(['updateNomCientificoData']),
    saveNomCientificoStore(){
      this.updateNomCientificoData(this.dataScientificName)
    }
  },
  computed: {
    ...mapState(['dataFoundStore']),
    ...mapState(['dataFamilyStore']),
    ...mapState(['dataNomCientifico'])
  }
});
</script>

<style scoped>
.home {
  margin: 0;
  padding: 0;
  font-size: 0;
  flex-direction: column;
  min-width: 400px;

  width: 100%;

  justify-content: center;
  align-items: center;

  display: grid;
  grid-template-rows: 1fr repeat(2, auto) auto;
  grid-row-gap: 0;
}

.c-slider {
  position: static;
  top: 0;
  width: 100%;
  height: 580px; /* altura de ejemplo */
  display: block;

  grid-row-start: 1;
  grid-row-end: 2;
}

.slider {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  width: 99vw;
  height: auto;
}

.swiper-container {
  position: static;
  top: 0;
  left: 0;
  width: 99vw;
  height: 580px; /*altura fija para el contenedor*/ 
}
.swiper-slide img {
  width: 100%;
  height: 580px;
  object-fit: cover;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
}

.search-data{
  display: grid;
  width: 85vw;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
  font-size: 16px;
  margin-top: 25px;
  margin-bottom: 25px;

  grid-row-start: 2;
  grid-row-end: 3;
  grid-template-columns: 1fr 1fr;

  justify-content: center;
  align-items: center;
}

.info{
  width: 850px;
  grid-column-start: 1;
  grid-column-end: 2;
  background-color: #4c5f47;
  height: 100%;
  width: 100%;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  color: white;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

.search{
  display: flex;
  height: 100%;
  width: 100%;
  background-color: white;
  border: #4c5f47 1px solid;

  align-items: center;
  justify-content: center;

  grid-column-start: 2;
  grid-column-end: 3;

  margin: auto;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
}

.btn {
  color: white;
  background-color: #4c5f47;
}

.btn:hover {
  background-color: #779470;
  color: white;
}

.information-sara {
  width: 85vw;
  font-size: 16px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;

  grid-row-start: 3;
  grid-row-end: 4;
  
  display: grid;
  grid-template-columns: 1fr .2fr;
}

.title-information{
  font-weight: bold;
}

.text-information {
  text-align: justify;
  grid-column-start: 1;
  grid-column-end: 2;
}

.imagen-information {
  grid-column-start: 2;
  grid-column-end: 3;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
}

.img-information {
  width: 220px;
  height: 172px;
}

.p-h {
  text-align: justify;
}

.text-title-search{
  font-weight: bold;
  text-align: left;
}

.colaborators {
  grid-row-start: 4;
  grid-row-end: 5;

  width: 100vw;
  height: auto;
  display: flex;

  align-items: center;
  justify-content: center;

  background-color: #EDF1D6;
  margin: 0;
}

.colaborators-fixed {
  margin-top: 25px;
  margin-bottom: 25px;
}

.log-minciencia {
  width: 25vw;
  height: auto;
}

.log-corpoamazonia {
  width: 7vw;
  height: auto;
}

.log-gobernacion {
  width: 6vw;
  height: auto;
}

.log-sgr {
  width: 12vw;
  height: auto;
}

.log-itp {
  width: 5vw;
  height: auto;
}

.fixed-between {
  margin-right: 50px;
  margin-top: 15px;
  margin-bottom: 15px;
}

.footer {
  position: relative;
  width: 100vw;
  height: auto;
  padding: 0;
  margin: 0;
  bottom: 0;
  grid-row-start: 5;
  grid-row-end: 6;
}

.suggestions-list{
  list-style: none;
  margin-top: 10px;
  text-align: left;
}
/* .pannellum {
  margin-top: 6em;
} */
</style>
