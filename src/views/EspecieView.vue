<template>
    <div class="especie">
        <div class="img-general">
            <img class="img-gral" src="../assets/media/r3.jpg" alt="Imágen general especie">
        </div>

        <div class="informacion-general">
            <div class="informacion-uno">
                <div class="cod-e">
                    <h5>CÓDIGO DE ESPECIE</h5>
                </div>

            </div>
            <div class="informacion-dos">

            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EspecieView',
  components: {
  }
})
</script>

<style>
.especie {
    position: absolute;
    width: 100vw;
    height: 100vh;

    margin: 0;
    padding: 0;

    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 10px;
}
.img-general {
    width: 100vw;
    height: auto;

    grid-row-start: 1;
    grid-row-end: 2;
}

.img-gral {
    width: 100vw;
    height: 70vh;
}

.informacion-general {
    grid-row-start: 2;
    grid-row-end: 3;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-start: 1;
    grid-column-end: 2;
}
</style>