<template>
  <footer>
    <div class="footer-data">
      <div class="logo">
        <img src="../assets/corpoamazonia-log-white.png" alt="Logo de la empresa" class="logotipo-corpoamazonia">
      </div>
      <div class="contact">
        <div class="sedes">
          <div>
            <h5>Sedes</h5>
            <p class="p-f">Sede Principal Mocoa, Putumayo:</p>
            <p class="p-f">Cra. 17 14-85</p>
            <p class="p-f">Tel: +57 608 4296395,  4296396, 4296642, 4296641, 4295255.</p>
          </div>
        </div>
        <div class="linea">
          <div>
            <h5>Línea Gratuita</h5>
            <p class="p-f">Amazonas, Caquetá y Putumayo: 018000-930506</p>
            <p class="p-f">3152370176</p>
            <p class="p-f">Horario de Atención:</p>
            <p class="p-f">de Lunes a Viernes de 8:00 am a 12:00 m y de 2:00 a 6:00 pm</p>
            <p class="p-f">Correo Electrónico:</p>
          </div>
        </div>
        <div class="ubicacion">
          <div>
            <h5>Ubícanos</h5>
            <p class="p-f">Teléfono: (123) 456-7890</p>
            <p class="p-f">Email: info@miempresa.com</p>
          </div>
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
  position: relative;
  bottom: 0;
  left: 0; 
  width: 100vw;
  height: auto;

  background-color: #40513B;
  color: #fff;
  
  display: flex;
  
  flex-direction: row;
  justify-content: space-stretch;
  align-items: center;
}

.footer-data {
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 15px;
  width: 100vw;
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

  justify-content: right;
  display: grid;

  display: flex;
  width: 100%;
  height: auto;

  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}

.sedes {
  width: auto;
  height: auto;
  display: flex;
  padding: 10px;

  justify-content: left;
  align-items: top;
  text-align: left;

  grid-column-start: 1;
  grid-column-end: 2;
}

.linea {
  width: auto;
  height: auto;
  display: flex;
  padding: 10px;

  justify-content: center;
  align-items: top;
  text-align: left;

  grid-column-start: 2;
  grid-column-end: 3;
}

.ubicacion {
  width: auto;
  height: auto;
  display: flex;
  padding: 10px;

  justify-content: center;
  align-items: top;
  text-align: left;

  grid-column-start: 3;
  grid-column-end: 4;
}

.p-f {
  font-size: 12px;
}
</style>