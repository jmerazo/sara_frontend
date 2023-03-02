<template>
  <footer>
    <div class="footer-data">
      <div class="logo">
        <img src="../assets/logotipo-corpoamazonia.png" alt="Logo de la empresa" class="logotipo-corpoamazonia">
      </div>
      <div class="contact">
        <div class="sedes">
          <h5>Sedes</h5>
          <p>Sede Principal Mocoa, Putumayo:</p>
          <p>Cra. 17 14-85</p>
          <p>Tel: +57 608 4296395,  4296396, 4296642, 4296641, 4295255.</p>
        </div>
        <div class="linea">
          <h5>Línea Gratuita</h5>
          <p>Amazonas, Caquetá y Putumayo: 018000-930506</p>
          <p>3152370176</p>
          <p>Horario de Atención:</p>
          <p>de Lunes a Viernes de 8:00 am a 12:00 m y de 2:00 a 6:00 pm</p>
          <p>Correo Electrónico:</p>
        </div>
        <div class="ubicacion">
          <h5>Ubícanos</h5>
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
footer {
  position: sticky;
  bottom: 0;
  left: 0; 
  width: 100vw;
  height: 250px;

  background-color: #7d8f69;
  color: #fff;
  
  display: flex;
  
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.footer-data {
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 15px;
}

.logo {
  grid-column-start: 1;
  grid-column-end: 2;
}

.logotipo-corpoamazonia {
  width: auto;
  height: auto;
  margin: 10px;
}

.contact {
  grid-column-start: 2;
  grid-column-end: 3;

  justify-content: left;
  display: grid;

  display: flex;

  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}

.sedes {
  width: auto;
  height: auto;
  display: flex;

  justify-content: center;
  align-items: center;

  grid-column-start: 1;
  grid-column-end: 2;
}

.linea {
  width: auto;
  height: auto;
  display: flex;

  justify-content: center;
  align-items: center;

  grid-column-start: 2;
  grid-column-end: 3;
}

.ubicacion {
  width: auto;
  height: auto;
  display: flex;

  justify-content: center;
  align-items: center;

  grid-column-start: 3;
  grid-column-end: 4;
}
</style>