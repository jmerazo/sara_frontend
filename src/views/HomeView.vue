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
        <span class="font-semibold text-lg">CONSULTA DE INFORMACIÓN</span><br><br>
        <p>
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
          <select name="" id="" class="form-control">
            <option value="" disabled selected>Seleccione un valor a filtrar</option>
            <option value="">Nombre común</option>
            <option value="">Nombre cientifico</option>
          </select>
        </div>
        <div class="input-search col-8">
          <span class="text-title-search">VALOR A BUSCAR</span><br>
          <input type="text" placeholder="Inrgese el valor filtrado a buscar..." class="form-control">
        </div>
        <div>
          <button type="submit" class="btn">Buscar</button> 
        </div>       
      </div>
    </div>

    <div class="information-sara">
      <div class="text-information">
        <span class="title-information">PROYECTO SEMILLAS CTEI</span><br><br>
        <p>
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
      <img src="../assets/minciencias-logo.png" class="log-minciencia fixed-between">
      <img src="../assets/corpoamazonia.png" class="log-corpoamazonia fixed-between">
      <img src="../assets/logo-eco-jardines.png" class="log-ecojardines fixed-between">
    </div>
    
    
    <!--div class="pannellum">
      <v-pannellum :config="config" :src="require('@/assets/amazon.jpg')" style="height: 500px;"></v-pannellum>
    </div-->
    <div class="footer">
      <FooterApp/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FooterApp from "@/components/Footer.vue";
/* import TitleLink from '@/components/Titlelink.vue';*/
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'

export default defineComponent({
  name: 'HomeView',
  components: {
    FooterApp
  },
  data() {
    return {
      config: {
        // Aquí puedes configurar los parámetros de la imagen panorámica
        type: 'equirectangular',
        autoLoad: true,
      },
    };
  },
  mounted() {
    const swiper = new Swiper('.swiper-container', {
      autoplay: {
        delay: 5000 // tiempo en milisegundos entre cada cambio de imagen
      },
      // Configuración de Swiper
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
      slidesPerView: 1,
      spaceBetween: 10
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
  }
});
</script>

<style scoped>
.home {
  margin: 0;
  padding: 0;
  font-size: 0;
  flex-direction: column;
  display: flex;
  min-width: 400px;

  width: 100vw;

  justify-content: center;
  align-items: center;

  display: grid;
  grid-template-rows: repeat(3, 1fr) auto;
  grid-row-gap: 0;
}

.c-slider {
  position: fixed;
  top: 0;
  width: 100vw;
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
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
}

.search-data{
  position: sticky;
  display: grid;
  width: 85vw;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
  font-size: 16px;

  padding-top: 120px;

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
  border: #547153 0.2px solid;

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
  background-color: #7d8f69;
}

.btn:hover {
  background-color: #547153;
  color: white;
}

@media (max-width: 1900px) {
  .search-data {
    padding-top: 0px;
  }
}

.information-sara {
  width: 85vw;
  font-size: 16px;
  margin-left: auto;
  margin-right: auto;

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
}

.img-information {
  width: 150px;
  height: 172px;
}

p {
  text-align: justify;
}

.text-title-search{
  font-weight: bold;
  text-align: left;
}

.colaborators {
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-row-start: 4;
  grid-row-end: 5;
  background-color: #e6e5a4;
  margin: 0;
}

.log-minciencia {
  width: 25vw;
  height: auto;
}

.log-corpoamazonia {
  width: 8vw;
  height: auto;
}

.log-ecojardines {
  width: 10vw;
  height: auto;
}

.fixed-between {
  margin-right: 50px;
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
/* .pannellum {
  margin-top: 6em;
} */
</style>
