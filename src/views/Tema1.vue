<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-botones(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Elementos de #[i render]
    
    p.mb-4 Los pases de #[i render] sirven para separar en diferentes capas -por decirlo así- la información de nuestra escena. Al estar trabajando por separado, se podrá utilizar y mezclar como se necesite. Esta división se hace en relación con que las luces sean directas o luces indirectas, los colores y la información de profundidad, entre otros, de esta forma se pueden editar individualmente.

    .row.mb-4
      .col-6(data-aos="fade-right")
        .BG02.p-3
          p.text-bold.mb-0 En los siguientes videos, se podrá encontrar más información al respecto:

    LineaTiempoD.color-primario.mb-5(data-aos="fade-down")
      .row(numero="1" titulo="Elementos del <em>render</em>, ajustes básicos")
        .col-12.tarjeta.BG03.p-4
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/OjSAdCzwgzM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
      .row(numero="2" titulo="Pases de <em>render</em>")
        .col-12.tarjeta.BG03.p-4
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/84IMdR8ArAE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center
      .col-lg-5(data-aos="fade-right")
        a.anexo.mb-4(:href="obtenerLink('/downloads/ElementosRender.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[strong Además]. encontrará el paso a paso correspondiente en el siguiente documento:
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
