<template>
    <div class="especie">
        <div class="img-general">
            <img class="img-gral" src="../assets/media/r4.jpg" alt="Imágen general especie">
        </div>

        <div class="informacion-general">
            <div class="informacion-uno">
                <div class="data-especie">
                    <h5 class="title-especie">FAMILIA</h5>
                    <p class="text-especie">{{ dataFoundStore.familia }}</p>
                </div>
                <div class="data-especie">
                    <h5 class="title-especie">NOMBRE CIENTÍFICO</h5>
                    <p class="text-especie">{{ dataFoundStore.nombre_cientifico }}</p>
                </div>
                <div class="data-especie">
                    <h5 class="title-especie">NOMBRE COMÚN</h5>
                    <p class="text-especie">{{ dataFoundStore.nom_comunes }}</p>
                </div>
                <div class="data-especie">
                    <h5 class="title-especie">OTROS NOMBRES COMUNES</h5>
                    <p class="text-especie">{{ dataFoundStore.otros_nombres }}</p>
                </div>
                <div class="data-especie">
                    <h5 class="title-especie">SINÓNIMOS</h5>
                    <p class="text-especie">{{ dataFoundStore.sinonimos }}</p>
                </div>
                <div class="data-especie">
                    <h5 class="title-especie">DISTRIBUCIÓN</h5>
                    <p class="text-especie">{{ dataFoundStore.distribucion }}</p>
                </div>
                <div class="data-especie">
                    <h5 class="title-especie">HÁBITO</h5>
                    <p class="text-especie">{{ dataFoundStore.habito }}</p>
                </div>
                <div class="data-especie">
                    <h5 class="title-especie">FOLLAJE</h5>
                    <p class="text-especie">{{ dataFoundStore.follaje }}</p>
                </div>
            </div>

            <div class="line"></div>

            <div class="informacion-dos">
                <div class="data-especie">
                    <h5 class="title-especie">FORMA DE LA COPA</h5>
                    <p class="text-especie">{{ dataFoundStore.forma_copa }}</p>
                </div>
                <div class="data-especie">
                    <h5 class="title-especie">TIPO DE HOJAS</h5>
                    <p class="text-especie">{{ dataFoundStore.tipo_hoja }}</p>
                </div>
                <div class="data-especie">
                    <h5 class="title-especie">DISPOSICIÓN DE LAS HOJAS</h5>
                    <p class="text-especie">{{ dataFoundStore.disposicion_hojas }}</p>
                </div>
                <div class="data-especie">
                    <h5 class="title-especie">HOJAS</h5>
                    <p class="text-especie">{{ dataFoundStore.hojas }}</p>
                    <div class="btn-img-especie">
                        <a class="btn" type="submit" @click="showPopup()"><font-awesome-icon class="fi-open-img-found" :icon="['fas', 'leaf']"/></a>
                    </div>
                </div>

                <!-- This is image popup -->
                <div v-if="isPopupVisible" class="popup">
                    <div class="popup-inner">
                        <button class="close-button" @click="hidePopup()">X</button>
                        <swiper :options="swiperOptions">
                            <swiper-slide v-for="(image, index) in images" :key="index">
                                <img class="img-popup" :src="image" />
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>

                <div class="data-especie">
                    <h5 class="title-especie">FLOR</h5>
                    <p class="text-especie">{{ dataFoundStore.flor }}</p>
                    <div class="btn-img-especie">
                        <a class="btn" type="submit"><font-awesome-icon class="fi-open-img-found" :icon="['fas', 'spa']"/></a>
                    </div>                
                </div>
                <div class="data-especie">
                    <h5 class="title-especie">FRUTOS</h5>
                    <p class="text-especie">{{ dataFoundStore.frutos }}</p>
                    <div class="btn-img-especie">
                        <a class="btn" type="submit"><font-awesome-icon class="fi-open-img-found" :icon="['fas', 'apple-alt']"/></a>
                    </div>
                </div>
                <div class="data-especie">
                    <h5 class="title-especie">SEMILLAS</h5>
                    <p class="text-especie">{{ dataFoundStore.semillas }}</p>
                    <div class="btn-img-especie">
                        <a class="btn" type="submit"><font-awesome-icon class="fi-open-img-found" :icon="['fas', 'seedling']"/></a>
                    </div>
                </div>
                <div class="data-especie">
                    <h5 class="title-especie">TALLO</h5>
                    <p class="text-especie">{{ dataFoundStore.tallo }}</p>
                    <div class="btn-img-especie">
                        <a class="btn" type="submit"><font-awesome-icon class="fi-open-img-found" :icon="['fas', 'tree']"/></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="consultas-relacionadas">
            <img src="../assets/logo-eco-jardines.png" alt="">
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

SwiperCore.use([Navigation, Pagination, Autoplay]);


export default defineComponent({
  name: 'EspecieView',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
        comunes: [],
        newComunes: [],
        isPopupVisible: false,
        images: [
            'https://1.bp.blogspot.com/_k9U0fVIvav8/S9LLChHaHVI/AAAAAAAAAJA/bMBz0eqFMbg/s1600/anacardium_excelsum_ra10858_01.jpg',
            'https://www.discoverlife.org/IM/I_BC/0000/320/Anacardium_excelsum,_leaf_top,I_BC61.jpg',
            'https://biogeodb.stri.si.edu/bioinformatics/dfmfiles/files/c/18010/18010_180.jpg',
        ],
        swiperOptions: {
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
            pagination: {
            el: '.swiper-pagination',
            },
            autoplay: {
            delay: 3000,
            },
        },
    }
  },
  computed: {
    ...mapState(['dataFoundStore'])
  },
  mounted() {
/*     console.log('Data: ', this.dataFoundStore.specie) */
  },
  methods: {
    showPopup() {
      this.isPopupVisible = true;
    },
    hidePopup() {
      this.isPopupVisible = false;
    },
  }
})
</script>

<style>
.especie {
    position: relative;
    width: 100vw;
    height: auto;

    margin: 0;
    padding: 0;

    display: grid;
    grid-template-rows: 1fr auto;
    grid-gap: 10px;
}
.img-general {
    width: 100vw;
    height: 70vh;

    grid-row-start: 1;
    grid-row-end: 2;
}

.img-gral {
    width: 100vw;
    height: 70vh;
    object-fit: cover;
}

.informacion-general {
    grid-row-start: 2;
    grid-row-end: 3;

    margin-left: auto;
    margin-right: auto;

    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-auto-rows: auto;
}

.informacion-uno {
    grid-column-start: 1;
    grid-column-end: 2;

    display: grid;
    grid-template-rows: repeat(1, auto);
    grid-auto-rows: auto;

    margin: 40px;
}

.title-especie {
    font-weight: bold;
    text-align: left;
}

.text-especie {
    text-align: left;
}

.line {
    grid-column-start: 2;
    grid-column-end: 3;

    border-left: 2px solid #7d8f69;
    width: 2px;
    height: auto;

    margin-top: 30px;
    margin-bottom: 30px;
}

.informacion-dos {
    grid-column-start: 3;
    grid-column-end: 4;

    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-auto-rows: auto;

    margin: 40px;
}

.data-especie{
    height: auto;
}

.fi-open-img-found{
    width: 1.8vw;
    height: auto;

    color: #7d8f69;
}

.btn-img-especie{
    display: flex;
    justify-content: right;
    align-items: right;
}

.consultas-relacionadas {
    grid-row-start: 3;
    grid-row-end: 4;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.popup-inner {
  max-width: 80%;
  max-height: 80%;
  overflow: hidden;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 9999;
}

.img-popup {
    border-radius: 25px;
}
</style>