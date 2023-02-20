<template>
  <div class="home">
    <NavbarTop/>
    <FooterApp/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavbarTop from "@/components/Navbar.vue";
import FooterApp from "@/components/Footer.vue";

export default defineComponent({
  name: 'HomeView',
  components: {
    NavbarTop,
    FooterApp
  },
});
</script>
