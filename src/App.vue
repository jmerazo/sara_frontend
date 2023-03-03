<template>
  <NavbarTop/>
  <router-view/>
  <FooterApp/>
</template>

<script lang="ts">
import NavbarTop from "@/components/Navbar.vue";
import FooterApp from "@/components/Footer.vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: 'App',
  components: {
    NavbarTop,
    FooterApp
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  width: 100vw;
  height: 100%;

  display: grid;
  grid-template-rows: 1fr auto;
}

body {
  width: 100vw;
  overflow-x: hidden;
}
</style>
