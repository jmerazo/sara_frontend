<template>
  <div ref="panorama"></div>
</template>

<script>
import pannellum from "pannellum";
export default {
  name: "PannellumApp",
  mounted() {
    const viewer = pannellum.viewer(this.$refs.panorama, {
      type: "equirectangular",
      panorama: "../assets/amazon.jpg"
    });
  }
}
</script>

<style scoped>

</style>