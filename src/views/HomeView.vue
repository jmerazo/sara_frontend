<template>
  <div class="home">
    <div class="pannellum">
      <v-pannellum :config="config" :src="require('@/assets/amazon.jpg')" style="height: 500px;"></v-pannellum>
    </div>
    <FooterApp/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FooterApp from "@/components/Footer.vue";

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      config: {
        // Aquí puedes configurar los parámetros de la imagen panorámica
        type: 'equirectangular',
        autoLoad: true,
      },
    };
  },
  components: {
    FooterApp
  },
});
</script>

<style scoped>
.pannellum {
  margin-top: 6em;
}
</style>
