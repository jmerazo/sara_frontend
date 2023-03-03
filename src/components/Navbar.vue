<template>
  <div class="navbar">
    <a href="#"><img class="log-sara" src="../assets/sara.png"/></a>
    <ul class="nav-links">
      <li><a class="text-navbar" href="#">Informes</a></li>
      <li><a class="text-navbar" href="#">Acerca de nosotros</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavbarTop",
  mounted() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });        
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