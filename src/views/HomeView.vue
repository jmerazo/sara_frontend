<template>
  <div class="home">
    <TitleLink :title="myTitle" :icon="myIcon"/>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../assets/media/r1.jpg" /></div>
        <div class="swiper-slide"><img src="../assets/media/r2.jpg" /></div>
        <div class="swiper-slide"><img src="../assets/media/r3.jpg" /></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

    <div class="search-data">
      <div class="info">
        <span>CONSULTA DE INFORMACIÓN</span>
        <p>
          Maecenas eu vehicula enim. Nunc pellentesque hendrerit quam, sit amet euismod justo consequat consequat. Morbi dignissim placerat lacus, 
          sed luctus nunc fermentum id. Morbi aliquam dolor sit amet risus molestie congue. Etiam in urna id lacus facilisis suscipit. In vehicula 
          mi dictum orci tempor gravida. Aenean ut ex in dui consequat commodo non quis ligula. Class aptent taciti sociosqu ad litora torquent per 
          conubia nostra, per inceptos himenaeos. Morbi et pharetra turpis. Morbi quis nulla pretium, suscipit lorem sit amet, aliquam nulla. Mauris 
          rutrum ultricies sapien eu aliquet. Ut vitae nulla non sapien finibus euismod. Etiam quis neque laoreet, sodales diam gravida, sodales diam.
        </p>
      </div>
      <div class="search">
        <span>FILTRA POR:</span><br>
        <select name="" id="">
          <option value="" selected>Seleccione un valor a filtrar</option>
          <option value="">Nombre común</option>
          <option value="">Nombre cientifico</option>
        </select>
        <br>
        <span>VALOR A BUSCAR</span><br>
        <input type="text" placeholder="Inrgese el valor filtrado a buscar...">

      </div>
    </div>
    <!--div class="pannellum">
      <v-pannellum :config="config" :src="require('@/assets/amazon.jpg')" style="height: 500px;"></v-pannellum>
    </div-->
    <FooterApp/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FooterApp from "@/components/Footer.vue";
import TitleLink from '@/components/Titlelink.vue';
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'

export default defineComponent({
  name: 'HomeView',
  components: {
    FooterApp,
    TitleLink
  },
  data() {
    return {
      myTitle: "Inicio",
      myIcon: "<%= BASE_URL %>sara.ico",
      config: {
        // Aquí puedes configurar los parámetros de la imagen panorámica
        type: 'equirectangular',
        autoLoad: true,
      },
    };
  },
  mounted() {
    const swiper = new Swiper('.swiper-container', {
    // Configuración de Swiper
    pagination: {
      el: '.swiper-pagination',
    },
  });
  }
});
</script>

<style scoped>
.home {
  margin: 0;
  padding: 0;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 15px;
  grid-template-areas: 
    "navbar navbar"
    "search search"
    "information information"
    "colaborators colaborators"
    "footer footer";
}
/* .pannellum {
  margin-top: 6em;
} */

.swiper-container {
  grid-area: navbar;
  position: fixed;
  top: 0; /* Altura de la navbar */
  left: 0;
  width: 100%;
  height: 580px;
  z-index: -1; /* Para que quede detrás de la navbar */
  grid-row-start: 1;
  grid-row-end: 2;
}
.swiper-wrapper{
  background-color: rgba(255, 255, 255, 0.5);
}
.swiper-slide img {
  width: 100vw;
}

.search-data{
  grid-area: search;
  display: grid;
  width: 1700px;
  height: 450px;
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
  background-color: #7d8f69;
  height: 100%;
  width: 100%;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
}

.search{
  width: 850px;
  grid-column-start: 2;
  grid-column-end: 3;
  background-color: white;
  height: 100%;
  width: 100%;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
}
</style>
