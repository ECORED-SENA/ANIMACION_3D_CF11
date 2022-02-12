<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-botones(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Compositor
    
    p.mb-4 Los nodos de composición (figura1) permiten mejorar las imágenes, los videos o las secuencias de imágenes. Además, se pueden unificar varios elementos en una misma secuencia, alterando sus colores, brillos, crear máscaras, entre muchos más. Así mismo, se pueden crear composiciones estáticas, las cuales serán homogéneas, y composiciones dinámicas, que a medida que avanza el clip, pueden tener parámetros diferentes, con los nodos se puede cambiar el estado de ánimo que genera la imagen, por ejemplo, una imagen colorida, puede tornarse gris, lo que genera dramatismo; una imagen con tonos azules puede ser fría, o para transmitir rabia o enojo, se puede entintar de color rojo, con el amarillo se puede transmitir alegría, felicidad.

    .BG04.p-4.mb-4
      .row.justify-content-center
        .titulo-sexto.color-primario(data-aos="fade-right")
          h5 Figura 1
          p Compositor 
        .col-11
          figure(data-aos="flip-up")
            img(src='@/assets/curso/tema2/img01.png')
            figcaption Nota. Tomado de https://docs.blender.org/manual/es/2.93/compositing/introduction.html

    .row.mb-4
      .col-8
        .BG02.p-3
          p.text-bold.mb-0 Se podrá revisar este tema con mayor detalle, consultando los videos que encuentra a continuación:
    
    LineaTiempoD.color-primario.mb-5(data-aos="fade-down")
      .row(numero="1" titulo="Herramienta Compositing de Blender")
        .col-12.tarjeta.BG03.p-4
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
      .row(numero="2" titulo="Nodos Compositing")
        .col-12.tarjeta.BG03.p-4
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    h4 Composición multipase
    p.mb-4 Es la composición con múltiples imágenes, esta información es extraída durante el proceso del render, adquiriendo así datos de la iluminación, colores, shaders, texturas, rugosidades, alfas, profundidades, reflejos, normales, Z-Depht; esto permite que, al combinar toda la información, en el programa de composición, se puedan manipular individualmente cada uno de estos elementos, dependiendo de lo que se necesite reforzar. En la siguiente figura 2, se pueden observar algunos pases:

    .BG04.p-4.mb-4
      .row.justify-content-center
        .titulo-sexto.color-primario(data-aos="fade-right")
          h5 Figura 2
          p Ejemplo de composición multipase 
        .col-11
          figure(data-aos="flip-up")
            img(src='@/assets/curso/tema2/img02.png')
            figcaption Nota. Tomado de https://www.notodoanimacion.es/tecnicas-de-composicion-digital/



</template>

<script>
export default {
  name: 'Tema2',
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
