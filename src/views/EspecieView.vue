<template>
    <div class="especie">
        <div class="img-general">
            <img class="img-gral" src="../assets/media/r4.jpg" alt="Imágen general especie">
        </div>

        <div class="informacion-general">
            <div class="informacion-uno">
                <div class="codigo-especie">
                    <h5 class="title-especie">CÓDIGO DE ESPECIE</h5>
                    <p class="text-especie">{{ dataFoundStore.specie[1] }}</p>
                </div>
                <div class="familia">
                    <h5 class="title-especie">FAMILIA</h5>
                    <p class="text-especie">{{ dataFoundStore.specie[6] }}</p>
                </div>
                <div class="nombre-cientifico">
                    <h5 class="title-especie">NOMBRE CIENTÍFICO</h5>
                    <p class="text-especie">{{ dataFoundStore.specie[4] }}</p>
                </div>
                <div class="nombre-comun">
                    <h5 class="title-especie">NOMBRE COMÚN</h5>
                    <p class="text-especie">{{ dataFoundStore.specie[2] }}</p>
                </div>
                <div class="otros-nombres">
                    <h5 class="title-especie">OTROS NOMBRES COMUNES</h5>
                    <p class="text-especie">{{ dataFoundStore.specie[3] }}</p>
                </div>
                <div class="sinonimos">
                    <h5 class="title-especie">SINÓNIMOS</h5>
                    <p class="text-especie">{{ dataFoundStore.specie[5] }}</p>
                </div>
                <div class="distribucion">
                    <h5 class="title-especie">DISTRIBUCIÓN</h5>
                    <p class="text-especie">{{ dataFoundStore.specie[8] }}</p>
                </div>
                <div class="habito">
                    <h5 class="title-especie">HÁBITO</h5>
                    <p class="text-especie">{{ dataFoundStore.specie[9] }}</p>
                </div>
                <div class="follaje">
                    <h5 class="title-especie">FOLLAJE</h5>
                    <p class="text-especie">{{ dataFoundStore.specie[10] }}</p>
                </div>
            </div>

            <div class="line"></div>

            <div class="informacion-dos">
                <div class="forma-copa">
                    <h5 class="title-especie">FORMA DE LA COPA</h5>
                    <p class="text-especie">{{ dataFoundStore.specie[11] }}</p>
                </div>
                <div class="tipo-hojas">
                    <h5 class="title-especie">TIPO DE HOJAS</h5>
                    <p class="text-especie">{{ dataFoundStore.specie[12] }}</p>
                </div>
                <div class="disposicion-hojas">
                    <h5 class="title-especie">DISPOSICIÓN DE LAS HOJAS</h5>
                    <p class="text-especie">{{ dataFoundStore.specie[13] }}</p>
                </div>
                <div class="hojas">
                    <h5 class="title-especie">HOJAS</h5>
                    <p class="text-especie">{{ dataFoundStore.specie[15] }}</p>
                    <div class="btn-img-especie">
                        <a class="btn" type="submit"><font-awesome-icon class="fi-open-img-found" :icon="['fas', 'leaf']"/></a>
                    </div>
                </div>
                <div class="flor">
                    <h5 class="title-especie">FLOR</h5>
                    <p class="text-especie">{{ dataFoundStore.specie[17] }}</p>
                    <div class="btn-img-especie">
                        <a class="btn" type="submit"><font-awesome-icon class="fi-open-img-found" :icon="['fas', 'spa']"/></a>
                    </div>                
                </div>
                <div class="frutos">
                    <h5 class="title-especie">FRUTOS</h5>
                    <p class="text-especie">{{ dataFoundStore.specie[19] }}</p>
                    <div class="btn-img-especie">
                        <a class="btn" type="submit"><font-awesome-icon class="fi-open-img-found" :icon="['fas', 'apple-alt']"/></a>
                    </div>
                </div>
                <div class="semillas">
                    <h5 class="title-especie">SEMILLAS</h5>
                    <p class="text-especie">{{ dataFoundStore.specie[21] }}</p>
                    <div class="btn-img-especie">
                        <a class="btn" type="submit"><font-awesome-icon class="fi-open-img-found" :icon="['fas', 'seedling']"/></a>
                    </div>
                </div>
                <div class="tallo">
                    <h5 class="title-especie">TALLO</h5>
                    <p class="text-especie">{{ dataFoundStore.specie[22] }}</p>
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

export default defineComponent({
  name: 'EspecieView',
  components: {
  },
  data() {
    return {
        comunes: [],
        newComunes: []
    }
  },
  computed: {
    ...mapState(['dataFoundStore'])
  },
  mounted() {
/*     console.log('Data: ', this.dataFoundStore.specie) */
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
}

.informacion-uno {
    grid-column-start: 1;
    grid-column-end: 2;

    display: grid;
    grid-template-rows: repeat(8, 1fr);

    margin: 40px;
    width: 90%;
}

.title-especie {
    font-weight: bold;
    text-align: left;
}

.text-especie {
    text-align: left;
}

.codigo-especie{
    grid-row-start: 1;
    grid-row-end: 2;
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
    grid-template-rows: repeat(8, 1fr);

    margin: 40px;
    width: 90%;
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

</style>