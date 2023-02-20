<template>
  <div class="navbar">
    <a href="#"><img class="log-sara" src="../assets/sara.png"/></a>
    <ul class="nav-links">
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Servicios</a></li>
      <li><a href="#">Acerca de</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavbarTop"
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
}

.log-sara{
  margin-right: 20px;
  width: 70px;
  height: 56px;
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
</style>