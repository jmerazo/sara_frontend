<template>
  <footer class="footer">
    <div class="container">
      <div class="logo">
        <img src="../assets/corpoamazonia.jpg" alt="Logo de la empresa" style="align-self: center;">
      </div>
      <div class="contact">
        <div class="column">
          <h4>Dirección</h4>
          <p>123 Calle Principal, Ciudad</p>
        </div>
        <div class="column">
          <h4>Contacto</h4>
          <p>Teléfono: (123) 456-7890</p>
          <p>Email: info@miempresa.com</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterApp"
}
</script>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-top: auto;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
}

.logo {
  grid-column-start: 1;
  grid-column-end: 2;
  width: 180px;
  height: 180px;
  border-radius: 20px;
}

.contact {
  grid-column-start: 2;
  grid-column-end: 3;
  justify-content: left;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}

.column {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>