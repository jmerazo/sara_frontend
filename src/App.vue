<template>
  <navbar-top></navbar-top>
  <router-view/>
</template>

<script lang="ts">
import NavbarTop from "@/components/Navbar.vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: 'App',
  components: {
    NavbarTop
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
}
</style>
