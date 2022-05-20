<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-botones(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Efectos visuales (VFX)
    
    .row.mb-4
      .col-lg-5.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img01.png')
      .col-7.mb-0
        p.mb-0 Los Efectos Visuales (VFX), se trata de un proceso mediante el cual se crean o modifican las imágenes de un segmento audiovisual después de que ha sido grabado, ya sea de un videojuego, una animación, un comercial, una película, entre otros; en donde añadiendo algún tipo de efecto óptico, se logre brindarle al espectador una ilusión realista sobre el escenario, paisaje, o personaje de fantasía que se esté observando, o sobre las acciones que se estén desarrollando en la pieza audiovisual. Por lo general, este proceso se planifica en etapas anteriores a la de postproducción, pero es en esta última, que se diseñan y editan los efectos que se van a añadir al audiovisual, a través del uso de técnicas de modelado, diseño gráfico, animación y otros similares que permiten integrarlos en la composición y visualización de la secuencia.
      
    .BG05.p-4.mb-4
      LineaTiempoE.color-secundario
        .row(titulo="1977" subtitulo="Star Wars")
          .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right") 
            .titulo-sexto.color-primario
              h5 Figura 3
              span Explosión 
            figure
              img(src='@/assets/curso/tema3/img02.png')
              figcaption Nota. Tomado de https://hipertextual.com/2014/12/los-efectos-especiales-de-star-wars-cuando-aun-no-existia-el-croma
          .col-lg-6.mb-0(data-aos="fade-right")
            p Algunos de los eventos más destacados a través de la evolución de los #[strong VFX] se puede decir que se ha dado en el campo de los efectos visuales por computador, que se produjo el año 1977 con el estreno de la película Star Wars en <span style="color:#D44F4A !important; font-weight: bold;">donde se utilizaron diferentes técnicas para lograrlos, como el #[i matte painting], maquetas e inserciones digitales,</span > ver figura 3.
        
        .row(titulo="1993" subtitulo="Jurassic Park")
          .col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
            p Posteriormente, sobre el año 1993, se estrena Jurassic Park, en <span style="color:#D44F4A !important; font-weight: bold;">donde se usaron robots animatrónicos y efectos digitales avanzados</span> para hacer más creíbles los diseños de los dinosaurios y de algunos escenarios, ver figura 4.
          .col-lg-6.mb-0(data-aos="fade-left") 
            .titulo-sexto.color-primario
              h5 Figura 4
              span Animatronics 
            figure
              img(src='@/assets/curso/tema3/img03.png')
              figcaption Nota. Tomado de https://twitter.com/i/events/1274001690786770957

        .row(titulo="1999" subtitulo="The Matrix")
          .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right") 
            .titulo-sexto.color-primario
              h5 Figura 5
              span Matrix <em>bullet time</em>
            figure
              img(src='@/assets/curso/tema3/img04.png')
              figcaption Nota. Tomado de https://rodajesdepeliculas.blogspot.com/2015/03/matrix-la-trilogia-detras-de-las-camaras.html
          .col-lg-6.mb-0(data-aos="fade-right")
            p En 1999 se produjo The Matrix, figura 5, surgiendo como un referente en la evolución de los VFX, gracias al uso de técnicas mejoradas para la creación de efectos generados a través del uso del ordenador, <span style="color:#D44F4A !important; font-weight: bold;">como el efecto “#[i bullet time]” en donde se podía ver los movimientos ralentizados de los personajes esquivando las balas, o el “#[i freeze time]” que brinda la ilusión de que el personaje puede congelar el tiempo</span>; además, de la inserción de entornos digitales.  

        .row(titulo="Actualidad" subtitulo="CGI")
          .col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
            p A partir de aquí, se aceleró la implementación de este tipo de efectos, por lo que se han ido creando y desarrollando técnicas mejoradas con <span style="color:#D44F4A !important; font-weight: bold;">el fin de obtener efectos visuales cada vez más realistas como el Computer Generated Imagery (CGI)</span> utilizado para crear o reconstruir todo tipo de escenarios y personajes de manera digital como en la película Rogue One: A Star Wars Story, en donde se usó para reconstruir a Tarkin y a Leia como se observa en la figura 6, a la izquierda se encuentran los personajes originales (de carne y hueso) y a la derecha la reconstrucción por CGI.
          .col-lg-6.mb-0(data-aos="fade-left") 
            .titulo-sexto.color-primario
              h5 Figura 6
              span Reconstrucción CGI 
            figure
              img(src='@/assets/curso/tema3/img05.png')
              figcaption Nota. Tomado de https://9gag.com/gag/aAw50bZ
        
        .row
          .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right") 
            .titulo-sexto.color-primario
              h5 Figura 7
              span Captura de gestos
            figure
              img(src='@/assets/curso/tema3/img06.png')
              figcaption Nota. Tomado de https://www.notodoanimacion.es/efectos-visuales-warcraft-la-pelicula/
          .col-lg-6.mb-0(data-aos="fade-right")
            p Actualmente, se pueden crear todo tipo de efectos visuales y recrear gran parte de una película digitalmente gracias a la industria de los efectos digitales, como en algunas películas de superhéroes de Marvel en donde el 80% de los planos lleva implementación digital y el 100% se retoca digitalmente, o pueden ser totalmente digitales como en el caso de Warcraft: El origen (2016), figura 7, demostrando cuánto ha evolucionado la industria.

    p.mb-4 En los VFX, algunas de las técnicas más utilizadas son:

    TabsC.color-primario.mb-5(data-aos="flip-up")
      .py-3.py-md-4(titulo="<em>Chroma Key (Keying)</em>")
        .row.justify-content-center.BG06.p-4
          .col-md-5.mb-4.mb-md-0
            h4 <span style="color:#D44F4A !important; font-weight: bold;">#[i Chroma Key (Keying)]</span>
            p.mb-0 Es una técnica audiovisual de composición que consiste en filmar un personaje u objeto frente a un fondo de color específico por lo general verde o azul para aislarlo y recortarlo perfectamente, para posteriormente extraerlo y superponerlo sobre un fondo o escenario diferente, que puede ser real o creado digitalmente, como se ve en la figura. Además, se pone a su disposición un vídeo que explica sobre el uso de fondo verde, lo que ampliará más el concepto.
          .col-md-6
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/K37DUweo7Y4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      .py-3.py-md-4(titulo="Digital <em>Matte Painting</em>")
        .row.justify-content-center.BG06.p-4
          .col-md-5.mb-4.mb-md-0
            img(src='@/assets/curso/tema3/img07.png')
          .col-md-6
            h4 <span style="color:#D44F4A !important; font-weight: bold;">#[i Digital Matte Painting]</span>
            p.mb-4 El #[i digital matte painting] hace uso de técnicas 2D y 3D que combinan habilidades de composición fotográfica, producción 3D y pintura digital, para el diseño y creación de cualquier tipo de fondo, entorno o escenario digital, haciendo posible la construcción de mundos imaginarios que parecen realistas, y que en la vida real serían muy costosos o imposibles de filmar.
            p.mb-0 En las figuras puede apreciarse cómo se modifican los escenarios, mediante la técnica de #[i digital matte painting], generando mayor realismo.
      
      .py-3.py-md-4(titulo="<em>Color grading</em> o etalonaje")
        .row.justify-content-center.BG06.p-4
          .col-md-6.mb-4.mb-md-0
            h4 <span style="color:#D44F4A !important; font-weight: bold;">#[i Color grading] o etalonaje</span>
            p.mb-0 Es una técnica que permite modificar el color digitalmente con el fin de realzar los colores de una pieza audiovisual y corregir problemas de exposición, parámetros de la luz, cambiar el aspecto o look, las siluetas, e integrar los niveles de diferentes planos, con el objetivo de obtener un film con una paleta de colores compacta y homogénea que ayude a transmitir las emociones correctas al espectador (tristeza, alegría, asombro, empatía, etc.), en el momento adecuado y de acuerdo a su propósito.
          .col-md-6
            img(src='@/assets/curso/tema3/img08.png')

      .py-3.py-md-4(titulo="<em>Tracking</em> o seguimiento")
        .row.justify-content-center.BG06.p-4
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/tema3/img09.png')
          .col-md-7
            h4 <span style="color:#D44F4A !important; font-weight: bold;">#[i Tracking] o seguimiento</span>
            p.mb-4 Esta técnica consiste en el uso de marcadores o pixeles que se sitúan en lugares frente a la cámara con el fin de establecer puntos de memoria para que el ordenador pueda reconocer la posición tanto de la cámara como de los personajes u objetos antes y después del movimiento, permitiendo calcular su trayectoria en una escena y posteriormente superponer otros elementos digitalmente para que sigan la misma trayectoria. Esto nos permite identificar qué objetos están fijos, determinar cuáles se mueven y revelar la posición y trayectoria de la cámara dentro de una escena, con el fin de estabilizar un plano, incluir efectos visuales, elementos virtuales y modificar o cambiar el escenario o entorno.
            p.mb-0 Usted encontrará a disponibilidad, varios vídeos en donde podrá observar en detalle este proceso, así como los resultados que se logran, además de la integración de efectos en escena real mediante la adición de marcadores manuales. Igualmente se ha dispuesto el siguiente documento, que ofrece un paso a paso del proceso: 

      .py-3.py-md-4(titulo="<em>Morphing</em>")
        .row.justify-content-center.BG06.p-4
          .col-md-6.mb-4.mb-md-0
            h4 <span style="color:#D44F4A !important; font-weight: bold;">#[i Morphing]</span>
            p.mb-0 Es una técnica que consiste en tomar la imagen o video de un personaje u objeto inicial el cual puede ser real o no, para transformarlo en otro diferente, haciendo uso de #[i software] de procesamiento de imágenes y video, con el fin de crear personajes, objetos y acciones que brinden la sensación de que se ha producido una metamorfosis. Para ello, se necesita digitalizar las imágenes del elemento inicial, es decir, el original o real y el objeto final en el que va a quedar transformado, posteriormente el #[i software] busca aquellos puntos en común entre ambas imágenes para procesar la transformación y realizar una animación digital, como se ve en la figura.
          .col-md-5
            img(src='@/assets/curso/tema3/img10.gif')

      .py-3.py-md-4(titulo="<em>Motion capture (Mocap)</em> o captura de movimiento")
        .row.justify-content-center.BG06.p-4
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/tema3/img11.png')
          .col-md-6
            h4 <span style="color:#D44F4A !important; font-weight: bold;">#[i Motion capture] (Mocap) o captura de movimiento</span>
            p.mb-4 Esta técnica se usa para grabar y almacenar movimientos de animales y personas para posteriormente integrarlos a un personaje virtual o modelo digital 3D, el cual será animado con los movimientos registrados con el fin de que el segmento animado sea lo más realista posible.

      .py-3.py-md-4(titulo="Dibujos digitales")
        .row.justify-content-center.BG06.p-4
          .col-md-8.mb-4.mb-md-0
            h4 <span style="color:#D44F4A !important; font-weight: bold;">Dibujos digitales</span>
            p.mb-4 El dibujo digital es una técnica artística que, a través de un #[i software], simula las técnicas del dibujo tradicional, proporcionando herramientas digitales como tintas, acuarelas, carboncillo, óleos, etc.; con el fin de diseñar personajes y objetos 3D, entornos, escenarios y fondos digitales, texturas, luces en gráficos por computador, efectos de partículas, entre otros; para finalmente incorporarlos en una pieza audiovisual o convertirlos en #[i cliparts] e infografías
            p.mb-0 Existen muchas otras técnicas utilizadas para la edición de efectos visuales como #[i Deep Compositing, Paint & Prep] | Borrados & Parches, #[i Matchmoving y rotomation], la Rotoscopia, #[i 3D Camera projection, Match moving, Live-action, Go-Motion], entre otras; que permiten la creación y edición de diferentes tipos de efectos visuales con los cuales se pueden desarrollar personajes, escenarios y acciones fantásticas y realistas, que incrementan la inmersión del espectador en la narrativa de la pieza audiovisual.
          .col-md-3
            img(src='@/assets/curso/tema3/img12.png')

    .row.mb-4
      .col-6(data-aos="fade-right")
        .BG02.p-3
          p.text-bold.mb-0 Una mayor explicación sobre este tema se podrá ver en los siguientes videos:

    TabsB.color-acento-contenido.mb-5(data-aos="flip-up")
      .py-4.py-md-5(titulo="<em>Tracking1</em>" :icono="require('@/assets/curso/tema3/img13.svg')")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/U8hY4fdgx4U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
      .py-4.py-md-5(titulo="<em>Tracking compositing</em>" :icono="require('@/assets/curso/tema3/img13.svg')")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2lvLvOxOLzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.mb-4
      .col-6(data-aos="fade-right")
        .BG02.p-3
          p.text-bold.mb-0 En cuanto al resultado del proceso, se podrá consultar la respectiva información en los siguientes videos:

    TabsB.color-acento-contenido.mb-5(data-aos="flip-up")
      .py-4.py-md-5(titulo="Resultado compos <em>tracking</em> 1" :icono="require('@/assets/curso/tema3/img13.svg')")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/bjMoS4VQQDI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
      .py-4.py-md-5(titulo="Resultado compos <em>tracking</em> 2" :icono="require('@/assets/curso/tema3/img13.svg')")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/L-xIlOEb7uQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.mb-4
      .col-6(data-aos="fade-right")
        .BG02.p-3
          p.text-bold.mb-0 Además, se puede conocer algo más sobre la integración de efectos en escena real mediante la adición de marcadores manualmente, en el siguiente video:
    
    figure(data-aos="flip-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/dPqM5qnUd1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



</template>

<script>
export default {
  name: 'Tema3',
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
