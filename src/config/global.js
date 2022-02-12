export default {
  global: {
    componenteFormativo: 'Rendering y composición de vídeo',
    descripcionCurso:
      'Veremos los parámetros para realizar la salida de nuestro render, el tipo de formato y las dimensiones, así como también la composición de nuestro video mediante los pases de render y la aplicación de efectos especiales haciendo camera tracking para agregarlos a nuestras escenas.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Elementos de render',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Compositor',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Efectos visuales (VFX)',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Blender. (2021). Introduction — Blender Manual.',
      link:
        'https://docs.blender.org/manual/en/latest/compositing/introduction.html#getting-started',
    },
  ],
  glosario: [
    {
      termino: 'Addon',
      significado:
        'Programa que se puede instalar en <em>Blender</em> para facilitar el desarrollo de algún proceso complejo en el software.',
    },
    {
      termino: 'Camera Track',
      significado:
        'Rastreo de movimiento de una secuencia de video, mediante marcadores, para agregar elementos 3D.',
    },
    {
      termino: 'Green Screen',
      significado:
        'Llamada <em>chroma key</em>, es la técnica con la cual se remueve dicho color de la imagen para agregar cualquier otro elemento.',
    },
    {
      termino: 'Motor de Render',
      significado: 'Programa para generar imágenes 2D a partir de objetos 3D.',
    },
    {
      termino: 'Nodos',
      significado:
        'Elementos que nos permite añadir y modificar características de luz, textura, color entre otras, a nuestros objetos de la escena, combinándolos para obtener un resultado óptimo.',
    },
    {
      termino: 'Renderizar',
      significado:
        'Es el proceso por el cual se generan imágenes 2D a partir de elementos 3D.',
    },
    {
      termino: 'VFX',
      significado:
        'Efectos especiales que se agregan al proyecto audiovisual después de la etapa de producción.',
    },
  ],
  complementario: [
    {
      texto:
        'ESCARDO | Club de Animación 3D. (2014). Tutorial de Animacion 3D: Brazos IK FK en Personajes / Rigs en Maya, Blender, 3DsMax, C4D. [video]. Youtube',
      tipo: 'Video',
      link: 'https://youtu.be/oEHBqiq97jA',
    },
    {
      texto:
        'ARTNATOMYA. (2020). Página de consulta y compra de elementos de diseño gráfico y animación.',
      tipo: 'Página web',
      link: 'http://www.artnatomia.net/uk/artnatomya.html',
    },
    {
      texto:
        'Osipa, J. (2010). Stop staring: facial modeling and animation done right.',
      tipo: 'Libro - Biblioteca SENA',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000062162',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
