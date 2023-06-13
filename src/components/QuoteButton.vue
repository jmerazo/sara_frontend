<template>
    <div>
      <button class="floating-button" @click="showText = !showText"><font-awesome-icon class="fas-quote" :icon="['fas', 'quote-right']"/>Cómo Citar</button>
      <div v-if="showText" class="citation-text">
        <h1>Cítese como</h1>
        <p>Bernal, R., S.R. Gradstein & M. Celis (eds.). 2019. Sistema de información de Arboles y plantas del Sur de la Amazonia colombiana, Corpoamazonia, Bogotá. https://sara.amazoniaesenciadevida.com.co</p>
        <button @click="copyText"><font-awesome-icon class="fas-copy-quote" :icon="['fas', 'copy']"/></button>
      </div>
    </div>
</template>

<script>
export default {
    name: "QuoteButton",
    data() {
        return {
            showText: false
        }
    },
    methods: {
        copyText() {
            const textToCopy = "Bernal, R., S.R. Gradstein & M. Celis (eds.). 2019. Sistema de información de Arboles y plantas del Sur de la Amazonia colombiana, Corpoamazonia, Bogotá. https://sara.amazoniaesenciadevida.com.co"; // Reemplaza con el texto que deseas copiar

            navigator.clipboard.writeText(textToCopy)
            .then(() => {
                console.log("Texto copiado al portapapeles");
            })
            .catch((error) => {
                console.error("Error al copiar el texto:", error);
            });
        }
    }
}
</script>

<style>
.floating-button {
  position: fixed;
  bottom: 500px;
  right: 0px;
  z-index: 99999;
  background-color: #40513B;
  color: white;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  /* Estilos adicionales */
}

.citation-text {
  position: fixed;
  bottom: 440px;
  right: 115px;
  background-color: #fff;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 25px;
  /* Estilos adicionales */
}

.fas-quote{
    margin-right: 5px;
}

.fas-copy-quote{
    color: #40513B;
}
</style>
