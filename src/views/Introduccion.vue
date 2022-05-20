<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .BG01.p-4.mb-4
      .row.p-4
        .col-7
          p.mb-4  En este componente se va a comprender lo que es el proceso del #[i render], entendiendo por #[i render], que se trata del paso que se realiza en la interpretación de una escena 3D convertida a 2D, teniendo en cuenta información correspondiente a: la luz, el color, la textura, la profundidad, entre otros. De esta forma, se entienden los pasos del #[i render] que se pueden generar en la escena, y posteriormente utilizarlos en lo que se denomina composición, que se entiende como un proceso en el cual se toman los elementos de renderizado y se les aplican valores, para luego unirlos en una sola imagen de salida, y de esta forma conseguir un mejor acabado, para finalmente continuar con los VFX, que son los efectos la que se aplican al trabajo audiovisual luego de que éste sale de la etapa de producción.
          .bloque-texto-b.color-primario.p-4(data-aos="fade-right")
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              h2.mb-0 El trabajo y el esfuerzo, siempre darán frutos, esta etapa la verás recompensada en tu vida profesional
              i.fas.fa-quote-right
          h4 ¡Bienvenido!
        .col-5(data-aos="fade-left")
          img(src='@/assets/curso/intro/img01.png')


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
