<template>
  <div class="navbar">
    <a href="#"><img class="log-sara" src="../assets/sara.png"/></a>
    <div v-if="dataFoundStore != '' && showNameSpecie == true" class="title-specie-navbar">
      <span>{{ dataFoundStore.nombre_cientifico }}</span>
    </div>
    <ul class="nav-links">
      <li><a class="text-navbar" href="#">Informes</a></li>
      <li><a class="text-navbar" href="#">Acerca de nosotros</a></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "NavbarTop",
  data() {
    return {
      showNameSpecie: false
    }
  },
  mounted() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
    // Verificar si la ruta actual es "Home"
    if (this.$route.name === 'especie') {
      this.showNameSpecie = true; // Mostrar la información si se encuentra en la vista
    }
  },
  computed: {
    ...mapState(['dataFoundStore'])
  },
  watch: {
    $route(to, from) {
      // Verificar si la ruta actual es "MyView"
      if (to.name === 'especie') {
        this.showNameSpecie = true; // Mostrar la información si se encuentra en la vista
      } else {
        this.showNameSpecie = false; // Ocultar la información en cualquier otra vista
      }
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  transition: background-color 0.5s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 999;
}

.title-specie-navbar {
  font-weight: bold;
  font-size: 25px;
  font-style: italic;
  color: black;
  transition: color 0.3s ease-in-out;
}

.title-specie-navbar.black {
  color: black;
}

.navbar.scrolled {
  background-color: rgba(255, 255, 255, 0.5);
}

.log-sara{
  margin-right: 20px;
  width: 70px;
  height: 56px;
  margin-left: 20px;
}

.logo-sara:hover {
  background-color: azure;
}

.nav-links {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin: 0 10px;
}

.nav-links li a {
  color: black;
  text-decoration: none;
}

.text-navbar {
  font-weight: bold;
}
</style>