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
  bottom: 0;
}

.container {
  flex: 1;
  display: flex;
  justify-content: space-between;
}

.contact {
  display: flex;
  justify-content: space-between;
}

.column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>